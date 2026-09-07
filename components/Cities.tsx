const cities = [
  {
    name: "Казань",
    address: "ул. Восстания, 100к1, тер. Химград, д. 240, к. 2",
    phone: "+7 (967) 871-64-44",
    extra: "Опт: +7 (986) 717-04-44",
    hours: "Пн–Пт: 8:00–18:00, Сб: 9:00–15:00",
    mapLink: "https://yandex.ru/maps/?text=Казань+улица+Восстания+100+Химград",
    mapEmbed: "https://yandex.ru/map-widget/v1/?text=Казань%2C+улица+Восстания%2C+100к1%2C+Химград&z=16&l=map",
  },
  {
    name: "Альметьевск",
    address: "тер. ГМ Моторист, 37",
    phone: "+7 (904) 717-48-00",
    extra: "",
    hours: "Пн–Пт: 8:00–18:00, Сб: 9:00–14:00",
    mapLink: "https://yandex.ru/maps/?text=Альметьевск+территория+ГМ+Моторист+37",
    mapEmbed: "https://yandex.ru/map-widget/v1/?text=Альметьевск%2C+территория+ГМ+Моторист%2C+37&z=16&l=map",
  },
];

export default function Cities() {
  return (
    <section className="py-16 px-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Наши города</h2>
          <div className="w-12 h-1 bg-[#FFB800] mx-auto mb-4" />
          <p className="text-gray-500 max-w-md mx-auto">
            Два производственных подразделения для быстрого обслуживания
            клиентов по всему Татарстану
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFB800]/50 transition-colors"
            >
              <div className="h-52 w-full">
                <iframe
                  src={city.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`Карта ${city.name}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-[#FFB800]">📍</span> {city.name}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-[#FFB800] w-5">🏠</span>
                    <span className="text-gray-400">{city.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#FFB800] w-5">📞</span>
                    <div>
                      <a href={`tel:${city.phone.replace(/\D/g, "")}`}
                        className="text-[#FFB800] hover:text-yellow-300 font-semibold transition-colors block">
                        {city.phone}
                      </a>
                      {city.extra && (
                        <a href={`tel:${city.extra.replace(/\D/g, "").replace(/^.*?(\d+)$/, "$1")}`}
                          className="text-gray-500 hover:text-[#FFB800] text-xs transition-colors mt-0.5 block">
                          {city.extra}
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#FFB800] w-5">🕐</span>
                    <span className="text-gray-400">{city.hours}</span>
                  </div>
                </div>
                <a href={city.mapLink} target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-5 border border-[#FFB800]/40 hover:border-[#FFB800] text-[#FFB800] text-sm px-5 py-2 rounded transition-colors">
                  Открыть на карте →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
