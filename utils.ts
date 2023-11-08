export const getEnv = (name: string, defaultValue?: any) => {
  let env;

  if (typeof window === "undefined") {
    env = process.env;
  } else {
    env = (window as any).env || {};
  }

  // if (!env[name] && !defaultValue) {
  //   throw new Error(`${name} is required`);
  // }

  if (defaultValue) {
    return defaultValue;
  }

  return env[name];
};
export const isEmptyObject = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export const hidePhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length > 8) {
    throw new Error("Phone number must have at least 8 digits.");
  }
  if (phoneNumber.length > 0) {
    const firstDigit: string = phoneNumber[0];
    const lastDigit: string = phoneNumber.slice(-2);
    const hiddenDigits: string = "*".repeat(phoneNumber.length - 3);
    return firstDigit + hiddenDigits + lastDigit;
  }
};

export const customShortWeekdays = [
  "Ням",
  "Дав",
  "Мя",
  "Лха",
  "Пү",
  "Баа",
  "Бя",
];

export const testTableHeaderData1 = ["Он сар", "Мөнгөн дүн", "Гүйлгээний утга"];
export const testTableHeaderData2 = [
  "Он сар",
  "Гүйлгээний төрөл",
  "Мөнгөн дүн",
  "Төлөв",
];

export const testTransactionData = [
  {
    date: "2023-06-01",
    amount: 1500000,
    description: "Хэрэглээний зээл",
  },
  {
    date: "2023-06-05",
    amount: 2000000,
    description: "Мөнгө таталт",
  },
  {
    date: "2023-07-10",
    amount: 1200000,
    description: "Хэрэглээний зээл",
  },
  {
    date: "2023-07-15",
    amount: 1800000,
    description: "Мөнгө таталт",
  },
  {
    date: "2023-08-02",
    amount: 900000,
    description: "Хэрэглээний зээл",
  },
];

export const testloan = [
  {
    product: "Цахим кредит зээл",
    amount: 2000000,
    status: "Хугацаа хэтэрсэн",
  },
  {
    product: "Цахим кредит зээл",
    amount: 500000,
    status: "Хэвийн",
  },
  {
    product: "Цахим кредит зээл",
    amount: 2000000,
    status: "Хугацаа хэтэрсэн",
  },
  {
    product: "Цахим кредит зээл",
    amount: 2000000,
    status: "Хугацаа хэтэрсэн",
  },
  {
    product: "Цахим кредит зээл",
    amount: 500000,
    status: "Хэвийн",
  },
  {
    product: "Цахим кредит зээл",
    amount: 2000000,
    status: "Хугацаа хэтэрсэн",
  },
  {
    product: "Цахим кредит зээл",
    amount: 500000,
    status: "Хэвийн",
  },
];

export const textArray = [
  "Орон сууц, объект барьцаалсан зээл",
  "Автомашин гараашид байрлуулах зээл",
  "Хашаа байшин барьцаалсан зээл",
  "Төслийн зээл",
  "Автомашин барьцаалсан зээл",
  "Нийтийн орон сууц",
  "Барилга байгууламж",
];

export const locs = [
  {
    name: "Төв салбар",
    phone: "+976 7575 - 1818",
    mail: "info@omz.mn",
    openHours: "Даваа - Баасан: 08:00 - 17:00",
    startTime: 8,
    endTime: 17,
    details:
      "Улаанбаатар хот. Сүхбаатар дүүрэг, 3-р хороо, Сөүлийн гудамж, СӨҮЛ ПЛАЗА оффис, 4 давхар, 401 тоот.",
  },
  {
    name: "Сонгино-Хайрхан салбар",
    phone: "+976 7575 - 1818",
    mail: "info@omz.mn",
    openHours: "Даваа - Баасан: 08:00 - 17:00",
    startTime: 8,
    endTime: 17,
    details:
      "Улаанбаатар хот, Сонгино Хайрхан дүүрэг, 17-р хороо, Өнөр хороолол, УБ Виста төв, 1 давхар, 103 тоот.",
  },
  {
    name: "Баянзүрх салбар",
    phone: "+976 7575 - 1818",
    mail: "info@omz.mn",
    openHours: "Даваа - Баасан: 08:00 - 17:00",
    startTime: 8,
    endTime: 17,
    details:
      "Улаанбаатар хот. Баянзүрх дүүрэг, 14-р хороо, Альфа бюлдинг, 2 давхар, 201 тоот.",
  },
  {
    name: "Хан - Уул салбар",
    phone: "+976 7575 - 1818",
    mail: "info@omz.mn",
    openHours: "Даваа - Баасан: 08:00 - 17:00",
    startTime: 8,
    endTime: 17,
    details:
      "Монгол улс, Улаанбаатар хот, Хан-Уул дүүрэг 1-р хороо Чингисийн өргөн чөлөө, Наран хотхоны үйлчилгээний төвийн 1 давхарт",
  },
  {
    name: "Эрдэнэт салбар",
    phone: "+976 7575 - 1818",
    mail: "info@omz.mn",
    openHours: "Даваа - Баасан: 08:00 - 17:00",
    startTime: 8,
    endTime: 17,
    details:
      "Орхон аймаг, Баян-Өндөр сум, Хүрэн Булаг баг, Анхдагчдын талбай, Анса трейд ХХК, Саруул төв, 1 давхар, 102 тоот.",
  },
];

export const ErxesImageUrl =
  "https://speakup-admin.apu.mn/gateway/read-file?key=";

