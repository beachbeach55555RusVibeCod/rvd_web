import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone, city, message } = await req.json();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = process.env.TELEGRAM_CHAT_IDS?.split(",") ?? [];

  if (!token || chatIds.length === 0) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const text =
    `📋 *Новая заявка с сайта РВД*\n\n` +
    `👤 Имя: ${name}\n` +
    `📞 Телефон: ${phone}\n` +
    `📍 Город: ${city}\n` +
    (message ? `💬 Сообщение: ${message}` : "");

  const results = await Promise.all(
    chatIds.map((chatId) =>
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId.trim(), text, parse_mode: "Markdown" }),
      })
    )
  );

  const allOk = results.every((r) => r.ok);
  if (!allOk) {
    return NextResponse.json({ error: "Telegram error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
