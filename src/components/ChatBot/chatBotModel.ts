import { WebPDFLoader } from '@langchain/community/document_loaders/web/pdf';
import { Chroma } from '@langchain/community/vectorstores/chroma';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

// const pdfjsWorker = await import("pdfjs-dist/legacy/build/pdf.worker.min.mjs");
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.min.mjs';

export default async function chatBotModel(input) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const question = input;
  console.log("question", question);

  const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    temperature: 0.7,
    openAIApiKey: apiKey,
  });

  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

  // 1) Load the PDF
  const pdfUrlPath = "/Resume.pdf";
  const pdfResponse = await fetch(pdfUrlPath);
  const pdfBlob = await pdfResponse.blob();

  // 2) Initialize the WebPDFLoader
  const loader = new WebPDFLoader(pdfBlob, {
    splitPages: false, // Set to true if you want to treat each page as a separate document
    parsedItemSeparator: "",
    pdfjs: () => Promise.resolve(pdfjs),
  });

  // 3) Load the documents
  const docs = await loader.load();

  // split the docs:
  const splitter = new RecursiveCharacterTextSplitter({
    separators: [`. \n`],
  });

  const splittedDocs = await splitter.splitDocuments(docs);
  console.log("splittedDocs: ", splittedDocs);
  // 4) Store the data  Memory
  const vectorStore = new MemoryVectorStore(
    new OpenAIEmbeddings({ openAIApiKey: apiKey })
  );

  //TODO - Store in vector data base pinecone instead of Chroma
  // const vectorStore = await Chroma.fromDocuments(
  //   docs,
  //   new OpenAIEmbeddings({ openAIApiKey: apiKey }),
  //   {
  //     collectionName: "resume",
  //     url: "http://localhost:8000",
  //   }
  // );

  await vectorStore.addDocuments(splittedDocs);

  // 5) Create data retriever:
  const retriever = vectorStore.asRetriever({
    k: 2,
  });

  // 6) Get relevant documents:
  const results = await retriever.getRelevantDocuments(question);
  const resultDocs = results.map((result) => result.pageContent);
  console.log("resultDocs: ", resultDocs);

  // 7) Build template:
  const template = ChatPromptTemplate.fromMessages([
    [
      "system",
      "Answer the user's question concisely based on the following context: {context}",
    ],
    ["user", "{input}"],
  ]);

  const chain = template.pipe(model);

  const responseMessage = await chain.invoke({
    input: question,
    context: resultDocs,
  });
  console.log("responseMessage: ", responseMessage);

  return responseMessage.content;
}
