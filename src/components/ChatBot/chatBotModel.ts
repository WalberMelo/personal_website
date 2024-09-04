import axios from 'axios';

export const chatBotModel = async (input: string) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  try {
    const response = await axios.post(
      `${API_URL}/chatbot/query`,
      {
        question: input,
      },
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error calling AI API:", error);
    throw error;
  }
};
