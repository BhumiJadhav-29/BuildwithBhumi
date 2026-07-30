import { useState } from "react";
import { askGemini } from "../services/gemini";
import "./chatbot.css";

function Chatbot() {

  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! 👋 I'm Bhumi AI Assistant. How can I help you?"
    }
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  async function sendMessage() {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input
    };

    setMessages(prev => [...prev, userMessage]);

    const question = input;

    setInput("");

    setLoading(true);

    const reply = await askGemini(question);

    const botMessage = {
      sender: "bot",
      text: reply
    };

    setMessages(prev => [...prev, botMessage]);

    setLoading(false);
  }

  return (
    <>
      {!isOpen && (
        <button
          className="chat-toggle"
          onClick={() => setIsOpen(true)}
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="chatbot-container">

          <div className="chatbot-box">

            <div className="chatbot-header">

              <span>🤖 Bhumi AI Assistant</span>

              <button
                className="close-btn"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>

            </div>

            <div className="chatbot-messages">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={`message ${msg.sender}`}
                >
                  {msg.text}
                </div>

              ))}

              {loading && (

                <div className="message bot">
                  Typing...
                </div>

              )}

            </div>

            <div className="chatbot-input">

              <input
                type="text"
                value={input}
                placeholder="Ask something..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />

              <button onClick={sendMessage}>
                Send
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;