export const relatives = ["Аав", "Ээж", "Ах", "Дүү"];
export const provinces = [
  {
    name: "Улаанбаатар",
  },
  {
    name: "Архангай аймаг",
  },
  {
    name: "Баян-Өлгий аймаг",
  },
  {
    name: "Баянхонгор аймаг",
  },
  {
    name: "Булган аймаг",
  },
  {
    name: "Говь-Алтай аймаг",
  },
  {
    name: "Говьсүмбэр аймаг",
  },
  {
    name: "Дархан-Уул аймаг",
  },
  {
    name: "Дорноговь аймаг",
  },
  {
    name: "Дорнод аймаг",
  },
  {
    name: "Дундговь аймаг",
  },
  {
    name: "Завхан аймаг",
  },
  {
    name: "Орхон аймаг",
  },
  {
    name: "Өвөрхангай аймаг",
  },
  {
    name: "Өмнөговь аймаг",
  },
  {
    name: "Сүхбаатар аймаг",
  },
  {
    name: "Сэлэнгэ аймаг",
  },
  {
    name: "Төв аймаг",
  },
  {
    name: "Увс аймаг",
  },
  {
    name: "Ховд аймаг",
  },
  {
    name: "Хөвсгөл аймаг",
  },
  {
    name: "Хэнтий аймаг",
  },
];
export const districts = [
  {
    city_name: "Архангай",
    name: "Батцэнгэл",
  },
  {
    city_name: "Архангай",
    name: "Булган",
  },
  {
    city_name: "Архангай",
    name: "Жаргалант",
  },
  {
    city_name: "Архангай",
    name: "Их Тамир",
  },
  {
    city_name: "Архангай",
    name: "Өндөр-Улаан",
  },
  {
    city_name: "Архангай",
    name: "Өлзийт",
  },
  {
    city_name: "Архангай",
    name: "Өгий нуур",
  },
  {
    city_name: "Архангай",
    name: "Тариат",
  },
  {
    city_name: "Архангай",
    name: "Түвшрүүлэх",
  },
  {
    city_name: "Архангай",
    name: "Хангай",
  },
  {
    city_name: "Архангай",
    name: "Хайрхан",
  },
  {
    city_name: "Архангай",
    name: "Хашаат",
  },
  {
    city_name: "Архангай",
    name: "Хотонт",
  },
  {
    city_name: "Архангай",
    name: "Цэцэрлэг",
  },
  {
    city_name: "Архангай",
    name: "Цэнхэр",
  },
  {
    city_name: "Архангай",
    name: "Чулуут",
  },
  {
    city_name: "Архангай",
    name: "Эрдэнэмандал",
  },
  {
    city_name: "Архангай",
    name: "Цахир",
  },
  {
    city_name: "Архангай",
    name: "Хоршоолол",
  },
  {
    city_name: "Архангай",
    name: "Цэцэрлэг",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Алтай",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Алтанцөгц",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Баяннуур",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Бугат",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Булган",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Буянт",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Дэлүүн",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Ногоон нуур",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Сагсай",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Толбо",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Улаан хус",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Цэнгэл",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Цагаан нуур",
  },
  {
    city_name: "Баян-Өлгий",
    name: "Өлгий",
  },
  {
    city_name: "Баянхонгор",
    name: "Баянбулаг",
  },
  {
    city_name: "Баянхонгор",
    name: "Баянговь",
  },
  {
    city_name: "Баянхонгор",
    name: "Баянлиг",
  },
  {
    city_name: "Баянхонгор",
    name: "Баян-Овоо",
  },
  {
    city_name: "Баянхонгор",
    name: "Баян-Өндөр",
  },
  {
    city_name: "Баянхонгор",
    name: "Баянцагаан",
  },
  {
    city_name: "Баянхонгор",
    name: "Баацагаан",
  },
  {
    city_name: "Баянхонгор",
    name: "Богд",
  },
  {
    city_name: "Баянхонгор",
    name: "Бөмбөгөр",
  },
  {
    city_name: "Баянхонгор",
    name: "Бууцагаан",
  },
  {
    city_name: "Баянхонгор",
    name: "Галуут",
  },
  {
    city_name: "Баянхонгор",
    name: "Гурван булаг",
  },
  {
    city_name: "Баянхонгор",
    name: "Жаргалант",
  },
  {
    city_name: "Баянхонгор",
    name: "Жинст",
  },
  {
    city_name: "Баянхонгор",
    name: "Заг",
  },
  {
    city_name: "Баянхонгор",
    name: "Өлзийт",
  },
  {
    city_name: "Баянхонгор",
    name: "Хүрээмарал",
  },
  {
    city_name: "Баянхонгор",
    name: "Шинэжинст",
  },
  {
    city_name: "Баянхонгор",
    name: "Эрдэнэцогт",
  },
  {
    city_name: "Баянхонгор",
    name: "Шаргалжуут",
  },
  {
    city_name: "Баянхонгор",
    name: "Баянхонгор",
  },
  {
    city_name: "Булган",
    name: "Баян-Агт",
  },
  {
    city_name: "Булган",
    name: "Бугат",
  },
  {
    city_name: "Булган",
    name: "Бүрэгхангай",
  },
  {
    city_name: "Булган",
    name: "Гурванбулаг",
  },
  {
    city_name: "Булган",
    name: "Дашинчилэн",
  },
  {
    city_name: "Булган",
    name: "Могод",
  },
  {
    city_name: "Булган",
    name: "Орхон",
  },
  {
    city_name: "Булган",
    name: "Сайхан",
  },
  {
    city_name: "Булган",
    name: "Сэлэнгэ",
  },
  {
    city_name: "Булган",
    name: "Тэшиг",
  },
  {
    city_name: "Булган",
    name: "Хангал",
  },
  {
    city_name: "Булган",
    name: "Хишиг-Өндөр",
  },
  {
    city_name: "Булган",
    name: "Хутагт-Өндөр",
  },
  {
    city_name: "Булган",
    name: "Баяннуур",
  },
  {
    city_name: "Булган",
    name: "Рашаант",
  },
  {
    city_name: "Булган",
    name: "Сансар",
  },
  {
    city_name: "Булган",
    name: "Хялганат",
  },
  {
    city_name: "Булган",
    name: "Булган",
  },
  {
    city_name: "Говь-Алтай",
    name: "Алтай",
  },
  {
    city_name: "Говь-Алтай",
    name: "Баян-Уул",
  },
  {
    city_name: "Говь-Алтай",
    name: "Бигэр",
  },
  {
    city_name: "Говь-Алтай",
    name: "Бугат",
  },
  {
    city_name: "Говь-Алтай",
    name: "Дарви",
  },
  {
    city_name: "Говь-Алтай",
    name: "Дэлгэр",
  },
  {
    city_name: "Говь-Алтай",
    name: "Жаргалан",
  },
  {
    city_name: "Говь-Алтай",
    name: "Тайшир",
  },
  {
    city_name: "Говь-Алтай",
    name: "Тонхил",
  },
  {
    city_name: "Говь-Алтай",
    name: "Төгрөг",
  },
  {
    city_name: "Говь-Алтай",
    name: "Халиун",
  },
  {
    city_name: "Говь-Алтай",
    name: "Хөхморьт",
  },
  {
    city_name: "Говь-Алтай",
    name: "Цогт",
  },
  {
    city_name: "Говь-Алтай",
    name: "Цээл",
  },
  {
    city_name: "Говь-Алтай",
    name: "Чандмана",
  },
  {
    city_name: "Говь-Алтай",
    name: "Шарга",
  },
  {
    city_name: "Говь-Алтай",
    name: "Эрдэнэ",
  },
  {
    city_name: "Говь-Алтай",
    name: "Гуулин",
  },
  {
    city_name: "Говь-Алтай",
    name: "Есөнбулаг",
  },
  {
    city_name: "Дорноговь",
    name: "Айраг",
  },
  {
    city_name: "Дорноговь",
    name: "Алтанширээ",
  },
  {
    city_name: "Дорноговь",
    name: "Даланжаргалан",
  },
  {
    city_name: "Дорноговь",
    name: "Дэлгэрэх",
  },
  {
    city_name: "Дорноговь",
    name: "Иххэт",
  },
  {
    city_name: "Дорноговь",
    name: "Мандах",
  },
  {
    city_name: "Дорноговь",
    name: "Өргөн",
  },
  {
    city_name: "Дорноговь",
    name: "Сайхандулаан",
  },
  {
    city_name: "Дорноговь",
    name: "Улаанбадрах",
  },
  {
    city_name: "Дорноговь",
    name: "Хатанбулаг",
  },
  {
    city_name: "Дорноговь",
    name: "Хөвсгөл",
  },
  {
    city_name: "Дорноговь",
    name: "Эрдэнэ",
  },
  {
    city_name: "Дорноговь",
    name: "Замын-Үүд",
  },
  {
    city_name: "Дорноговь",
    name: "Зүүнбаян",
  },
  {
    city_name: "Дорноговь",
    name: "Сайншанд",
  },
  {
    city_name: "Дорнод",
    name: "Баяндун",
  },
  {
    city_name: "Дорнод",
    name: "Баянтүмэн",
  },
  {
    city_name: "Дорнод",
    name: "Баян-Уул",
  },
  {
    city_name: "Дорнод",
    name: "Булган",
  },
  {
    city_name: "Дорнод",
    name: "Гурванзагал",
  },
  {
    city_name: "Дорнод",
    name: "Дашбалбар",
  },
  {
    city_name: "Дорнод",
    name: "Матад",
  },
  {
    city_name: "Дорнод",
    name: "Сэргэлэн",
  },
  {
    city_name: "Дорнод",
    name: "Халх гол",
  },
  {
    city_name: "Дорнод",
    name: "Хөлөнбуйр",
  },
  {
    city_name: "Дорнод",
    name: "Цагаан-Овоо",
  },
  {
    city_name: "Дорнод",
    name: "Чулуун хороот",
  },
  {
    city_name: "Дорнод",
    name: "Чойбалсан",
  },
  {
    city_name: "Дорнод",
    name: "Хэрлэн",
  },
  {
    city_name: "Дундговь",
    name: "Адаацаг",
  },
  {
    city_name: "Дундговь",
    name: "Баянжаргалан",
  },
  {
    city_name: "Дундговь",
    name: "Говь-Угтаал",
  },
  {
    city_name: "Дундговь",
    name: "Гурвансайхан",
  },
  {
    city_name: "Дундговь",
    name: "Дэлгэрхангай",
  },
  {
    city_name: "Дундговь",
    name: "Дэлгэрцогт",
  },
  {
    city_name: "Дундговь",
    name: "Дэрэн",
  },
  {
    city_name: "Дундговь",
    name: "Луус",
  },
  {
    city_name: "Дундговь",
    name: "Өлзийт",
  },
  {
    city_name: "Дундговь",
    name: "Өндөршил",
  },
  {
    city_name: "Дундговь",
    name: "Сайнцагаан",
  },
  {
    city_name: "Дундговь",
    name: "Сайхан-Овоо",
  },
  {
    city_name: "Дундговь",
    name: "Хулд",
  },
  {
    city_name: "Дундговь",
    name: "Цагаандэлгэр",
  },
  {
    city_name: "Дундговь",
    name: "Эрдэнэдалай",
  },
  {
    city_name: "Дундговь",
    name: "Мандалговь",
  },
  {
    city_name: "Завхан",
    name: "Алдархаан",
  },
  {
    city_name: "Завхан",
    name: "Баянтэс",
  },
  {
    city_name: "Завхан",
    name: "Баянхайрхан",
  },
  {
    city_name: "Завхан",
    name: "Булнай",
  },
  {
    city_name: "Завхан",
    name: "Дөрвөлжин",
  },
  {
    city_name: "Завхан",
    name: "Завханмандал",
  },
  {
    city_name: "Завхан",
    name: "Идэр",
  },
  {
    city_name: "Завхан",
    name: "Их-Уул",
  },
  {
    city_name: "Завхан",
    name: "Нөмрөг",
  },
  {
    city_name: "Завхан",
    name: "Отгон",
  },
  {
    city_name: "Завхан",
    name: "Сантмаргац",
  },
  {
    city_name: "Завхан",
    name: "Сонгино",
  },
  {
    city_name: "Завхан",
    name: "Түдэвтэй",
  },
  {
    city_name: "Завхан",
    name: "Тэлмэн",
  },
  {
    city_name: "Завхан",
    name: "Тэс",
  },
  {
    city_name: "Завхан",
    name: "Ургамал",
  },
  {
    city_name: "Завхан",
    name: "Цагаанхайрхан",
  },
  {
    city_name: "Завхан",
    name: "Цагаанчулуут",
  },
  {
    city_name: "Завхан",
    name: "Цэцэн-Уул",
  },
  {
    city_name: "Завхан",
    name: "Шилүүстэй",
  },
  {
    city_name: "Завхан",
    name: "Эрдэнэхайрхан",
  },
  {
    city_name: "Завхан",
    name: "Яруу",
  },
  {
    city_name: "Завхан",
    name: "Асгат",
  },
  {
    city_name: "Завхан",
    name: "Даланзадгад",
  },
  {
    city_name: "Өвөрхангай",
    name: "Баруунбаян-Улаан",
  },
  {
    city_name: "Өвөрхангай",
    name: "Бат-Өлзийт",
  },
  {
    city_name: "Өвөрхангай",
    name: "Баянгол",
  },
  {
    city_name: "Өвөрхангай",
    name: "Баян-Өндөр",
  },
  {
    city_name: "Өвөрхангай",
    name: "Богд",
  },
  {
    city_name: "Өвөрхангай",
    name: "Бүрд",
  },
  {
    city_name: "Өвөрхангай",
    name: "Гучин-Ус",
  },
  {
    city_name: "Өвөрхангай",
    name: "Зүйл",
  },
  {
    city_name: "Өвөрхангай",
    name: "Зүүнбаян-Улаан",
  },
  {
    city_name: "Өвөрхангай",
    name: "Нарийнтээл",
  },
  {
    city_name: "Өвөрхангай",
    name: "Өлзийт",
  },
  {
    city_name: "Өвөрхангай",
    name: "Сант",
  },
  {
    city_name: "Өвөрхангай",
    name: "Тарагт",
  },
  {
    city_name: "Өвөрхангай",
    name: "Төгрөг",
  },
  {
    city_name: "Өвөрхангай",
    name: "Уянга",
  },
  {
    city_name: "Өвөрхангай",
    name: "Хайрхандулаан",
  },
  {
    city_name: "Өвөрхангай",
    name: "Хархорин",
  },
  {
    city_name: "Өвөрхангай",
    name: "Хужирт",
  },
  {
    city_name: "Өвөрхангай",
    name: "Баянтээг",
  },
  {
    city_name: "Өвөрхангай",
    name: "Их-Уул",
  },
  {
    city_name: "Өвөрхангай",
    name: "Арвайхээр",
  },
  {
    city_name: "Өмнөговь",
    name: "Баяндалай",
  },
  {
    city_name: "Өмнөговь",
    name: "Баяновоо",
  },
  {
    city_name: "Өмнөговь",
    name: "Булган",
  },
  {
    city_name: "Өмнөговь",
    name: "Гурвантэс",
  },
  {
    city_name: "Өмнөговь",
    name: "Мандал-Овоо",
  },
  {
    city_name: "Өмнөговь",
    name: "Манлай",
  },
  {
    city_name: "Өмнөговь",
    name: "Номгон",
  },
  {
    city_name: "Өмнөговь",
    name: "Ноён",
  },
  {
    city_name: "Өмнөговь",
    name: "Сэврэй",
  },
  {
    city_name: "Өмнөговь",
    name: "Ханбогд",
  },
  {
    city_name: "Өмнөговь",
    name: "Ханхонгор",
  },
  {
    city_name: "Өмнөговь",
    name: "Хүрмэн",
  },
  {
    city_name: "Өмнөговь",
    name: "Цогт-Овоо",
  },
  {
    city_name: "Өмнөговь",
    name: "Цогтцэций",
  },
  {
    city_name: "Өмнөговь",
    name: "Даланзадгад",
  },
  {
    city_name: "Сүхбаатар",
    name: "Асгат",
  },
  {
    city_name: "Сүхбаатар",
    name: "Баяндэлгэр",
  },
  {
    city_name: "Сүхбаатар",
    name: "Дарьганга",
  },
  {
    city_name: "Сүхбаатар",
    name: "Мөнххаан",
  },
  {
    city_name: "Сүхбаатар",
    name: "Наран",
  },
  {
    city_name: "Сүхбаатар",
    name: "Онгон",
  },
  {
    city_name: "Сүхбаатар",
    name: "Сүхбаатар",
  },
  {
    city_name: "Сүхбаатар",
    name: "Түвшинширээ",
  },
  {
    city_name: "Сүхбаатар",
    name: "Түмэнцогт",
  },
  {
    city_name: "Сүхбаатар",
    name: "Уулбаян",
  },
  {
    city_name: "Сүхбаатар",
    name: "Халзан",
  },
  {
    city_name: "Сүхбаатар",
    name: "Эрдэнэцагаан",
  },
  {
    city_name: "Сүхбаатар",
    name: "Бүрэнцогт",
  },
  {
    city_name: "Сүхбаатар",
    name: "Баруун-Урт",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Алтанбулаг",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Баянгол",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Баруунбүрэн",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Ерөө",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Зүүнбүрэн",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Мандал",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Орхон",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Орхонтуул",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Сайхан",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Сант",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Түшиг",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Шаамар",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Хүдэр",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Жавхлант",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Цагааннуур",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Хушаат",
  },
  {
    city_name: "Сэлэнгэ",
    name: "Сүхбаатар",
  },
  {
    city_name: "Төв",
    name: "Алтанбулаг",
  },
  {
    city_name: "Төв",
    name: "Батсүмбэр",
  },
  {
    city_name: "Төв",
    name: "Баян",
  },
  {
    city_name: "Төв",
    name: "Баян-Өнжүүл",
  },
  {
    city_name: "Төв",
    name: "Баяндэлгэр",
  },
  {
    city_name: "Төв",
    name: "Баянжаргалан",
  },
  {
    city_name: "Төв",
    name: "Баянцагаан",
  },
  {
    city_name: "Төв",
    name: "Баянцогт",
  },
  {
    city_name: "Төв",
    name: "Борнуур",
  },
  {
    city_name: "Төв",
    name: "Бүрэн",
  },
  {
    city_name: "Төв",
    name: "Дэлгэрхаан",
  },
  {
    city_name: "Төв",
    name: "Жаргалант",
  },
  {
    city_name: "Төв",
    name: "Заамар",
  },
  {
    city_name: "Төв",
    name: "Лүн",
  },
  {
    city_name: "Төв",
    name: "Мөнгөнморьт",
  },
  {
    city_name: "Төв",
    name: "Өндөрширээт",
  },
  {
    city_name: "Төв",
    name: "Сэргэлэн",
  },
  {
    city_name: "Төв",
    name: "Угтаал",
  },
  {
    city_name: "Төв",
    name: "Эрдэнэ",
  },
  {
    city_name: "Төв",
    name: "Эрдэнэсант",
  },
  {
    city_name: "Төв",
    name: "Баянчандмань",
  },
  {
    city_name: "Төв",
    name: "Сүмбэр",
  },
  {
    city_name: "Төв",
    name: "Цээл",
  },
  {
    city_name: "Төв",
    name: "Баянхангай",
  },
  {
    city_name: "Төв",
    name: "Аргалант",
  },
  {
    city_name: "Төв",
    name: "Архуст",
  },
  {
    city_name: "Төв",
    name: "Зуунмод",
  },
  {
    city_name: "Увс",
    name: "Баруунтуруун",
  },
  {
    city_name: "Увс",
    name: "Бөхмөрөн",
  },
  {
    city_name: "Увс",
    name: "Давст",
  },
  {
    city_name: "Увс",
    name: "Завхан",
  },
  {
    city_name: "Увс",
    name: "Зүүнговь",
  },
  {
    city_name: "Увс",
    name: "Зүүнхангай",
  },
  {
    city_name: "Увс",
    name: "Малчин",
  },
  {
    city_name: "Увс",
    name: "Наранбулаг",
  },
  {
    city_name: "Увс",
    name: "Өлгий",
  },
  {
    city_name: "Увс",
    name: "Өмнөговь",
  },
  {
    city_name: "Увс",
    name: "Өндөрхангай",
  },
  {
    city_name: "Увс",
    name: "Сагил",
  },
  {
    city_name: "Увс",
    name: "Тариалан",
  },
  {
    city_name: "Увс",
    name: "Түргэн",
  },
  {
    city_name: "Увс",
    name: "Тэс",
  },
  {
    city_name: "Увс",
    name: "Ховд",
  },
  {
    city_name: "Увс",
    name: "Хяргас",
  },
  {
    city_name: "Увс",
    name: "Цагаанхайрхан",
  },
  {
    city_name: "Увс",
    name: "Улаангом",
  },
  {
    city_name: "Ховд",
    name: "Алтай",
  },
  {
    city_name: "Ховд",
    name: "Булган",
  },
  {
    city_name: "Ховд",
    name: "Буянт",
  },
  {
    city_name: "Ховд",
    name: "Дарви",
  },
  {
    city_name: "Ховд",
    name: "Дуут",
  },
  {
    city_name: "Ховд",
    name: "Зэрэг",
  },
  {
    city_name: "Ховд",
    name: "Манхан",
  },
  {
    city_name: "Ховд",
    name: "Мянгад",
  },
  {
    city_name: "Ховд",
    name: "Мөст",
  },
  {
    city_name: "Ховд",
    name: "Мөнххайрхан",
  },
  {
    city_name: "Ховд",
    name: "Үенч",
  },
  {
    city_name: "Ховд",
    name: "Ховд",
  },
  {
    city_name: "Ховд",
    name: "Цэцэг",
  },
  {
    city_name: "Ховд",
    name: "Чандмань",
  },
  {
    city_name: "Ховд",
    name: "Эрдэнэбүрэн",
  },
  {
    city_name: "Ховд",
    name: "Дөргөн",
  },
  {
    city_name: "Ховд",
    name: "Ховд",
  },
  {
    city_name: "Хөвсгөл",
    name: "Алаг-Эрдэнэ",
  },
  {
    city_name: "Хөвсгөл",
    name: "Арбулаг",
  },
  {
    city_name: "Хөвсгөл",
    name: "Баянзүрх",
  },
  {
    city_name: "Хөвсгөл",
    name: "Бүрэнтогтох",
  },
  {
    city_name: "Хөвсгөл",
    name: "Галт",
  },
  {
    city_name: "Хөвсгөл",
    name: "Жаргалант",
  },
  {
    city_name: "Хөвсгөл",
    name: "Их-Уул",
  },
  {
    city_name: "Хөвсгөл",
    name: "Рашаант",
  },
  {
    city_name: "Хөвсгөл",
    name: "Ринчинлхүмбэ",
  },
  {
    city_name: "Хөвсгөл",
    name: "Тариалан",
  },
  {
    city_name: "Хөвсгөл",
    name: "Тосонцэнгэл",
  },
  {
    city_name: "Хөвсгөл",
    name: "Төмөрбулаг",
  },
  {
    city_name: "Хөвсгөл",
    name: "Түнэл",
  },
  {
    city_name: "Хөвсгөл",
    name: "Улаан-Уул",
  },
  {
    city_name: "Хөвсгөл",
    name: "Ханх",
  },
  {
    city_name: "Хөвсгөл",
    name: "Цагаан-Уул",
  },
  {
    city_name: "Хөвсгөл",
    name: "Цагаан-Үүр",
  },
  {
    city_name: "Хөвсгөл",
    name: "Цэцэрлэг",
  },
  {
    city_name: "Хөвсгөл",
    name: "Чандмана-Өндөр",
  },
  {
    city_name: "Хөвсгөл",
    name: "Шинэ-Идэр",
  },
  {
    city_name: "Хөвсгөл",
    name: "Хатгал",
  },
  {
    city_name: "Хөвсгөл",
    name: "Цагаан нуур",
  },
  {
    city_name: "Хөвсгөл",
    name: "Эрдэнэбулган",
  },
  {
    city_name: "Хөвсгөл",
    name: "Мөрөн",
  },
  {
    city_name: "Хэнтий",
    name: "Батноров",
  },
  {
    city_name: "Хэнтий",
    name: "Батширээт",
  },
  {
    city_name: "Хэнтий",
    name: "Баян-Адрага",
  },
  {
    city_name: "Хэнтий",
    name: "Баянмөнх",
  },
  {
    city_name: "Хэнтий",
    name: "Баян-Овоо",
  },
  {
    city_name: "Хэнтий",
    name: "Баянхутагт",
  },
  {
    city_name: "Хэнтий",
    name: "Биндэр",
  },
  {
    city_name: "Хэнтий",
    name: "Галшир",
  },
  {
    city_name: "Хэнтий",
    name: "Дадал",
  },
  {
    city_name: "Хэнтий",
    name: "Дархан",
  },
  {
    city_name: "Хэнтий",
    name: "Дэлгэрхаан",
  },
  {
    city_name: "Хэнтий",
    name: "Жаргалтхаан",
  },
  {
    city_name: "Хэнтий",
    name: "Мөрөн",
  },
  {
    city_name: "Хэнтий",
    name: "Норовлин",
  },
  {
    city_name: "Хэнтий",
    name: "Өмнөдэлгэр",
  },
  {
    city_name: "Хэнтий",
    name: "Хэрлэн",
  },
  {
    city_name: "Хэнтий",
    name: "Цэнхэрмандал",
  },
  {
    city_name: "Хэнтий",
    name: "Бэрх",
  },
  {
    city_name: "Хэнтий",
    name: "Өлзийт",
  },
  {
    city_name: "Хэнтий",
    name: "Бор-Өндөр",
  },
  {
    city_name: "Хэнтий",
    name: "Гурванбулаг",
  },
  {
    city_name: "Хэнтий",
    name: "Өндөрхаан",
  },
  {
    city_name: "Дархан-Уул",
    name: "Хонгор",
  },
  {
    city_name: "Дархан-Уул",
    name: "Орхон",
  },
  {
    city_name: "Дархан-Уул",
    name: "Шарын гол",
  },
  {
    city_name: "Дархан-Уул",
    name: "Дархан",
  },
  {
    city_name: "Улаанбаатар",
    name: "Баянгол дүүрэг",
  },
  {
    city_name: "Улаанбаатар",
    name: "Баянзүрх дүүрэг",
  },
  {
    city_name: "Улаанбаатар",
    name: "Сонгинохайрхан дүүрэг",
  },
  {
    city_name: "Улаанбаатар",
    name: "Сүхбаатар дүүрэг",
  },
  {
    city_name: "Улаанбаатар",
    name: "Хан-Уул дүүрэг",
  },
  {
    city_name: "Улаанбаатар",
    name: "Чингэлтэй дүүрэг",
  },
  {
    city_name: "Улаанбаатар",
    name: "Налайх дүүрэг",
  },
  {
    city_name: "Улаанбаатар",
    name: "Багануур дүүрэг",
  },
  {
    city_name: "Улаанбаатар",
    name: "Багахангай дүүрэг",
  },
  {
    city_name: "Орхон",
    name: "Жаргалант",
  },
  {
    city_name: "Орхон",
    name: "Орхон",
  },
  {
    city_name: "Говьсүмбэр",
    name: "Баянтал",
  },
  {
    city_name: "Говьсүмбэр",
    name: "Шивээговь",
  },
  {
    city_name: "Говьсүмбэр",
    name: "Чойр",
  },
];

