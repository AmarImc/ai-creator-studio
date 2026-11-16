
export default {
  async fetch(request) {
    return Response.json({
      status: "ok",
      message: "AI Creator Studio API läuft"
    });
  }
};
