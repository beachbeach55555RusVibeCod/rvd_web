"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const hoseTypes = [
  {
    type: "1SN",
    label: "1SN — одна оплётка",
    sizes: [
      { dn: 6,  label: "DN06 (6мм)",  pressure: 225, pricePerM: 101 },
      { dn: 8,  label: "DN08 (8мм)",  pressure: 215, pricePerM: 132 },
      { dn: 10, label: "DN10 (10мм)", pressure: 180, pricePerM: 141 },
      { dn: 12, label: "DN12 (12мм)", pressure: 160, pricePerM: 165 },
      { dn: 16, label: "DN16 (16мм)", pressure: 130, pricePerM: 170 },
      { dn: 19, label: "DN19 (19мм)", pressure: 105, pricePerM: 218 },
      { dn: 25, label: "DN25 (25мм)", pressure: 88,  pricePerM: 317 },
      { dn: 32, label: "DN32 (32мм)", pressure: 63,  pricePerM: 416 },
      { dn: 38, label: "DN38 (38мм)", pressure: 50,  pricePerM: 450 },
      { dn: 50, label: "DN50 (50мм)", pressure: 40,  pricePerM: 561 },
    ],
  },
  {
    type: "2SN",
    label: "2SN — две оплётки",
    sizes: [
      { dn: 6,  label: "DN06 (6мм)",  pressure: 400, pricePerM: 132 },
      { dn: 8,  label: "DN08 (8мм)",  pressure: 350, pricePerM: 170 },
      { dn: 10, label: "DN10 (10мм)", pressure: 330, pricePerM: 174 },
      { dn: 12, label: "DN12 (12мм)", pressure: 275, pricePerM: 210 },
      { dn: 16, label: "DN16 (16мм)", pressure: 250, pricePerM: 258 },
      { dn: 19, label: "DN19 (19мм)", pressure: 215, pricePerM: 296 },
      { dn: 25, label: "DN25 (25мм)", pressure: 165, pricePerM: 432 },
      { dn: 32, label: "DN32 (32мм)", pressure: 125, pricePerM: 498 },
      { dn: 38, label: "DN38 (38мм)", pressure: 90,  pricePerM: 588 },
      { dn: 50, label: "DN50 (50мм)", pressure: 80,  pricePerM: 780 },
    ],
  },
  {
    type: "4SP/4SH",
    label: "4SP/4SH — спиральные",
    sizes: [
      { dn: 16, label: "DN16 (16мм)", pressure: 350, pricePerM: 471 },
      { dn: 19, label: "DN19 (19мм)", pressure: 420, pricePerM: 515 },
      { dn: 25, label: "DN25 (25мм)", pressure: 380, pricePerM: 616 },
      { dn: 32, label: "DN32 (32мм)", pressure: 325, pricePerM: 775 },
    ],
  },
];

// Цена муфты обжимной (₽/шт., 2 штуки на рукав)
const ferrulePrices: Record<string, Record<number, number>> = {
  "1SN":     { 6: 13, 8: 14.5, 10: 15.5, 12: 21, 16: 28, 19: 30, 25: 55, 32: 84, 38: 84, 50: 84 },
  "2SN":     { 6: 13, 8: 14.5, 10: 15.5, 12: 21, 16: 28, 19: 30, 25: 55, 32: 84, 38: 84, 50: 84 },
  "4SP/4SH": { 16: 34, 19: 40, 25: 62, 32: 110 },
};

const workPrice = 350;

