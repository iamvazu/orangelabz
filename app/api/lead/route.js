// Lead capture endpoint — wire this to Perfex/your CRM webhook before launch.
export async function POST(req) {
  const data = await req.json().catch(() => ({}));
  console.log("LEAD:", JSON.stringify(data)); // TODO: forward to CRM webhook
  return Response.json({ ok: true });
}
