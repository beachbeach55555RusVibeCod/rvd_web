const items = [
  { icon: "⚡", title: "Быстро", desc: "Оперативно изготовим ваш РВД." },
  { icon: "🛡️", title: "Гарантия", desc: "Гарантия на все изделия. Работаем только с сертифицированными материалами." },
  { icon: "📦", title: "Свой склад", desc: "Широкий ассортимент рукавов и фитингов в наличии и под заказ." },
  { icon: "💰", title: "Честные цены", desc: "Без посредников — собственное производство позволяет держать цены ниже рынка." },
];

export default function Advantages() {
  return (
    <section className="py-16 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Почему выбирают нас</h2>
          <div className="w-12 h-1 bg-[#FFB800] mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-6 rounded-xl bg-[#1a1a1a] border border-gray-800 hover:border-[#FFB800]/50 transition-colors"
            >
              <div className="text-3xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
