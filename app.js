const pad = n => String(n).padStart(3, "0");
const photoPath = (index, date) => `Zdjęcia podróży/${pad(index)}_${date}.jpg`;
const photoRange = (start, end, date) =>
  Array.from({ length: end - start + 1 }, (_, i) => photoPath(start + i, date));
const addedPhotos = date => [
  ...(window.ADDED_PHOTOS?.[date] || []),
  ...(window.EXTRA_PHOTOS?.[date] || [])
];

const roadStops = [
  ["Edmonton", 53.5461, -113.4938],
  ["Calgary", 51.0447, -114.0719],
  ["Waterton Lakes", 49.0503, -113.9080],
  ["Going-to-the-Sun Road", 48.6959, -113.7183],
  ["Whitefish", 48.4106, -114.3353],
  ["West Yellowstone", 44.6621, -111.1041],
  ["Yellowstone", 44.4280, -110.5885],
  ["Grand Teton National Park", 43.7904, -110.6818],
  ["Jackson Hole", 43.4799, -110.7624],
  ["Sugar City", 43.8727, -111.7483],
  ["Salt Lake City", 40.7608, -111.8910],
  ["Bryce Canyon", 37.6283, -112.1677],
  ["Brian Head", 37.6928, -112.8508],
  ["Zion National Park", 37.2982, -113.0263],
  ["Page", 36.9147, -111.4558],
  ["Horseshoe Bend", 36.8792, -111.5104],
  ["Monument Valley", 36.9980, -110.0980],
  ["Forrest Gump Point", 37.1014, -109.9907],
  ["Grand Canyon", 36.0544, -112.1401],
  ["Williams", 35.2495, -112.1910],
  ["Las Vegas", 36.1699, -115.1398],
  ["Death Valley", 36.5054, -117.0794],
  ["Mammoth Lakes", 37.6485, -118.9721],
  ["Yosemite", 37.7456, -119.5936],
  ["Sequoia", 36.4864, -118.5658],
  ["Oakhurst", 37.3280, -119.6493],
  ["Monterey", 36.6002, -121.8947],
  ["Big Sur / Highway 1", 36.2704, -121.8081],
  ["Los Angeles", 34.0522, -118.2437],
];

const returnStops = [
  ["Edmonton", 53.5461, -113.4938],
  ["Cline River", 52.1893, -116.4791],
  ["Saskatchewan River Crossing", 51.9394, -116.7137],
  ["Columbia Icefield", 52.2203, -117.2246],
  ["Lake Louise", 51.4254, -116.1773],
  ["Banff", 51.1784, -115.5708],
  ["Edmonton", 53.5461, -113.4938],
];

const nights = [
  ["Whitefish", 48.4106, -114.3353, "nocleg"],
  ["Sugar City", 43.8727, -111.7483, "baza podczas Yellowstone"],
  ["Salt Lake City", 40.7608, -111.8910, "nocleg"],
  ["Brian Head", 37.6928, -112.8508, "nocleg"],
  ["Page", 36.9147, -111.4558, "2 noce"],
  ["Williams", 35.2495, -112.1910, "nocleg po Wielkim Kanionie"],
  ["Las Vegas", 36.1699, -115.1398, "nocleg"],
  ["Mammoth Lakes", 37.6485, -118.9721, "nocleg koło Yosemite"],
  ["Oakhurst", 37.3280, -119.6493, "nocleg"],
  ["Monterey", 36.6002, -121.8947, "2 noce"],
  ["Los Angeles", 34.0522, -118.2437, "baza podczas zwiedzania"],
  ["Saskatchewan River Crossing", 51.9394, -116.7137, "nocleg"],
];

