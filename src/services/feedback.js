const API_URL = "http://localhost:5000/api/feedback";

export async function getFeedback() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function saveFeedback(feedback) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedback),
  });

  return await response.json();
}