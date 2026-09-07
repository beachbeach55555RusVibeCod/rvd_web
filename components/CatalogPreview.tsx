import Link from "next/link";

const categories = [
  {
    title: "Гидравлические РВД",
    desc: "Рукава для гидравлических систем техники. Давление до 630 бар, диаметры 6–51 мм.",
    icon: "🔧",
    href: "/catalog#1sn",
  },
  {
    title: "Промышленные рукава",
    desc: "Воздушные, топливные, водяные рукава для производственного оборудования.",
    icon: "⚙️",
    href: "/catalog#arctic",
  },
  {
    title: "Фитинги и муфты",
    desc: "Обжимные муфты, угловые и прямые переходники, адаптеры BSP/JIC/ORFS.",
    icon: "🔩",
    href: "/catalog#mufty",
  },
  {
    title: "Изготовление на заказ",
    desc: "Нестандартные конфигурации, нестандартная длина, срочное изготовление от 1 часа.",
    icon: "🏭",
    href: "#contact",
  },
];

export default function CatalogPreview() {
  return (
    <section className="py-16 px-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Продукция и услуги</h2>
          <div className="w-12 h-1 bg-[#FFB800] mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Полный спектр рукавов высокого давления и комплектующих для любого оборудования
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-[#FFB800] hover:-translate-y-1 transition-all group"
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="font-bold text-white mb-2 group-hover:text-[#FFB800] transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/catalog"
            className="inline-block bg-[#FFB800] hover:bg-[#e6a600] text-black font-bold px-8 py-3 rounded transition-colors"
          >
            Весь каталог
          </Link>
        </div>
      </div>
    </section>
  );
}
