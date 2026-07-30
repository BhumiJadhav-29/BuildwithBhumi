const API_URL = "http://localhost:5000/chat";

export async function askGemini(message) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Server Error");
    }

    const data = await response.json();

    return data.reply;

  } catch (error) {
    console.error(error);

    return "❌ Sorry, I couldn't connect to the AI server.";
  }
}