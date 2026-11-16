
export default {
  async fetch(request, env) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (request.method === "GET") {
      return Response.json({
        status: "ok",
        message: "AI Creator Studio API läuft"
      }, { headers });
    }

    if (request.method !== "POST") {
      return Response.json(
        { error: "Methode nicht erlaubt" },
        { status: 405, headers }
      );
    }

    try {
      if (!env.GEMINI_API_KEY) {
        throw new Error("API-Key fehlt");
      }

      const { prompt } = await request.json();

      if (typeof prompt !== "string" || !prompt.trim()) {
        return Response.json(
          { error: "Prompt fehlt" },
          { status: 400, headers }
        );
      }

      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": env.GEMINI_API_KEY
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: prompt }]
            }]
          })
        }
      );

      if (!response.ok) {
        throw new Error("Gemini-Anfrage fehlgeschlagen");
      }

      const data = await response.json();

      return Response.json({
        text: data.candidates?.[0]?.content?.parts
          ?.map(part => part.text || "")
          .join("") || ""
      }, { headers });

    } catch (error) {
      return Response.json(
        { error: "KI-Anfrage fehlgeschlagen" },
        { status: 500, headers }
      );
    }
  }
};