const attractions = [
  ["Calgary", 51.0447, -114.0719, photoPath(1,"2026-07-06")],
  ["Waterton Lakes", 49.0503, -113.9080, photoPath(9,"2026-07-06")],
  ["Going-to-the-Sun Road", 48.6959, -113.7183, photoPath(24,"2026-07-07")],
  ["Yellowstone", 44.4280, -110.5885, photoPath(45,"2026-07-09")],
  ["Bryce Canyon", 37.6283, -112.1677, photoPath(67,"2026-07-11")],
  ["Lake Powell / Page", 36.9147, -111.4558, photoPath(82,"2026-07-13")],
  ["Horseshoe Bend", 36.8792, -111.5104, photoPath(84,"2026-07-14")],
  ["Monument Valley", 36.9980, -110.0980, photoPath(87,"2026-07-14")],
  ["Wielki Kanion", 36.0544, -112.1401, photoPath(91,"2026-07-15")],
  ["Las Vegas", 36.1699, -115.1398, photoPath(105,"2026-07-16")],
  ["Death Valley", 36.5054, -117.0794, photoPath(114,"2026-07-16")],
  ["Mammoth Lakes", 37.6485, -118.9721, photoPath(122,"2026-07-17")],
  ["Yosemite", 37.7456, -119.5936, photoPath(128,"2026-07-18")],
  ["Sekwoje", 36.4864, -118.5658, photoPath(131,"2026-07-18")],
  ["Wieloryby w Monterey", 36.6002, -121.8947, photoPath(137,"2026-07-19")],
  ["Big Sur / Highway 1", 36.2704, -121.8081, photoPath(140,"2026-07-20")],
  ["Universal Studios", 34.1381, -118.3534, photoPath(153,"2026-07-21")],
  ["Plaża w Los Angeles", 34.0094, -118.4973, photoPath(157,"2026-07-22")],
  ["Lake Louise", 51.4254, -116.1773, photoPath(172,"2026-07-24")],
  ["Icefields Parkway", 52.2203, -117.2246, photoPath(179,"2026-07-25")],
];

const highlightStops = [
  ["Monterey · wieloryby", 36.6002, -121.8947, "🐋"],
  ["Jasper · Columbia Icefield", 52.2203, -117.2246, "🧊"],
  ["Lake Louise · turkusowe jezioro", 51.4254, -116.1773, "💎"],
  ["Bryce Canyon", 37.6283, -112.1677, "🏜️"],
  ["Zion National Park", 37.2982, -113.0263, "⛰️"],
  ["Page · Lake Powell", 36.9147, -111.4558, "🌊"],
  ["Horseshoe Bend", 36.8792, -111.5104, "🧲"],
  ["Forrest Gump Point", 37.1014, -109.9907, "🎬"],
  ["Yosemite", 37.7456, -119.5936, "🏔️"],
  ["Sekwoje", 36.4864, -118.5658, "🌲"],
  ["Cline River", 52.1893, -116.4791, "⛽"],
];

