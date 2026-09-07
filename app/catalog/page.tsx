import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const sections = [
  {
    id: "1sn",
    title: "РВД 1SN — одна оплётка",
    desc: "Рукава с одним слоем стальной оплётки. Рабочее давление до 225 бар.",
    priceLabel: "₽/п.м. с НДС",
    products: [
      { name: "РВД (Гладкий) К 1SN DN06", pressure: "225 бар", size: "6 мм", price: "101,00" },
      { name: "РВД (Гладкий) К 1SN DN08", pressure: "215 бар", size: "8 мм", price: "132,00" },
      { name: "РВД (Гладкий) К 1SN DN10", pressure: "180 бар", size: "10 мм", price: "141,00" },
      { name: "РВД (Гладкий) К 1SN DN12", pressure: "160 бар", size: "12 мм", price: "165,00" },
      { name: "РВД К 1SN DN10 L=100м", pressure: "180 бар", size: "10 мм", price: "119,00" },
      { name: "РВД К 1SN DN12 L=100м", pressure: "160 бар", size: "12 мм", price: "141,00" },
      { name: "РВД К 1SN DN16 L=100м", pressure: "130 бар", size: "16 мм", price: "170,00" },
      { name: "РВД К 1SN DN19 L=100м", pressure: "105 бар", size: "19 мм", price: "218,00" },
      { name: "РВД К 1SN DN25 L=100м", pressure: "88 бар",  size: "25 мм", price: "317,00" },
      { name: "РВД К 1SN DN32 L=20м",  pressure: "63 бар",  size: "32 мм", price: "416,00" },
      { name: "РВД К 1SN DN38 L=20м",  pressure: "50 бар",  size: "38 мм", price: "450,00" },
      { name: "РВД К 1SN DN50 L=20м",  pressure: "40 бар",  size: "50 мм", price: "561,00" },
    ],
  },
  {
    id: "2sn",
    title: "РВД 2SN — две оплётки",
    desc: "Рукава с двумя слоями стальной оплётки. Рабочее давление до 400 бар.",
    priceLabel: "₽/п.м. с НДС",
    products: [
      { name: "РВД (Гладкий) К 2SN DN06", pressure: "400 бар", size: "6 мм",  price: "132,00" },
      { name: "РВД (Гладкий) К 2SN DN08", pressure: "350 бар", size: "8 мм",  price: "170,00" },
      { name: "РВД (Гладкий) К 2SN DN10", pressure: "330 бар", size: "10 мм", price: "174,00" },
      { name: "РВД (Гладкий) К 2SN DN12", pressure: "275 бар", size: "12 мм", price: "210,00" },
      { name: "РВД (Гладкий) К 2SN DN16", pressure: "250 бар", size: "16 мм", price: "258,00" },
      { name: "РВД (Гладкий) К 2SN DN19 L=100м", pressure: "215 бар", size: "19 мм", price: "296,00" },
      { name: "РВД К 2SN DN25 L=100м",    pressure: "165 бар", size: "25 мм", price: "432,00" },
      { name: "РВД К 2SN DN32 L=20м",     pressure: "125 бар", size: "32 мм", price: "498,00" },
      { name: "РВД К 2SN DN38",           pressure: "90 бар",  size: "38 мм", price: "588,00" },
      { name: "РВД К 2SN DN50 L=20м",     pressure: "80 бар",  size: "50 мм", price: "780,00" },
      { name: "РВД К 2SN-K DN06 L=50м",   pressure: "450 бар", size: "6 мм",  price: "148,00" },
      { name: "РВД К 2SN-K DN08 L=50м",   pressure: "420 бар", size: "8 мм",  price: "163,00" },
      { name: "РВД К 2SN-K DN10 L=50м",   pressure: "385 бар", size: "10 мм", price: "194,00" },
      { name: "РВД К 2SN-K DN12 L=50м",   pressure: "345 бар", size: "12 мм", price: "224,00" },
      { name: "РВД К 2SN-K DN16 L=50м",   pressure: "290 бар", size: "16 мм", price: "270,00" },
      { name: "РВД К 2SN-K DN20 L=50м",   pressure: "280 бар", size: "20 мм", price: "348,00" },
      { name: "РВД в К 2SN-K DN25",       pressure: "200 бар", size: "25 мм", price: "450,00" },
    ],
  },
  {
    id: "arctic",
    title: "РВД 2SC Arctic — морозостойкие",
    desc: "Рукава MEGA PASCAL Smooth Arctic, морозостойкие до -55°C.",
    priceLabel: "₽/п.м. с НДС",
    products: [
      { name: "РВД 1SC DN06 22.5-MEGA PASCAL Smooth", pressure: "225 бар", size: "6 мм",  price: "114,00" },
      { name: "РВД 1SC DN08 21.5-MEGA PASCAL Smooth", pressure: "215 бар", size: "8 мм",  price: "137,00" },
      { name: "РВД 1SC DN10 18.0-MEGA PASCAL Smooth", pressure: "180 бар", size: "10 мм", price: "156,00" },
      { name: "РВД 2SC DN06 40.0-MEGA PASCAL Arctic -55°C", pressure: "400 бар", size: "6 мм",  price: "159,00" },
      { name: "РВД 2SC DN08 35.0-MEGA PASCAL Arctic -55°C", pressure: "350 бар", size: "8 мм",  price: "179,00" },
      { name: "РВД 2SC DN10 33.0-MEGA PASCAL Arctic -55°C", pressure: "330 бар", size: "10 мм", price: "219,00" },
      { name: "РВД 2SC DN12 27.5-MEGA PASCAL Arctic -55°C", pressure: "275 бар", size: "12 мм", price: "271,00" },
      { name: "РВД 2SC DN16 25.0-MEGA PASCAL Arctic -55°C", pressure: "250 бар", size: "16 мм", price: "299,00" },
      { name: "РВД 2SC DN19 21.5-MEGA PASCAL Arctic -55°C", pressure: "215 бар", size: "19 мм", price: "380,00" },
      { name: "РВД 2SC DN25 16.5-MEGA PASCAL Arctic -55°C", pressure: "165 бар", size: "25 мм", price: "570,00" },
    ],
  },
  {
    id: "4sp4sh",
    title: "РВД 4SP/4SH — спиральные",
    desc: "Рукава со спиральной арматурой для экстремально высокого давления до 420 бар.",
    priceLabel: "₽/п.м. с НДС",
    products: [
      { name: "РВД 2SN DN32 1.25-MEGA PASCAL", pressure: "125 бар", size: "32 мм", price: "547,00" },
      { name: "РВД 4SP DN16 35.0-MEGA PASCAL",  pressure: "350 бар", size: "16 мм", price: "471,00" },
      { name: "РВД 4SH DN19 42.0 MEGA PASCAL",  pressure: "420 бар", size: "19 мм", price: "515,00" },
      { name: "РВД 4SH DN25 38.0 MEGA PASCAL",  pressure: "380 бар", size: "25 мм", price: "616,00" },
      { name: "РВД 4SH DN32 32.5 MEGA PASCAL",  pressure: "325 бар", size: "32 мм", price: "775,00" },
    ],
  },
  {
    id: "mufty",
    title: "Муфты обжимные",
    desc: "Обжимные муфты для рукавов серий 1SN/2SN и 4SP/4SH.",
    priceLabel: "₽/шт. с НДС",
    products: [
      { name: "Муфта обжимная 1SN-2SN DN06", pressure: "—", size: "DN06", price: "13,00" },
      { name: "Муфта обжимная 1SN-2SN DN08", pressure: "—", size: "DN08", price: "14,50" },
      { name: "Муфта обжимная 1SN-2SN DN10", pressure: "—", size: "DN10", price: "15,50" },
      { name: "Муфта обжимная 1SN-2SN DN12", pressure: "—", size: "DN12", price: "21,00" },
      { name: "Муфта обжимная 1SN-2SN DN16", pressure: "—", size: "DN16", price: "28,00" },
      { name: "Муфта обжимная 1SN-2SN DN19", pressure: "—", size: "DN19", price: "30,00" },
      { name: "Муфта обжимная 1SN-2SN DN25", pressure: "—", size: "DN25", price: "55,00" },
      { name: "Муфта обжимная 1SN-2SN DN32", pressure: "—", size: "DN32", price: "84,00" },
      { name: "Муфта обжимная 4SP-4SH DN12", pressure: "—", size: "DN12", price: "30,00" },
      { name: "Муфта обжимная 4SP-4SH DN16", pressure: "—", size: "DN16", price: "34,00" },
      { name: "Муфта обжимная 4SP-4SH DN19", pressure: "—", size: "DN19", price: "40,00" },
      { name: "Муфта обжимная 4SP-4SH DN25", pressure: "—", size: "DN25", price: "62,00" },
      { name: "Муфта обжимная 4SP-4SH DN32", pressure: "—", size: "DN32", price: "110,00" },
    ],
  },
];

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-[#1e3a5f] text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-sm text-blue-200 mb-2">
              <Link href="/" className="hover:text-white">Главная</Link> / Каталог
            </div>
            <h1 className="text-3xl font-bold">Каталог продукции</h1>
            <p className="text-blue-200 mt-2 max-w-xl">
              Рукава высокого давления и муфты обжимные. Цены с НДС, актуальны на 2025 год.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-xs bg-white/10 hover:bg-orange-500 border border-white/20 px-3 py-1.5 rounded-full transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-1">{section.title}</h2>
              <p className="text-gray-500 mb-6 text-sm">{section.desc}</p>
              <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-[#1e3a5f] text-white">
                    <tr>
                      <th className="text-left px-5 py-3 font-semibold">Наименование</th>
                      <th className="text-left px-5 py-3 font-semibold">Диаметр</th>
                      <th className="text-left px-5 py-3 font-semibold">Рраб</th>
                      <th className="text-right px-5 py-3 font-semibold">{section.priceLabel}</th>
                      <th className="px-5 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {section.products.map((p, i) => (
                      <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}>
                        <td className="px-5 py-3 font-medium text-gray-800">{p.name}</td>
                        <td className="px-5 py-3 text-gray-600">{p.size}</td>
                        <td className="px-5 py-3 text-gray-600">{p.pressure}</td>
                        <td className="px-5 py-3 text-right font-bold text-[#1e3a5f]">{p.price} ₽</td>
                        <td className="px-5 py-3">
                          <Link
                            href="/#contact"
                            className="text-orange-500 hover:text-orange-700 font-medium whitespace-nowrap"
                          >
                            Заказать →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border-t border-orange-100 py-10 px-4 text-center">
          <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Не нашли нужную позицию?</h3>
          <p className="text-gray-500 mb-5">
            Изготовим под ваши параметры. Звоните или оставляйте заявку.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition-colors"
          >
            Оставить заявку
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
