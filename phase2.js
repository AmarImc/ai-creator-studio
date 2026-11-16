
const AI_API_URL =
  "https://ai-creator-studio-api.imocaninamar2004.workers.dev";

async function frageKI(nachricht) {
  const response = await fetch(AI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: nachricht
    })
  });

  if (!response.ok) {
    throw new Error("KI-Anfrage fehlgeschlagen");
  }

  return await response.json();
}