const days = [
  { date: "2026-07-06", label: "6 lipca", title: "Edmonton → Calgary → Waterton", note: "Start wyprawy, pierwszy przystanek w Calgary i czerwone skały Waterton Lakes.", coord: [50.29,-114.0], photos: photoRange(1,10,"2026-07-06") },
  { date: "2026-07-07", label: "7 lipca", title: "Going-to-the-Sun Road i Whitefish", note: "Górska droga przez Glacier National Park, wodospady, śnieg i nocleg w Whitefish.", coord: [48.70,-113.72], photos: [...photoRange(11,34,"2026-07-07"), photoPath(35,"2026-07-08")] },
  {
    date: "2026-07-08-whitefish",
    label: "8 lipca · część 1",
    title: "Whitefish — produkcja naleśników na podróż",
    note: "Poranna produkcja naleśników na dalszą podróż i prawdziwy rekord naszych podróżników.",
    coord: [48.41,-114.34],
    photos: ["Zdjęcia podróży/whitefish-produkcja-nalesnikow-2026-07-08.png"]
  },
  {
    date: "2026-07-08",
    label: "8 lipca · część 2",
    title: "Yellowstone National Park",
    note: "Pierwszy dzień w Yellowstone National Park i początek zwiedzania niezwykłych krajobrazów parku.",
    coord: [44.43,-110.59],
    photos: [
      "Zdjęcia podróży/yellowstone-album-2026-07-09-01.webp",
      "Zdjęcia podróży/yellowstone-album-2026-07-09-02.jpg",
      "Zdjęcia podróży/yellowstone-album-2026-07-09-03.webp",
      "Zdjęcia podróży/yellowstone-album-2026-07-09-04.webp",
      "Zdjęcia podróży/yellowstone-album-2026-07-09-05.jpg"
    ]
  },
  {
    date: "2026-07-09",
    label: "9 lipca",
    title: "Yellowstone",
    note: "Gejzery, kolorowe źródła termalne, bizony i wodospady.",
    coord: [44.43,-110.59],
    photos: [...photoRange(36,58,"2026-07-09"), "Zdjęcia podróży/yellowstone-kanion-wodospad-2026-07-09.jpg"],
    videos: [
      {
        src: "Zdjęcia podróży/yellowstone-film-2026-07-09.mp4",
        poster: photoPath(42,"2026-07-09"),
        caption: "Filmowe wspomnienie z Yellowstone National Park"
      }
    ]
  },
  { date: "2026-07-10", label: "10 lipca", title: "Wyoming → Sugar City → Salt Lake City", note: "Przejazd przez góry i miasteczka Wyoming w stronę Utah i po drodze przygoda z rodeo.", coord: [42.35,-111.82], photos: [...photoRange(59,64,"2026-07-10"), "Zdjęcia podróży/jackson-hole-kowbojski-kapelusz-2026-07-10.jpg"] },
  { date: "2026-07-11", label: "11 lipca", title: "Bryce Canyon", note: "Pierwsze spotkanie z pomarańczowymi iglicami skalnymi Bryce Canyon.", coord: [37.63,-112.17], photos: photoRange(65,70,"2026-07-11") },
  { date: "2026-07-12", label: "12 lipca", title: "Bryce Canyon, Brian Head i Zion National Park", note: "Kolejne panoramy Bryce Canyon, nocleg wysoko w górach w Brian Head i wizyta wśród monumentalnych skał Zion National Park.", coord: [37.68,-112.50], photos: photoRange(71,76,"2026-07-12") },
  { date: "2026-07-13", label: "13 lipca", title: "Page i okolice Lake Powell", note: "Czerwone szczeliny kanionów, skalne ściany, kąpiel w jeziorze i wyprawa kajakiem przez kanion w temperaturze 42°C.", coord: [36.91,-111.46], photos: [...photoRange(77,83,"2026-07-13"), "Zdjęcia podróży/page-kajaki-kanion-2026-07-13.png"] },
  { date: "2026-07-14", label: "14 lipca", title: "Horseshoe Bend, Monument Valley i Forrest Gump Point", note: "Zakole Kolorado, monumentalne krajobrazy Monument Valley i słynny widok na drogę w Forrest Gump Point.", coord: [36.94,-110.75], photos: photoRange(84,89,"2026-07-14") },
  {
    date: "2026-07-15",
    label: "15 lipca",
    title: "Wielki Kanion, Williams i Zapora Hoovera",
    note: "Punkty widokowe nad Wielkim Kanionem, klimat Route 66 w Williams, imponująca Zapora Hoovera oraz wjazd do Las Vegas.",
    coord: [35.65,-112.17],
    photos: [
      "Zdjęcia podróży/wielki-kanion-rodzina-pierwsze-2026-07-15.png",
      photoPath(90,"2026-07-15"),
      "Zdjęcia podróży/wielki-kanion-chlopiec-zachod-2026-07-15.png",
      ...photoRange(91,99,"2026-07-15")
    ]
  },
  {
    date: "2026-07-16-podroz-w-czasie",
    label: "15–16 lipca · sekcja specjalna",
    title: "Podróż w czasie — z Route 66 do Las Vegas",
    note: "Rano w historycznym Williams na Route 66, wieczorem w futurystycznym Las Vegas. Od starych samochodów i klimatu Dzikiego Zachodu do aut bez kierowcy — jeden dzień, dwa zupełnie różne światy i niezapomniana przygoda.",
    coord: [35.25,-112.19],
    photos: ["Zdjęcia podróży/podroz-w-czasie-williams-las-vegas-2026-07-16.png"]
  },
  { date: "2026-07-16", label: "16 lipca · część 1", title: "Paryż i Wenecja w Las Vegas", note: "Paryż i Wenecja pośrodku Las Vegas oraz wieczorne światła słynnego Stripu.", coord: [36.1699,-115.1398], photos: ["Zdjęcia podróży/las-vegas-paryz-2026-07-16.png", "Zdjęcia podróży/las-vegas-wenecja-2026-07-16.jpg", "Zdjęcia podróży/las-vegas-wenecja-rodzina-2026-07-16.jpg", ...photoRange(103,113,"2026-07-16").filter(src => !src.includes("/111_") && !src.includes("/112_") && !src.includes("/113_")), "Zdjęcia podróży/las-vegas-kowboje-2026-07-16.png"] },
  {
    date: "2026-07-16-death-valley",
    label: "16 lipca · część 2",
    title: "Death Valley",
    note: "Bezkresne, surowe krajobrazy Doliny Śmierci, maksymalna temperatura 52°C i niezapomniane 32 kilometry przejechane bez klimatyzacji.",
    coord: [36.5054,-117.0794],
    photos: [
      "Zdjęcia podróży/WhatsApp Image 2026-07-17 at 00.44.44.jpeg",
      photoPath(113,"2026-07-16"),
      "Zdjęcia podróży/Dodane/075_2026-07-16.jpg",
      ...photoRange(114,118,"2026-07-16"),
      ...photoRange(119,120,"2026-07-17"),
      "Zdjęcia podróży/death-valley-52c-2-2026-07-16.png",
      "Zdjęcia podróży/Nowe z archiwów/Photos-1-001 (2)/20260716_161525.jpg",
      "Zdjęcia podróży/Nowe z archiwów/Photos-1-001 (2)/20260716_163314.jpg",
      "Zdjęcia podróży/Nowe z archiwów/Photos-1-001 (2)/20260716_175238.jpg",
      "Zdjęcia podróży/Nowe z archiwów/Photos-1-001 (2)/20260716_181504.jpg",
      "Zdjęcia podróży/Nowe z archiwów/Photos-1-001 (2)/20260716_202212.jpg"
    ]
  },
  { date: "2026-07-17", label: "17 lipca · część 1", title: "Mammoth Lakes i Yosemite", note: "Zmiana pustyni na chłodne jeziora, granitowe szczyty i lasy Sierra Nevada.", coord: [37.70,-119.30], photos: [photoPath(122,"2026-07-17"), photoPath(124,"2026-07-17")] },
  {
    date: "2026-07-17-urodziny",
    label: "17 lipca · część 2",
    title: "44. urodziny Kasi",
    note: "Wyjątkowe urodziny w trasie — świętowanie pośród niezwykłych krajobrazów i wspomnienia, które zostaną w sercu na zawsze.",
    celebration: "🎂 Kasia — 44. urodziny, 17 lipca",
    coord: [37.70,-119.30],
    photos: [
      "Zdjęcia podróży/kasia-44-urodziny-2026-07-17.png",
      "Zdjęcia podróży/kasia-44-urodziny-zachod-slonca-2026-07-17.png",
      "Zdjęcia podróży/kasia-44-urodziny-jezioro-2026-07-17.png",
      "Zdjęcia podróży/urodziny-kasi-wielki-kanion-2026-07-17.png",
      "Zdjęcia podróży/urodziny-kasi-dziki-zachod-2026-07-17.png"
    ]
  },
  { date: "2026-07-18", label: "18 lipca", title: "Yosemite, sekwoje i Oakhurst", note: "Wielkie granitowe ściany Yosemite i spacer wśród olbrzymich drzew.", coord: [37.45,-119.20], photos: ["Zdjęcia podróży/yosemite-wodospad-2026-07-18.png", ...photoRange(125,131,"2026-07-18")] },
  { date: "2026-07-19", label: "19 lipca", title: "Monterey, California i wieloryby", note: "Pierwszy dzień nad Pacyfikiem w Kalifornii: plaże, ptaki, wydry i wyprawa na wieloryby.", coord: [36.60,-121.89], photos: [...photoRange(133,137,"2026-07-19"), "Zdjęcia podróży/monterey-zabawa-na-plazy-2026-07-19.png"] },
  {
    date: "2026-07-20",
    label: "20 lipca",
    title: "Big Sur i Highway 1",
    note: "Klify, zatoki, lwy morskie i najbardziej widowiskowy fragment kalifornijskiego wybrzeża.",
    coord: [36.27,-121.81],
    photos: [
      photoPath(140,"2026-07-20"),
      ...photoRange(138,139,"2026-07-20"),
      ...photoRange(141,147,"2026-07-20"),
      photoPath(149,"2026-07-20"),
      "Zdjęcia podróży/big-sur-wybrzeze-mgla-2026-07-20.png"
    ]
  },
  {
    date: "2026-07-21",
    label: "21 lipca",
    title: "Universal Studios — filmowa przygoda",
    note: "Cały dzień w świecie filmu: Universal Studios, Harry Potter, atrakcje i wieczorny CityWalk.",
    coord: [34.14,-118.35],
    photos: [
      photoPath(153,"2026-07-21"),
      "Zdjęcia podróży/universal-studios-harry-potter-2026-07-21.jpeg",
      "Zdjęcia podróży/universal-studios-citywalk-2026-07-21.jpeg"
    ],
    videos: [
      { src: "Zdjęcia podróży/universal-studios-film-1-2026-07-21.mp4", caption: "Filmowa przygoda w Universal Studios" },
      { src: "Zdjęcia podróży/universal-studios-film-2-2026-07-21.mp4", caption: "Atrakcje Universal Studios" },
      { src: "Zdjęcia podróży/universal-studios-film-3-2026-07-21.mp4", caption: "Wspomnienia z Universal Studios" }
    ]
  },
  {
    date: "2026-07-22",
    label: "22 lipca",
    title: "Los Angeles i Pacyfik",
    note: "Hollywood, plaża i ostatnia kąpiel przed powrotem do Kanady.",
    coord: [34.02,-118.50],
    photos: [
      ...photoRange(154,159,"2026-07-22")
    ],
    videos: [
      {
        src: "Zdjęcia podróży/los-angeles-film-2026-07-22.mp4",
        poster: "Zdjęcia podróży/los-angeles-film-okladka-2026-07-22.png",
        caption: "Filmowe wspomnienie z Los Angeles"
      }
    ]
  },
  { date: "2026-07-23", label: "23 lipca", title: "Cline River — spotkanie z czarnym misiem i dzikimi końmi", note: "Przystanek w Cline River przy Abraham Lake oraz niezwykłe spotkania z czarnym misiem i dzikimi końmi przed dalszą drogą w stronę Banff National Park i Lake Louise.", coord: [52.1893,-116.4791], photos: photoRange(160,165,"2026-07-24") },
  { date: "2026-07-25", label: "24–25 lipca · część 1", title: "Jasper National Park i Columbia Icefield", note: "Pierwszy etap przez kanadyjskie Góry Skaliste: Jasper National Park, Columbia Icefield, Saskatchewan River Crossing i Icefields Parkway.", coord: [52.02,-116.95], photos: [photoPath(183,"2026-07-25")] },
  { date: "2026-07-24", label: "24–25 lipca · część 2", title: "Banff National Park i Lake Louise", note: "Kolejny etap prowadził przez Banff National Park, nad turkusową wodę Lake Louise i do punktu widokowego na Peyto Lake.", coord: [51.31,-115.87], photos: ["Zdjęcia podróży/lake-louise-panorama-pierwsze-2026-07-24.png", ...photoRange(166,169,"2026-07-24"), "Zdjęcia podróży/lake-louise-kasia-syn-2026-07-24.png", "Zdjęcia podróży/lake-louise-chlopiec-2026-07-24.png", ...photoRange(170,173,"2026-07-24")] },
  {
    date: "2026-07-25-minnewanka",
    label: "24–25 lipca · część 3",
    title: "Lake Minnewanka",
    note: "Po Columbia Icefield i Lake Louise dotarliśmy nad Lake Minnewanka — rozległe górskie jezioro otoczone szczytami i lasami Banff National Park.",
    coord: [51.2476,-115.5003],
    photos: photoRange(175,179,"2026-07-25"),
    videos: [
      {
        src: "Zdjęcia podróży/lake-minnewanka-film-2026-07-24.mp4",
        poster: photoPath(175,"2026-07-25"),
        caption: "Filmowe wspomnienie znad Lake Minnewanka"
      }
    ]
  },
  { date: "2026-07-25-edmonton", label: "25 lipca · finał", title: "Powrót do Edmonton i pożegnanie z naszym ukochanym Jeepem Grand Wagoneerem", note: "Po tysiącach kilometrów, niezliczonych widokach i przygodach wróciliśmy bezpiecznie do Edmonton. Nasz Jeep Grand Wagoneer był z nami przez całą tę niezwykłą podróż — prowadził nas przez góry, pustynie, parki narodowe i długie amerykańskie drogi. Stał się czymś więcej niż tylko samochodem. Był częścią naszej wyprawy, naszym drugim domem i cichym bohaterem tej przygody.<br><br>Dziękujemy Ci za każdą bezpiecznie przejechaną milę, za wygodę, niezawodność i za to, że dowiozłeś nas szczęśliwie do domu. Trudno było się pożegnać, bo razem z Tobą kończył się jeden z najpiękniejszych rozdziałów naszej podróży.", coord: [53.5461,-113.4938], photos: [] },
  {
    date: "2026-07-25-wspomnienia",
    label: "25 lipca · zakończenie",
    title: "Czas na wspomnienia",
    note: "Po wielkiej podróży przyszedł czas na odpoczynek, wspomnienia i powrót myślami do najpiękniejszych chwil.",
    coord: [53.5461,-113.4938],
    photos: [],
    videos: [
      {
        src: "Zdjęcia podróży/czas-na-wspomnienia-film-2026-07-25.mp4",
        poster: "Zdjęcia podróży/edmonton-powrot-do-mieszkania.png",
        caption: "Czas na wspomnienia — finał naszej podróży"
      }
    ]
  },
];

