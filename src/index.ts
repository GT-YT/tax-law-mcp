export default async function handler(req: Request): Promise<Response> {
  return new Response(
    JSON.stringify({
      ok: true,
      name: "tax-law-mcp",
      message: "Vercel HTTP server is working"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

