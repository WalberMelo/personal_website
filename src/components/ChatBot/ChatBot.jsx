import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Avatar,
  Fab,
  Zoom,
  Slide,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { chatBotModel } from "./chatBotModel";

export default function Chatbot({ theme }) {
  const mode = theme;
  const [messages, setMessages] = useState([
    {
      id: 1, // Added a unique ID for each message
      text: `Hello! I'm Walber Melo.What would you like to know about me?`,
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add the user's message to the chat
    const newMessage = {
      id: messages.length + 1,
      text: input,
      isUser: true,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatBotModel(input);
      const botResponseText = response.answer;
      const botResponse = {
        id: messages.length + 2,
        text: botResponseText,
        isUser: false,
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error getting chatbot response:", error);
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, something went wrong.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
    setIsLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Zoom in={!isOpen}>
        <Fab
          aria-label="open chat"
          onClick={toggleChat}
          sx={{
            color: mode?.theme === "light" ? "#9e76fb" : "#6c35eb",
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
        >
          <ChatIcon />
        </Fab>
      </Zoom>
      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            width: 400,
            maxWidth: "90vw",
            boxShadow: 3,
            borderRadius: 2,
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              height: isMinimized ? "auto" : 500,
              maxHeight: "80vh",
            }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor:
                  mode?.theme === "light" ? "#9e76fb" : "#6c35eb",
                color: "primary.contrastText",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Walber's Assistant</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Button
                  color="inherit"
                  onClick={toggleMinimize}
                  aria-label={isMinimized ? "maximize chat" : "minimize chat"}
                >
                  {isMinimized ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Button>
                <Button
                  color="inherit"
                  onClick={toggleChat}
                  aria-label="close chat"
                >
                  <CloseIcon />
                </Button>
              </Box>
            </Box>
            {!isMinimized && (
              <>
                <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      style={{
                        display: "flex",
                        justifyContent: message.isUser
                          ? "flex-end"
                          : "flex-start",
                        marginBottom: "10px",
                      }}
                    >
                      {!message.isUser && (
                        <Avatar
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar_no_background-ZnczIBRTNAipKt1UdOoEN7aIPsVGt1.png"
                          alt="Bot Avatar"
                          sx={{
                            width: 40,
                            height: 40,
                            mr: 1,
                            border: "2px solid",
                            borderColor: "primary.main",
                          }}
                        />
                      )}
                      <Paper
                        elevation={1}
                        sx={{
                          p: 1,
                          bgcolor: message.isUser
                            ? "#7c55bf"
                            : "secondary.main",
                          maxWidth: "70%",
                        }}
                      >
                        <Typography
                          variant="body1"
                          color="primary.contrastText"
                        >
                          {message.text}
                        </Typography>
                      </Paper>
                      {message.isUser && (
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            ml: 1,
                            bgcolor: "primary.deepPurple",
                          }}
                        >
                          U
                        </Avatar>
                      )}
                    </div>
                  ))}

                  {isLoading && (
                    <div style={{ textAlign: "center", margin: "10px 0" }}>
                      <Typography variant="body2" color="textSecondary">
                        Processing...
                      </Typography>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </Box>
                <Box sx={{ p: 2, bgcolor: "background.paper" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Ask a question about my resume..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    aria-label="Chat input"
                    size="small"
                  />
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleSend}
                    sx={{
                      mt: 1,
                      backgroundColor:
                        mode?.theme === "light" ? "#9e76fb" : "#6c35eb",
                      "&:hover": {
                        backgroundColor:
                          mode?.theme === "light" ? "#6c35eb" : "#7e57c2",
                      },
                    }}
                    fullWidth
                    aria-label="Send message"
                  >
                    Enviar
                  </Button>
                  <Box
                    sx={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <code>Developed by 🟣 Walber Melo</code>
                  </Box>
                </Box>
              </>
            )}
          </Paper>
        </Box>
      </Slide>
    </>
  );
}