const jasperDay = days.find(day => day.date === "2026-07-25");
if (jasperDay) {
  jasperDay.title = "Jasper National Park i Columbia Icefield";
  jasperDay.note = "Druga część finałowego etapu: Jasper National Park, Columbia Icefield, Saskatchewan River Crossing i Icefields Parkway.";
  jasperDay.photos.unshift("Zdjęcia podróży/columbia-icefield-2026-07-25.png");
}

days.forEach(day => day.photos.push(...addedPhotos(day.date)));

const yellowstoneStartDay = days.find(day => day.date === "2026-07-08");
if (yellowstoneStartDay) {
  yellowstoneStartDay.photos.push("Zdjęcia podróży/Dodane/029_2026-07-08.jpg");
}

const yosemiteDay = days.find(day => day.date === "2026-07-18");
if (yosemiteDay) {
  yosemiteDay.photos.push(photoPath(132,"2026-07-19"));
}

const montereyDay = days.find(day => day.date === "2026-07-19");
if (montereyDay) {
  montereyDay.photos.push("Zdjęcia podróży/monterey-wieczor-ognisko-2026-07-19.png");
}

const routeData = window.TRAVEL_ROUTE_DATA;
const map = L.map("map", { zoomControl: true, scrollWheelZoom: false }).setView([42.5, -115], 4);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const mainRoute = L.polyline(routeData.usa, {
  color: "#67429a", weight: 5, opacity: .92, lineJoin: "round"
}).addTo(map);
const flightRoute = L.polyline(routeData.flight, {
  color: "#174f43", weight: 3, opacity: .9, dashArray: "12 10"
}).addTo(map);
const albertaRoute = L.polyline(routeData.alberta, {
  color: "#17643f", weight: 6, opacity: .96, lineJoin: "round"
}).addTo(map);

