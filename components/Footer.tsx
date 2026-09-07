import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-500 py-10 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-[#FFB800] text-black font-bold text-sm px-2 py-0.5 rounded">РВД</div>
              <span className="text-white font-semibold">ТД ПРОФ РВД</span>
            </div>
            <p className="text-sm leading-relaxed">
              Производство рукавов высокого давления в Казани и Альметьевске.
              Изготовление, ремонт, поставка комплектующих.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Разделы</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#FFB800] transition-colors">Главная</Link></li>
              <li><Link href="/catalog" className="hover:text-[#FFB800] transition-colors">Каталог</Link></li>
              <li><Link href="/calculator" className="hover:text-[#FFB800] transition-colors">Калькулятор</Link></li>
              <li><Link href="#contact" className="hover:text-[#FFB800] transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-600">Казань:</span>{" "}
                <a href="tel:+79047174800" className="hover:text-[#FFB800] transition-colors">+7 (904) 717-48-00</a>
              </li>
              <li>
                <span className="text-gray-600">Альметьевск:</span>{" "}
                <a href="tel:+79678716444" className="hover:text-[#FFB800] transition-colors">+7 (967) 871-64-44</a>
              </li>
              <li>
                <span className="text-gray-600">Опт:</span>{" "}
                <a href="tel:+79867170444" className="hover:text-[#FFB800] transition-colors">+7 (986) 717-04-44</a>
              </li>
              <li>
                <a href="mailto:profrvdpostavka@mail.ru" className="hover:text-[#FFB800] transition-colors">
                  profrvdpostavka@mail.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-xs text-center text-gray-700">
          © {new Date().getFullYear()} ТД ПРОФ РВД ПОСТАВКА. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
