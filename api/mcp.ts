export default function handler(req: any, res: any) {
  res.status(200).json({
    ok: true,
    name: "tax-law-mcp",
    message: "Vercel API is working"
  });
}