const allRouteBounds = L.latLngBounds([
  ...routeData.usa,
  ...routeData.alberta,
  ...routeData.flight
]);
const albertaBounds = L.latLngBounds(routeData.alberta);
map.fitBounds(allRouteBounds, { padding: [35, 35] });

const markerIcon = number => L.divIcon({
  className: "",
  html: `<div class="custom-marker"><span>${number}</span></div>`,
  iconSize: [31,31],
  iconAnchor: [15,29],
  popupAnchor: [0,-27]
});

const albertaMarkers = [];
const albertaStopIcons = [
  "&#127968;", // Edmonton — dom
  "&#128059;", // Cline River — niedźwiedź
  "&#129482;", // Columbia Icefield — lód
  "&#128142;", // Lake Louise — turkusowe jezioro
  "&#9968;&#65039;", // Banff — góry
  "&#128758;", // Lake Minnewanka — łódź
  "&#127956;&#65039;" // Canmore — górski krajobraz
];
routeData.albertaStops.slice(0, 7).forEach((stop, index) => {
  const icon = L.divIcon({
    className: "",
    html: `<div class="alberta-route-marker" aria-label="${stop.name}">${albertaStopIcons[index]}</div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19]
  });
  const marker = L.marker(stop.coord, { icon, zIndexOffset: 900 })
    .addTo(map)
    .bindPopup(`<strong>${index === 0 ? "1. Edmonton — początek<br>8. Edmonton — powrót" : `${stop.n}. ${stop.name}`}</strong>`)
    .bindTooltip(index === 0 ? "Edmonton — start i powrót" : stop.name, {
      direction: index === 2 || index === 3 ? "left" : "right",
      offset: index === 2 || index === 3 ? [-16, 0] : [16, 0]
    });
  albertaMarkers.push(marker);
});

const bearing = (from, to) => {
  const y = Math.sin((to[1] - from[1]) * Math.PI / 180) * Math.cos(to[0] * Math.PI / 180);
  const x = Math.cos(from[0] * Math.PI / 180) * Math.sin(to[0] * Math.PI / 180)
    - Math.sin(from[0] * Math.PI / 180) * Math.cos(to[0] * Math.PI / 180)
    * Math.cos((to[1] - from[1]) * Math.PI / 180);
  return Math.atan2(y, x) * 180 / Math.PI;
};
for (let i = 1; i < 8; i += 1) {
  const pointIndex = Math.floor((routeData.alberta.length - 2) * i / 8);
  const from = routeData.alberta[pointIndex];
  const to = routeData.alberta[pointIndex + 1];
  const icon = L.divIcon({
    className: "",
    html: `<div class="route-direction-arrow" style="transform:rotate(${bearing(from, to)}deg)">➤</div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11]
  });
  L.marker(from, { icon, interactive: false, zIndexOffset: 700 }).addTo(map);
}

