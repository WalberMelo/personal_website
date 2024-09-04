import axios from 'axios';

import { ImageNotSupported } from '@mui/icons-material';

export const chatBotModel = async (input: string) => {
  console.log(input);
  const API_URL = ImageNotSupported.meta.env.VITE_API_URL;
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
