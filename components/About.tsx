export default function About() {
  return (
    <section className="py-16 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">О компании</h2>
            <div className="w-12 h-1 bg-[#FFB800] mb-6" />
            <p className="text-gray-400 leading-relaxed mb-4">
              Мы производим и поставляем рукава высокого давления для
              промышленных предприятий, строительной техники, сельскохозяйственного
              и нефтесервисного оборудования по всей России.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Используем только сертифицированные материалы — рукав, фитинги и
              обжимные гильзы соответствуют стандартам DIN EN 853/856.
              Собственное производство позволяет изготавливать РВД в течение
              1–2 часов с момента заказа.
            </p>
            <ul className="space-y-2">
              {[
                "Ремонт рукавов",
                "Изготовление РВД на заказ любой сложности",
                "Подбор фитингов и адаптеров",
                "Работа с юридическими и физическими лицами",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-300">
                  <span className="text-[#FFB800] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "1000+", text: "постоянных клиентов" },
              { num: "10 000+", text: "РВД в год" },
              { num: "2", text: "города присутствия" },
              { num: "100%", text: "гарантия качества" },
            ].map((s) => (
              <div
                key={s.text}
                className="bg-[#1a1a1a] border border-[#FFB800]/20 rounded-xl p-6 text-center hover:border-[#FFB800]/50 transition-colors"
              >
                <div className="text-3xl font-bold text-[#FFB800]">{s.num}</div>
                <div className="text-sm text-gray-500 mt-2">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