const updateAlbertaLabels = () => {
  albertaMarkers.forEach(marker => {
    if (map.getZoom() >= 6) marker.openTooltip();
    else marker.closeTooltip();
  });
};
map.on("zoomend", updateAlbertaLabels);
updateAlbertaLabels();

document.querySelectorAll("[data-map-view]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-map-view]").forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const bounds = button.dataset.mapView === "alberta" ? albertaBounds : allRouteBounds;
    map.fitBounds(bounds, { padding: [35, 35], animate: true });
  });
});
document.querySelector('[data-map-view="all"]')?.classList.add("is-active");

nights.forEach(([name,lat,lng,note]) => {
  const icon = L.divIcon({
    className: "",
    html: `<div class="night-marker">●</div>`,
    iconSize: [18,18],
    iconAnchor: [9,9],
    popupAnchor: [0,-8]
  });
  L.marker([lat,lng], { icon, zIndexOffset: 500 })
    .addTo(map)
    .bindPopup(`<div class="night-popup"><strong>🛏️ ${name}</strong><small>${note}</small></div>`);
});

highlightStops.forEach(([name,lat,lng,symbol]) => {
  const icon = L.divIcon({
    className: "",
    html: `<div class="highlight-marker" aria-hidden="true">${symbol}</div>`,
    iconSize: [30,30],
    iconAnchor: [15,15],
    popupAnchor: [0,-13]
  });
  L.marker([lat,lng], { icon, zIndexOffset: 700 })
    .addTo(map)
    .bindPopup(`<div class="highlight-popup"><strong>${symbol} ${name}</strong></div>`);
});

