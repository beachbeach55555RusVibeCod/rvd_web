"use client";

import { useState } from "react";

const contacts = [
  { city: "Казань", phone: "+7 (904) 717-48-00", hours: "Пн–Пт 8:00–18:00" },
  { city: "Альметьевск", phone: "+7 (967) 871-64-44", hours: "Пн–Пт 8:00–17:00, Сб 8:00–14:00" },
];

const perks = [
  { icon: "⚡", text: "Ответим в течение 5 минут" },
  { icon: "🛡️", text: "Гарантия на все изделия" },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", city: "Казань", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black grid lg:grid-cols-2 border border-gray-800">

          {/* Левая колонка */}
          <div className="bg-[#1a1a1a] text-white p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#FFB800]/5" />
            <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-[#FFB800]/5" />

            <div className="relative">
              <div className="inline-block bg-[#FFB800] text-black text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-widest">
                Связаться с нами
              </div>
              <h2 className="text-3xl font-bold leading-tight mb-4">
                Получите расчёт<br />
                <span className="text-[#FFB800]">бесплатно</span>
              </h2>
              <div className="space-y-3 mb-10">
                {perks.map((p) => (
                  <div key={p.text} className="flex items-center gap-3">
                    <span className="text-xl">{p.icon}</span>
                    <span className="text-sm text-gray-300">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative space-y-5">
              <div className="w-16 h-px bg-[#FFB800]/30" />
              {contacts.map((c) => (
                <div key={c.city}>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{c.city}</div>
                  <a href={`tel:${c.phone.replace(/\D/g, "")}`}
                    className="text-lg font-bold text-[#FFB800] hover:text-yellow-300 transition-colors block">
                    {c.phone}
                  </a>
                  <div className="text-xs text-gray-600 mt-0.5">{c.hours}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка */}
          <div className="bg-[#0d0d0d] p-10">
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-[#FFB800]/20 rounded-full flex items-center justify-center text-3xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">Заявка отправлена!</h3>
                <p className="text-gray-500 text-sm">Ожидайте звонка.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", city: "Казань", message: "" }); }}
                  className="mt-6 text-sm text-[#FFB800] hover:text-yellow-300 underline"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white mb-1">Оставить заявку</h3>
                  <p className="text-sm text-gray-500">Заполните форму и мы свяжемся с вами</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                      <span className="text-[#FFB800]">👤</span> Имя <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Иван Иванов"
                      className="w-full border-2 border-[#FFB800]/40 ring-4 ring-[#FFB800]/5 bg-[#1a1a1a] text-white rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-[#FFB800] transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                      <span className="text-[#FFB800]">📞</span> Телефон <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="+7 (000) 000-00-00"
                      className="w-full border-2 border-[#FFB800]/40 ring-4 ring-[#FFB800]/5 bg-[#1a1a1a] text-white rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-[#FFB800] transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    <span className="text-[#FFB800]">📍</span> Город
                  </label>
                  <select name="city" value={form.city} onChange={handleChange}
                    className="w-full border-2 border-[#FFB800]/40 ring-4 ring-[#FFB800]/5 bg-[#1a1a1a] text-white rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-[#FFB800] transition-all appearance-none cursor-pointer">
                    <option>Казань</option>
                    <option>Альметьевск</option>
                    <option>Другой город</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    <span className="text-[#FFB800]">💬</span> Описание задачи
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Диаметр, давление, длина рукава, тип техники..."
                    className="w-full border-2 border-[#FFB800]/40 ring-4 ring-[#FFB800]/5 bg-[#1a1a1a] text-white rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-[#FFB800] transition-all placeholder:text-gray-600 resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="bg-red-900/30 border border-red-800 rounded-xl px-4 py-3 text-sm text-red-400">
                    Ошибка отправки. Позвоните нам напрямую.
                  </div>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="w-full bg-[#FFB800] hover:bg-[#e6a600] active:scale-[0.98] disabled:bg-[#FFB800]/40 text-black font-bold py-4 rounded-xl transition-all text-sm tracking-widest uppercase shadow-xl shadow-[#FFB800]/20">
                  {status === "loading" ? "Отправляем..." : "✉ Отправить заявку"}
                </button>

                <p className="text-xs text-gray-700 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