export const KhorooData = [
  {
    name: "1-р баг",
    district_name: "Батцэнгэл",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Батцэнгэл",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Батцэнгэл",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Батцэнгэл",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Батцэнгэл",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Батцэнгэл",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Батцэнгэл",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Батцэнгэл",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Батцэнгэл",
    city_name: "Архангай",
  },
  {
    name: "10-р баг",
    district_name: "Батцэнгэл",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Булган",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Булган",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Булган",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Булган",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Булган",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Булган",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Булган",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Булган",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Булган",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Жаргалант",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Жаргалант",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Жаргалант",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Жаргалант",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Жаргалант",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Жаргалант",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Жаргалант",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Жаргалант",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Жаргалант",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Их Тамир",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Их Тамир",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Их Тамир",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Их Тамир",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Их Тамир",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Их Тамир",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Их Тамир",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Их Тамир",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Их Тамир",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Өндөр-Улаан",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Өндөр-Улаан",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Өндөр-Улаан",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Өндөр-Улаан",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Өндөр-Улаан",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Өндөр-Улаан",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Өндөр-Улаан",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Өндөр-Улаан",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Өндөр-Улаан",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Өлзийт",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Өлзийт",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Өлзийт",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Өлзийт",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Өлзийт",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Өлзийт",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Өлзийт",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Өлзийт",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Өлзийт",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Өгий нуур",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Өгий нуур",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Өгий нуур",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Өгий нуур",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Өгий нуур",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Өгий нуур",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Өгий нуур",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Өгий нуур",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Өгий нуур",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Тариат",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Тариат",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Тариат",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Тариат",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Тариат",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Тариат",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Тариат",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Тариат",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Тариат",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Түвшрүүлэх",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Түвшрүүлэх",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Түвшрүүлэх",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Түвшрүүлэх",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Түвшрүүлэх",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Түвшрүүлэх",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Түвшрүүлэх",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Түвшрүүлэх",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Түвшрүүлэх",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Хангай",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Хангай",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Хангай",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Хангай",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Хангай",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Хангай",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Хангай",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Хангай",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Хангай",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Хайрхан",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Хайрхан",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Хайрхан",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Хайрхан",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Хайрхан",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Хайрхан",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Хайрхан",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Хайрхан",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Хайрхан",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Хашаат",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Хашаат",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Хашаат",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Хашаат",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Хашаат",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Хашаат",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Хашаат",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Хашаат",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Хашаат",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Хотонт",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Хотонт",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Хотонт",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Хотонт",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Хотонт",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Хотонт",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Хотонт",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Хотонт",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Хотонт",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Цэнхэр",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Цэнхэр",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Цэнхэр",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Цэнхэр",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Цэнхэр",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Цэнхэр",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Цэнхэр",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Цэнхэр",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Цэнхэр",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Чулуут",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Чулуут",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Чулуут",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Чулуут",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Чулуут",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Чулуут",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Чулуут",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Чулуут",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Чулуут",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Эрдэнэмандал",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Эрдэнэмандал",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Эрдэнэмандал",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Эрдэнэмандал",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Эрдэнэмандал",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Эрдэнэмандал",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Эрдэнэмандал",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Эрдэнэмандал",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Эрдэнэмандал",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Цахир",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Цахир",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Цахир",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Цахир",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Цахир",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Цахир",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Цахир",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Цахир",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Цахир",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Хоршоолол",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Хоршоолол",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Хоршоолол",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Хоршоолол",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Хоршоолол",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Хоршоолол",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Хоршоолол",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Хоршоолол",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Хоршоолол",
    city_name: "Архангай",
  },
  {
    name: "1-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "2-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "3-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "4-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "5-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "6-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "7-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "8-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "9-р баг",
    district_name: "Цэцэрлэг",
    city_name: "Архангай",
  },
  {
    name: "1",
    district_name: "Матад",
    city_name: "Дорнод",
  },
  {
    name: "1-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "10-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "11-р баг",
    district_name: "Баяндалай",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Баяновоо",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Баяновоо",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Баяновоо",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Баяновоо",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Баяновоо",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Баяновоо",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Баяновоо",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Баяновоо",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Баяновоо",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Булган",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Булган",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Булган",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Булган",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Булган",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Булган",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Булган",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Булган",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Булган",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Гурвантэс",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Гурвантэс",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Гурвантэс",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Гурвантэс",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Гурвантэс",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Гурвантэс",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Гурвантэс",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Гурвантэс",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Гурвантэс",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Мандал-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Мандал-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Мандал-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Мандал-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Мандал-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Мандал-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Мандал-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Мандал-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Мандал-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Манлай",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Манлай",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Манлай",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Манлай",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Манлай",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Манлай",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Манлай",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Манлай",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Манлай",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Номгон",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Номгон",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Номгон",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Номгон",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Номгон",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Номгон",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Номгон",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Номгон",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Номгон",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Ноён",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Ноён",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Ноён",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Ноён",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Ноён",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Ноён",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Ноён",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Ноён",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Ноён",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Сэврэй",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Сэврэй",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Сэврэй",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Сэврэй",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Сэврэй",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Сэврэй",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Сэврэй",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Сэврэй",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Сэврэй",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Ханбогд",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Ханбогд",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Ханбогд",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Ханбогд",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Ханбогд",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Ханбогд",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Ханбогд",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Ханбогд",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Ханбогд",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Ханхонгор",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Ханхонгор",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Ханхонгор",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Ханхонгор",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Ханхонгор",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Ханхонгор",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Ханхонгор",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Ханхонгор",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Ханхонгор",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Хүрмэн",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Хүрмэн",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Хүрмэн",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Хүрмэн",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Хүрмэн",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Хүрмэн",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Хүрмэн",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Хүрмэн",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Хүрмэн",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Цогт-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Цогт-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Цогт-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Цогт-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Цогт-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Цогт-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Цогт-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Цогт-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Цогт-Овоо",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Цогтцэций",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Цогтцэций",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Цогтцэций",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Цогтцэций",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Цогтцэций",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Цогтцэций",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Цогтцэций",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Цогтцэций",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Цогтцэций",
    city_name: "Өмнөговь",
  },
  {
    name: "1-р баг",
    district_name: "Даланзадгад",
    city_name: "Өмнөговь",
  },
  {
    name: "2-р баг",
    district_name: "Даланзадгад",
    city_name: "Өмнөговь",
  },
  {
    name: "3-р баг",
    district_name: "Даланзадгад",
    city_name: "Өмнөговь",
  },
  {
    name: "4-р баг",
    district_name: "Даланзадгад",
    city_name: "Өмнөговь",
  },
  {
    name: "5-р баг",
    district_name: "Даланзадгад",
    city_name: "Өмнөговь",
  },
  {
    name: "6-р баг",
    district_name: "Даланзадгад",
    city_name: "Өмнөговь",
  },
  {
    name: "7-р баг",
    district_name: "Даланзадгад",
    city_name: "Өмнөговь",
  },
  {
    name: "8-р баг",
    district_name: "Даланзадгад",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Даланзадгад",
    city_name: "Өмнөговь",
  },
  {
    name: "9-р баг",
    district_name: "Сүхбаатар хот",
    city_name: "Сүхбаатар",
  },
  {
    name: "18",
    district_name: "Мөнххаан",
    city_name: "Сүхбаатар",
  },
  {
    name: "7",
    district_name: "Ерөө",
    city_name: "Сэлэнгэ",
  },
  {
    name: "1",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "2",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "3",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "4",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "5",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "6",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "7",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "8",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "9",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "10",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "11",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "12",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "13",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "14",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "15",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "16",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "17",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "18",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "19",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "20",
    district_name: "Сүхбаатар дүүрэг",
    city_name: "Улаанбаатар",
  },
  {
    name: "1",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "2",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "3",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "4",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "5",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "6",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "7",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "8",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "9",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "10",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "11",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "12",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "13",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "14",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "15",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "16",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "17",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "18",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "19",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "20",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "21",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "22",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "23",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "24",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "25",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "26",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "27",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "28",
    district_name: "Баянзүрх",
    city_name: "Улаанбаатар",
  },
  {
    name: "1",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "2",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "3",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "4",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "5",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "6",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "7",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "8",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "9",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "10",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "11",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "12",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "13",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "14",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "15",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "16",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "17",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "18",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "19",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "20",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "21",
    district_name: "Баянгол",
    city_name: "Улаанбаатар",
  },
  {
    name: "1",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "1",
    district_name: "Налайх",
    city_name: "Улаанбаатар",
  },
  {
    name: "2",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "2",
    district_name: "Налайх",
    city_name: "Улаанбаатар",
  },
  {
    name: "3",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "4",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "3",
    district_name: "Налайх",
    city_name: "Улаанбаатар",
  },
  {
    name: "5",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "6",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "4",
    district_name: "Налайх",
    city_name: "Улаанбаатар",
  },
  {
    name: "7",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "8",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "5",
    district_name: "Налайх",
    city_name: "Улаанбаатар",
  },
  {
    name: "9",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "10",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "6",
    district_name: "Налайх",
    city_name: "Улаанбаатар",
  },
  {
    name: "11",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "7",
    district_name: "Налайх",
    city_name: "Улаанбаатар",
  },
  {
    name: "12",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "13",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "14",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "1",
    district_name: "Багануур",
    city_name: "Улаанбаатар",
  },
  {
    name: "15",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "2",
    district_name: "Багануур",
    city_name: "Улаанбаатар",
  },
  {
    name: "16",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "17",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "3",
    district_name: "Багануур",
    city_name: "Улаанбаатар",
  },
  {
    name: "18",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "19",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "4",
    district_name: "Багануур",
    city_name: "Улаанбаатар",
  },
  {
    name: "20",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "21",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "5",
    district_name: "Багануур",
    city_name: "Улаанбаатар",
  },
  {
    name: "22",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "23",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "24",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "25",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "6",
    district_name: "Багануур",
    city_name: "Улаанбаатар",
  },
  {
    name: "26",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "27",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "7",
    district_name: "Багануур",
    city_name: "Улаанбаатар",
  },
  {
    name: "28",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "1",
    district_name: "Багахангай",
    city_name: "Улаанбаатар",
  },
  {
    name: "29",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "30",
    district_name: "Сонгинохайрхан",
    city_name: "Улаанбаатар",
  },
  {
    name: "02",
    district_name: "Багахангай",
    city_name: "Улаанбаатар",
  },
  {
    name: "01",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "03",
    district_name: "Багахангай",
    city_name: "Улаанбаатар",
  },
  {
    name: "02",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "04",
    district_name: "Багахангай",
    city_name: "Улаанбаатар",
  },
  {
    name: "03",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "05",
    district_name: "Багахангай",
    city_name: "Улаанбаатар",
  },
  {
    name: "04",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "05",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "06",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "07",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "08",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "09",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "06",
    district_name: "Багахангай",
    city_name: "Улаанбаатар",
  },
  {
    name: "10",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "11",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "12",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "13",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "07",
    district_name: "Багахангай",
    city_name: "Улаанбаатар",
  },
  {
    name: "14",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "15",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "16",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "17",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "18",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "19",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "20",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "21",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "22",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "23",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "24",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "01",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "25",
    district_name: "Хан-Уул",
    city_name: "Улаанбаатар",
  },
  {
    name: "02",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "03",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "04",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "05",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "06",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "07",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "08",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "09",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "10",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "11",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "12",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "13",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "14",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "15",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "16",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "17",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "18",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "19",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
  {
    name: "20",
    district_name: "Чингэлтэй",
    city_name: "Улаанбаатар",
  },
];