const losAngelesIcon = L.divIcon({
  className: "",
  html: `<div class="highlight-marker highlight-marker--rollercoaster" aria-label="Los Angeles — rollercoaster">&#127906;</div>`,
  iconSize: [34,34],
  iconAnchor: [17,17],
  popupAnchor: [0,-15]
});
L.marker([34.1381, -118.3534], { icon: losAngelesIcon, zIndexOffset: 760 })
  .addTo(map)
  .bindPopup(`<div class="highlight-popup"><strong>&#127906; Los Angeles — rollercoaster</strong></div>`);

const strip = document.getElementById("stop-strip");
[...roadStops, ...returnStops.slice(1)].forEach(([name,lat,lng]) => {
  const button = document.createElement("button");
  button.className = "stop-chip";
  button.textContent = name;
  button.addEventListener("click", () => map.flyTo([lat,lng], 7, { duration: 1.1 }));
  strip.appendChild(button);
});

const timeline = document.getElementById("timeline");
const allPhotos = [];
days.forEach((day, i) => {
  const article = document.createElement("article");
  article.className = day.date === "2026-07-21"
    ? "day-card day-card--universal"
    : "day-card";
  article.id = `day-${i + 1}`;
  const gallery = day.photos.map((src, photoIndex) => {
    const globalIndex = allPhotos.push({ src, caption: `${day.label} · ${day.title}` }) - 1;
    return `<button class="photo-button" data-photo="${globalIndex}" aria-label="Otwórz zdjęcie ${photoIndex + 1} z dnia ${day.label}">
      <img src="${src}" loading="lazy" alt="${day.title}, zdjęcie ${photoIndex + 1}">
    </button>`;
  }).join("");
  const celebration = day.celebration
    ? `<span class="celebration-badge">${day.celebration}</span>`
    : "";
  const videos = [...(day.videos || [])];
  const dayVideo = videos.map(video => `
    <figure class="day-video">
      <video controls preload="metadata"${video.poster ? ` poster="${video.poster}"` : ""}>
        <source src="${video.src}" type="video/mp4">
        Twoja przeglądarka nie obsługuje odtwarzania filmu.
      </video>
      <figcaption>${video.caption}</figcaption>
    </figure>
  `).join("");
  const mediaCount = day.photos.length
    ? `${day.photos.length} ${day.photos.length === 1 ? "zdjęcie" : "zdjęć"}`
    : `${videos.length} ${videos.length === 1 ? "film" : "filmy"}`;
  article.innerHTML = `
    <div class="day-number">${i + 1}</div>
    <div class="day-copy">
      <span class="day-date">${day.label}</span>
      <h3>${day.title}</h3>
      ${celebration}
      <p>${day.note}</p>
      <span class="photo-count">${mediaCount}</span>
    </div>
    <div class="day-gallery">${gallery}${dayVideo}</div>
  `;
  timeline.appendChild(article);
  if (day.date === "2026-07-19") {
    const whaleExcursion = document.getElementById("whale-excursion");
    if (whaleExcursion) {
      timeline.appendChild(whaleExcursion);
      whaleExcursion.hidden = false;
    }
  }
});

const dialog = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
let currentPhoto = 0;

function showPhoto(index) {
  currentPhoto = (index + allPhotos.length) % allPhotos.length;
  lightboxImage.src = allPhotos[currentPhoto].src;
  lightboxCaption.textContent = `${allPhotos[currentPhoto].caption} · ${currentPhoto + 1} / ${allPhotos.length}`;
}
document.addEventListener("click", event => {
  const button = event.target.closest("[data-photo]");
  if (!button) return;
  showPhoto(Number(button.dataset.photo));
  dialog.showModal();
});
document.getElementById("lightbox-close").addEventListener("click", () => dialog.close());
document.getElementById("lightbox-prev").addEventListener("click", () => showPhoto(currentPhoto - 1));
document.getElementById("lightbox-next").addEventListener("click", () => showPhoto(currentPhoto + 1));
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", event => {
  if (!dialog.open) return;
  if (event.key === "ArrowLeft") showPhoto(currentPhoto - 1);
  if (event.key === "ArrowRight") showPhoto(currentPhoto + 1);
});