export default function CalculatorPage() {
  const [typeIdx, setTypeIdx] = useState(0);
  const [sizeIdx, setSizeIdx] = useState(0);
  const [length, setLength] = useState(1);
  const [showResult, setShowResult] = useState(false);

  const selectedType = hoseTypes[typeIdx];
  const selectedSize = selectedType.sizes[sizeIdx];
  const ferrulePrice = ferrulePrices[selectedType.type]?.[selectedSize.dn] ?? 0;

  const hosePrice  = Math.round(selectedSize.pricePerM * length * 100) / 100;
  const muftyPrice = Math.round(ferrulePrice * 2 * 100) / 100;
  const total      = Math.round((hosePrice + muftyPrice + workPrice) * 100) / 100;

  function handleTypeChange(idx: number) {
    setTypeIdx(idx);
    setSizeIdx(0);
    setShowResult(false);
  }

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    setShowResult(true);
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-[#1e3a5f] text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-sm text-blue-200 mb-2">
              <Link href="/" className="hover:text-white">Главная</Link> / Калькулятор
            </div>
            <h1 className="text-3xl font-bold">Калькулятор РВД</h1>
            <p className="text-blue-200 mt-2">
              Расчёт стоимости рукава по реальным ценам с НДС
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={calculate} className="space-y-6">

              {/* Тип рукава */}
              <div>
                <label className="block text-sm font-bold text-[#1e3a5f] mb-2">
                  Тип рукава
                </label>
                <div className="space-y-2">
                  {hoseTypes.map((t, i) => (
                    <button
                      key={t.type}
                      type="button"
                      onClick={() => handleTypeChange(i)}
                      className={`w-full text-left text-sm px-4 py-3 rounded-xl border-2 transition-colors ${
                        typeIdx === i
                          ? "bg-[#1e3a5f] text-white border-[#1e3a5f]"
                          : "bg-white text-gray-700 border-gray-200 hover:border-[#1e3a5f]"
                      }`}
                    >
                      <span className="font-semibold">{t.type}</span>
                      <span className={`ml-2 text-xs ${typeIdx === i ? "text-blue-200" : "text-gray-400"}`}>
                        {t.label.split("—")[1]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Диаметр */}
              <div>
                <label className="block text-sm font-bold text-[#1e3a5f] mb-2">
                  Диаметр (DN)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {selectedType.sizes.map((s, i) => (
                    <button
                      key={s.dn}
                      type="button"
                      onClick={() => { setSizeIdx(i); setShowResult(false); }}
                      className={`text-sm px-3 py-2.5 rounded-xl border-2 transition-colors text-left ${
                        sizeIdx === i
                          ? "bg-[#1e3a5f] text-white border-[#1e3a5f]"
                          : "bg-white text-gray-700 border-gray-200 hover:border-[#1e3a5f]"
                      }`}
                    >
                      <div className="font-semibold">{s.label}</div>
                      <div className={`text-xs ${sizeIdx === i ? "text-blue-200" : "text-gray-400"}`}>
                        до {s.pressure} бар
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Длина */}
              <div>
                <label className="block text-sm font-bold text-[#1e3a5f] mb-2">
                  Длина рукава: <span className="text-orange-500">{length} м</span>
                </label>
                <input
                  type="range"
                  min={0.3}
                  max={20}
                  step={0.1}
                  value={length}
                  onChange={(e) => { setLength(Number(e.target.value)); setShowResult(false); }}
                  className="w-full accent-orange-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0.3 м</span><span>20 м</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {[0.5, 1, 2, 5, 10].map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => { setLength(l); setShowResult(false); }}
                      className={`text-xs px-3 py-1 rounded-lg border transition-colors ${
                        length === l
                          ? "bg-orange-500 text-white border-orange-500"
                          : "border-gray-200 text-gray-500 hover:border-orange-400"
                      }`}
                    >
                      {l} м
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-colors uppercase tracking-wide shadow-lg shadow-orange-100"
              >
                Рассчитать стоимость
              </button>
            </form>

            {/* Результат */}
            <div>
              {showResult ? (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-20">
                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-4">Расчёт стоимости</h3>
                  <div className="space-y-0 text-sm mb-5">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Рукав {selectedSize.label}</span>
                      <span className="font-medium text-[#1e3a5f]">{selectedSize.pricePerM} ₽/м</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Длина</span>
                      <span className="font-medium">{length} м</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Стоимость рукава</span>
                      <span className="font-medium">{hosePrice.toLocaleString("ru")} ₽</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Муфты обжимные × 2 шт.</span>
                      <span className="font-medium">{muftyPrice.toLocaleString("ru")} ₽</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500">Работа (обжим)</span>
                      <span className="font-medium">{workPrice} ₽</span>
                    </div>
                    <div className="flex justify-between pt-4">
                      <span className="font-bold text-[#1e3a5f] text-base">Итого с НДС</span>
                      <span className="font-bold text-orange-500 text-2xl">
                        {total.toLocaleString("ru")} ₽
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#f0f4f8] rounded-xl p-3 text-xs text-gray-500 mb-4">
                    <div className="font-semibold text-[#1e3a5f] mb-1">Состав:</div>
                    <div>{selectedType.type} {selectedSize.label} — {length} м × {selectedSize.pricePerM} ₽</div>
                    <div>Рраб = {selectedSize.pressure} бар</div>
                    <div className="mt-1 text-gray-400">* Без стоимости ниппелей. Цены с НДС.</div>
                  </div>

                  <Link
                    href="/#contact"
                    className="block text-center bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    Заказать по этим параметрам
                  </Link>
                </div>
              ) : (
                <div className="bg-[#f8f9fa] rounded-xl p-8 text-center text-gray-400 flex flex-col items-center justify-center min-h-[300px]">
                  <div className="text-5xl mb-4">🔧</div>
                  <p className="text-sm font-medium">Выберите параметры и нажмите «Рассчитать»</p>
                  <p className="text-xs mt-2 text-gray-300">Цены с НДС по прайсу 2025 г.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
