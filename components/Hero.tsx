import Image from "next/image";
import Link from "next/link";

const basePath = process.env.GITHUB_PAGES === "true" ? "/rvd_web" : "";

export default function Hero() {
  return (
    <section className="relative text-white py-24 px-4 overflow-hidden bg-[#0a0a0a]">

      {/* Фото рукавов - фон справа */}
      <div className="absolute inset-y-0 right-0 hidden lg:flex items-center">
        <div className="relative w-[48vw] max-w-[900px] aspect-[1006/406]">
          <Image
            src={`${basePath}/rvd-dop-rvd-arkaim-001.jpg`}
            alt="Рукава высокого давления с фитингами"
            fill
            sizes="48vw"
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        </div>
      </div>

      {/* Жёлтое свечение слева */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FFB800]/10 blur-3xl" />

      {/* Контент */}
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
            Производство в Казани и Альметьевске
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Рукава{" "}
            <span className="text-[#FFB800]">высокого</span>
            <br />давления под заказ
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Изготавливаем РВД любой длины и конфигурации. Выезд к клиенту,
            готовность от 1 часа. Обслуживаем
            Казань, Альметьевск и Республику Татарстан.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="#contact"
              className="bg-[#FFB800] hover:bg-[#e6a600] text-black font-bold px-8 py-4 rounded transition-colors text-center text-sm uppercase tracking-wide shadow-lg shadow-[#FFB800]/20">
              Оставить заявку
            </Link>
            <Link href="/catalog"
              className="border border-gray-700 hover:border-[#FFB800] text-gray-300 hover:text-[#FFB800] font-semibold px-8 py-4 rounded transition-colors text-center text-sm uppercase tracking-wide">
              Смотреть каталог
            </Link>
          </div>

          {/* Статы */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: "10+", label: "лет на рынке" },
              { value: "от 1 часа", label: "срок изготовления" },
              { value: "1000+", label: "клиентов" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-8 bg-gray-800" />}
                <div>
                  <div className="text-xl font-bold text-[#FFB800]">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB800]/30 to-transparent" />
    </section>
  );
}
