import React from "react";
import Image from "next/image";
import RegisterContainer from "../../components/register/container/RegisterContainer";
import RegisterOrangeContainer from "../../components/registerorange/container/RegisterOrangeContainer";

import { GET_KNOWLEDGE_BASE_ARTICLE_DETAIL } from "./graphql/queries";
import { gql, useQuery } from "@apollo/client";
import { getErxesApolloClient } from "@/lib/initApollo";

type Props = {
  id: any;
};
export default function NewsLetterDetail(props: Props) {
  const { id } = props;
  console.log("NewsLetterDetail id > ", id);
  const { loading, error, data } = useQuery(
    gql(GET_KNOWLEDGE_BASE_ARTICLE_DETAIL),
    {
      variables: { id: id },
      client: getErxesApolloClient(),
      fetchPolicy: "network-only",
    }
  );
  console.log(
    "data?.knowledgeBaseArticleDetail DETAIL >>> ",
    data?.knowledgeBaseArticleDetail
  );
  return (
    // <div className="container_custom lg:container mx-auto py-[24px] mb-[24px] ">
    <div className="sx:w-full md:w-[722px] lg:w-[744px] mx-auto px-[15px] py-[24px] lg:py-[10px] mb-[24px] ">
      <div className="w-full">
        <Image
          src="/images/astra.png"
          sizes="100vw"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          width={100}
          height={100}
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="w-full mt-[15px]">
        <div className="flex items-center">
          <Image
            src="/images/sys_images/link_logo.svg"
            width={32}
            height={32}
            alt=""
            className="w-[32px] h-[32px]"
          />
          <p className="text-[10px] leading-[16px] text-orange-200 font-bold ml-[10px]">
            THE FUTURE #12
          </p>
        </div>
        <div className="w-full pb-[20px] border-b-[1px] border-neutral-100">
          <p className="text-[20px] leading-[30px] mdtext-[32px] md:leading-[47px] font-bold">
            {data?.knowledgeBaseArticleDetail?.title}
          </p>
        </div>
      </div>

      {/* pharagraph */}
      <div className="w-full mt-[30px]">
        <div
          className="text-gray-soft mt-3"
          dangerouslySetInnerHTML={{
            __html: data?.knowledgeBaseArticleDetail?.content,
          }}
        />
      </div>
      {/* pharagraph */}
    </div>
  );
}

{
  /* <p className="text-[28px] font-bold mb-[10px]">1 ГОЛ СЭДЭВ</p>
<p className="text-[16px] font-bold mb-[10px] mt-[10px]">Юу болов?</p>
<p className="text-[16px] mb-[10px]">
  Microsoft-ийн түүхэн дэх хамгийн том худалдан авалт эцэслэгдлээ.
  Тэдний видео тоглоомын гигант Activision Blizzard-ийг 69 тэрбум
  доллараар худалдан авах хэлцлийг Их Британийн зохицуулах байгууллага
  хүлээн зөвшөөрчээ. Үүнээс өмнө тус байгууллага энэ наймааг монополийн
  шинж чанартай, шударга бус өрсөлдөөнийг өдөөнө хэмээн үзэж хориг
  тавиад байсан билээ.
</p>

<p className="text-[16px] font-bold mb-[10px] mt-[10px]">
  Яагаад удав?
</p>
<p className="text-[16px] mb-[10px]">
  Энэ наймаа 2022 оны 1-р сард хамгийн анх зарлагдсан. Гэсэн ч Microsoft
  АНУ, Их Британи, Европын Холбоо тэргүүтэй нийт 16 улсын зохицуулах
  байгууллагад шалгагдаж, өрсөлдөгчидтэйгөө зөвшилцөж, шаардлагыг
  хангасны үндсэн дээр ийн ард нь гарч байна. Тэд Activision-ийн хамгийн
  алдартай тоглоом Call of Duty-г гол өрсөлдөгчид болох Sony,
  Nintendo-той хуваалцах тохиролцоо хийж, бүр клоуд тоглоомын бизнесээ
  Ubisoft-д зарахыг зөвшөөрсөн билээ.
</p>

<p className="text-[16px] font-bold mb-[10px] mt-[10px]">
  {" "}
  Одоо яах вэ?
</p>
<p className="text-[16px] mb-[10px]">
  Ингэснээр Xbox-ийг эзэмшигч Microsoft-ийн портфолиод Call of Duty-ээс
  гадна Diablo, Guitar Hero, Warcraft, Overwatch зэрэг топ тоглоомууд
  нэмэгдэж байна. Үүгээр зогсохгүй Activision-ийн 2016 онд худалдан авч
  байсан гар утасны тоглоом бүтээгч King-ээр дамжин Candy Crush, Farm
  Heroes зэрэг хит тоглоом ч багтана. Тэд хэдийнээ Minecraft, Forza,
  Halo зэрэг хит тоглоомыг бүтээгчдийг эгнээндээ нэгтгээд байсан билээ.
</p>
<div className="w-full">
  <Image
    src="/images/phara1.png"
    sizes="100vw"
    style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
    }}
    width={100}
    height={100}
    alt=""
    className="rounded-lg"
  />
</div>

<p className="text-[28px] font-bold mb-[10px] mt-[20px]">2 ЧУХАЛ ТОО</p>
<p className="text-[16px] mb-[10px]">
  35.000.000 - Крикетийн дэлхийн цомын хамгийн анхаарал татсан тоглолт
  болох Энэтхэг, Пакистаны өрсөлдөөнийг нэгэн зэрэг 35 сая хэрэглэгч
  стримингээр үзсэн нь дэлхийн дээд амжилт боллоо. Уг тоглолтыг
  Disney-ийн эзэмшдэг Энэтхэгийн Hotstar стриминг платформ үнэ төлбөргүй
  дамжуулсан юм. Сонирхуулахад, Youtube-ийн үзэлтийн рекорд 6.1 сая,
  Twitch-ийнх 3.4 сая байдаг аж. 4070 - Газын зурвас дахь нөхцөл байдал
  улам хүндэрч, одоогийн байдлаар 4000 гаруй хүн амь насаа алджээ.
  Израйл Хамас бүлэглэлийн эсрэг агаар, ус, газраар дайралт хийхээ
  мэдэгдэж, 3000 гаруй пуужинг харваад байгаа юм. Одоогоор 1 сая
  Палестиний иргэд орон гэрээ алдаж, тус бүс нутагт хүмүүнлэг,
  геополитикийн асар том хямрал өрнөж байна.
</p>
<p className="text-[28px] font-bold mb-[10px] mt-[20px]">
  3 ОНЦЛОХ ӨГҮҮЛБЭР
</p>
<p className="text-[16px] font-bold mb-[10px] mt-[10px]">
  I. Нобелийн эдийн засгийн салбарын шагналтан тодорлоо.
</p>
<p className="text-[16px] mb-[10px]">
  - Харвардын их сургуулийн эдийн засагч Клаудио Голдин хөдөлмөрийн зах
  зээл дэх жендерийн ялгаа, эрэгтэй эмэгтэй ажилчдын цалин хөлс,
  оролцооны ялгаатай байдлын талаарх судалгаагаараа энэ жилийн ялагч
  боллоо. - Түүний нийгмийн зохион байгуулалт болон амьдралын хэв
  маягийн өөрчлөлт нь хөдөлмөрийн зах зээл дэх жендерийн ялгаатай
  байдалд үзүүлж буй нөлөөллийн тухай санаа олон судлаачдад сэдэл
  болсон. 20-р зууны сүүлийн хагаст эмэгтэйчүүдийн боловсролын түвшин
  нэмэгдэж, гэрлэх дундаж нас өсөн, жирэмслэлтээс хамгаалах эм
  хэрэглээнд нэвтэрсэн зэрэг нь жендерийн ялгаанд эергээр нөлөөлж
  эхэлсэн гэдгийг түүний судалгаа харуулдаг. Тэрээр шагнал авсныхаа
  дараа бид хосуудын тэгш байдлыг бий болгохгүйгээр хэзээ ч жендерийн
  тэгш байдлыг хангаж чадахгүй" хэмээн онцлон хэлжээ. - Өдгөө 77 настай
  тэрээр Нобелийн эдийн засгийн шагналыг хүртэж буй 3 дахь эмэгтэй болж
  байна. Гэхдээ тэрээр дангаараа ялагчаар нэрлэгдсэн анхны эмэгтэй болж
  байгааг тодотгох учиртай.
</p>
{/* REGISTER FORM CONTAINER */
}
{
  /* <RegisterOrangeContainer /> */
}

{
  /* <p className="text-[16px] font-bold mb-[10px] mt-[10px]">
  II. Starlink үүрэн холбооны үйлчилгээ үзүүлнэ.
</p>
<p className="text-[16px] mb-[10px]">
  - И.Маскийн үүсгэн байгуулсан Starlink 2024 оноос эхлэн үүрэн холбооны
  үйлчилгээг санал болгох болсноо зарлалаа. Эхний ээлжинд тэд
  хэрэглэгчдэд мессеж илгээх боломжийг нээнэ гэнэ. - Харин 2025 оноос
  эхлэн ухаалаг утаснаасаа шууд дуудлага хийх, дата ашиглах боломжтой
  болно гэв. Мөн ухаалаг гэрийн төхөөрөмжүүдэд ч хэрэглээ нээгдэх аж. -
  Нийт 42 мянган хиймэл дагуулыг хөөргөх амбицтай тус компанийн үйл
  ажиллагаа ийнхүү зөвхөн интернетээс хальж гарч байгаа нь энэ.
  "Starlink Direct to Cell" үйлчилгээ нь ухаалаг утасны хэрэглээг шинэ
  түвшинд гаргана хэмээн тэд итгэж байна.
</p>

<p className="text-[16px] font-bold mb-[10px] mt-[10px]">
  III. NASA-ийн шинэ аялал эхэллээ.
</p>
<p className="text-[16px] mb-[10px]">
  - NASA 3.6 тэрбум км-ийн алсад орших Psyche нэртэй астеройдыг судлах
  хөлгөө хөөргөлөө. Psyche бол хүн төрөлхтний илрүүлээд байгаа метал
  бүтэц бүхий есөн астеройдын нэг гэдгээрээ онцлогтой юм. - Psyche
  хөлгийн аялал 2029 онд эцсийн цэгтээ хүрэх учиртай. Эрдэмтэд уг
  астеройдыг судалснаар дэлхийн цөмийн талаар илүү мэдээлэл цуглуулж,
  нарийвчлан судлах боломжтой болно гэж үзэж буй. - Үүнээс гадна тус
  биет нь төмөр, никель, силикат зэрэг металлаас бүрдсэн нь эрдэмтдийн
  анхаарлыг татаж буй. Уг хөлөг астеройдын бүтцийг судалж, гарал үүслийн
  талаар мэдээлэл цуглуулах зорилготой. NASA уг төсөлд 1.2 тэрбум доллар
  зарцуулж байгаа юм.
</p>
<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/U62sf7l0gPs?si=5bbDTDyJhfVe1Sie"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
></iframe>
<p className="text-[28px] font-bold mb-[10px] mt-[20px]">
  4 МЭДҮҮШТЭЙ ЗҮЙЛ
</p>
<p className="text-[16px] mb-[10px]">
  <span className="font-bold">AI чип:</span> ChatGPT-ээрээ хувьсгал
  хийж, AI чатботын зах зээлд тэргүүлж буй OpenAI өөрсдийн нэрийн чип
  хөгжүүлэх төлөвлөгөөтэй байгаа гэнэ. 11 тэрбум доллар босгож, жилийн
  борлуулалтын орлого нь тэрбум долларыг даваад байгаа тус компани
  хиймэл оюун, машин сургалтад тусгайлан зориулагдсан чип бүтээж,
  зардлаа бууруулах зорилготой байгаа нь энэ юм.
</p>
<p className="text-[16px] mb-[10px]">
  <span className="font-bold">Нууц үг:</span> Google нууц үгийг халахыг
  хүсэж байна. Тэд энэ сараас эхлэн үндсэн үйлчилгээнд нэвтрэхдээ
  "Passkeys" буюу царай таних, хурууны хээ уншуулах, пин код хийх
  сонголтыг хэрэглэгчдэд эхэлж санал болгох болжээ. Үүнийгээ тэд
  хэрэглэгчдэд илүү хялбар бөгөөд найдвартай арга хэмээн үзэж байгаа юм.
</p>
<p className="text-[16px] mb-[10px]">
  <span className="font-bold">Шинэ нэгдэл:</span> Atlassian байгууллагын
  дотоод видео бичлэг, заавар зөвлөмж бүтээдэг платформ Loom-ийг 975 сая
  доллараар худалдан авлаа. 25 сая хэрэглэгчтэй Loom цар тахлын үеэр
  хүчээ авч, юникорн статустай болж байв. Atlassian-ийн хувьд энэ
  үйлчилгээг өөрсдийн эзэмшдэг Trello, Jira, Confluence зэрэг бусад
  платформуудтай уях зорилготой байгаа юм.
</p>
<p className="text-[16px] mb-[10px]">
  <span className="font-bold">Агаарын кофе:</span> Alaska Airlines
  онгоцоор нисэхдээ уухад зориулан тусгайлан бэлтгэсэн шинэ төрлийн
  нэрийн кофе гарган авчээ. Агаарын даралтын улмаас кофены амт сулардаг
  асуудлыг халж, илүү таатай амтыг санал болгож чадна хэмээн тэд
  сурталчилж байна. Шинэ кофе 12-р сарын 1-ээс нислэг бүрд зорчигчдод
  хүрнэ.
</p>
<div className="w-full">
  <Image
    src="/images/medee1.svg"
    sizes="100vw"
    style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
    }}
    width={100}
    height={100}
    alt=""
    className="rounded-lg"
  />
</div>
<p className="text-[28px] font-bold mb-[10px] mt-[20px]">
  5 СОНИН ХАЧИН
</p>
<p className="text-[16px] mb-[10px]">
  1. Алдарт Тэйлор Свифтийн аялан тоглолтын баримтат кино бокс оффисыг
  доргиож,{" "}
  <span className="text-orange-500 underline">
    дэлхий даяар 97 сая долларыг цуглуулаад байна.
  </span>{" "}
  Энэ нь тус кино аравдугаар сард нээлтээ хийсэн түүхэн дэх хамгийн
  амжилттай бүтээл боллоо гэсэн үг. Үүнээс өмнө 2019 оны "Joker" эхний
  долоо хоногтоо 96 сая долларын орлого олж, дээд амжилт тогтоож байв.
  "Taylor Swift: The Eras Tour" нэртэй 169 минут үргэлжлэх уг бүтээл
  зөвхөн Пүрэв, Баасан, Бямба, Ням гарагт л дэлгэцнээ гарч байгаагаараа
  онцлогтой. Үүнийгээ уран бүтээлчид олон фенүүд нэг дор цугларч, сэтгэл
  хөдөлгөм уур амьсгал бүрдүүлэх гэсэн шийдвэр хэмээн тайлбарласан
  билээ.
</p>
<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/KudedLV0tP0?si=P5yWU8QVT_a38M3q"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
></iframe>
<p className="text-[16px] mb-[10px]">
  2. Google хайлтын нүүр хуудсаа өөрчлөхөөр зэхэж байна. Тэд өөрсдийн
  нэрийн хуудас болсон минимал хэв маягаа өөрчилж, Bing, Yahoo зэрэг
  бусад өрсөлдөгчдийнхтэй ижил "Discover Feed"-ийг туршиж байгаа гэнэ.
  Үүнд нь сүүлийн үеийн мэдээ, цаг агаар, ханшийн мэдээлэл зэрэг багтах
  бололтой.
</p>
<div className="w-full">
  <Image
    src="/images/ttt.png"
    sizes="100vw"
    style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
    }}
    width={100}
    height={100}
    alt=""
    className="rounded-lg"
  />
</div>
<p className="text-[16px] mb-[10px]">
  3. Хятадын иргэний нисэхийн байгууллагаас Ehang нэртэй компанид
  агаарын таксины үйлчилгээ үзүүлэх зөвшөөрөл олгожээ. Дэлхийд анхны гэж
  хэлж болох энэ лицензийг авснаар Ehang жолоочгүй нисдэг таксиг агаарт
  хөөргөж, хүн тээвэрлэх эрхтэй болж байгаа юм. Ehang-ийн хувьд
  цахилгаан хөдөлгүүртэй, хоёр зорчигчийн багтаамжтай онгоц
  хөгжүүлдэг.үлийн үеийн мэдээ, цаг агаар, ханшийн мэдээлэл зэрэг багтах
  бололтой.
</p>
<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/I7mMS6Ir7qs?si=KtwaYlont1hIjBK_"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
></iframe>
<p className="text-[16px] mb-[10px]">
  4. Дэлхийн газрын тосны салбарын тэргүүлэгч Exxon Mobil Америкийн зах
  зээл дэх гол өрсөлдөгч Pioneer Natural Resources-ийг 59.5 тэрбум
  доллараар худалдан авлаа. Ингэснээр хоёр компани зардлаа бууруулж,
  ашигт ажиллагааг сайжруулахаас гадна байгальд ээлтэй шинэ технологи
  хөгжүүлэх гарц нэмэгдэнэ хэмээн тэд мэдээлж байна. Exxon 1998 онд
  Mobil Oil-ийг 81 тэрбум доллараар эгнээндээ нэгтгэж байсан билээ.
</p>
<p className="text-[16px] mb-[10px]">
  5. Netflix үнэнч үзэгчдэдээ зориулан "Netflix House"-ийг байгуулах
  болсноо зарлалаа. Хамгийн алдартай кино, цувралуудын өнгө төрх, орчныг
  шингээсэн уг төвд зочлогсод кофе ууж, худалдаа хийн, зарим хөгжөөнт
  тоглоомоор ч тоглох боломжтой байх гэнэ. Тэд 2025 он гэхэд АНУ-д 2
  төвийг эхэлж байгуулан, олон улс руу тэлэхээр төлөвлөж байна.
</p>
<div className="w-full">
  <Image
    src="/images/ttt1.png"
    sizes="100vw"
    style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
    }}
    width={100}
    height={100}
    alt=""
    className="rounded-lg"
  />
</div>

<p className="text-[28px] font-bold mb-[10px] mt-[20px]">
  10 УНШИХ МЭДЭЭ
</p>
<div className="w-full border-b-[1px] border-neutral-100">
  <ul className="mb-[50px]">
    <li className="text-[16px] mb-[10px]">
      Сонирхох:{" "}
      <span className="text-orange-500 underline">
        Боб Айгерын шид хаа байна? /Bloomberg/
      </span>
    </li>
    <li className="text-[16px] mb-[10px]">
      Хүлээх:{" "}
      <span className="text-orange-500 underline">
        Монгол, Франц ураны мега гэрээ байгууллаа /Nikkei/
      </span>
    </li>
    <li className="text-[16px] mb-[10px]">
      Гайхах:{" "}
      <span className="text-orange-500 underline">
        SBF-ийн шүүх хурал үргэлжилсээр /Techcrunch/
      </span>
    </li>
    <li className="text-[16px] mb-[10px]">
      Үзэх:{" "}
      <span className="text-orange-500 underline">
        NASA сансраас тээвэрлэсэн шороогоо дэлгэв /NASA/
      </span>
    </li>
    <li className="text-[16px] mb-[10px]">
      Мэдэх:{" "}
      <span className="text-orange-500 underline">
        GenZ юуг таалж байна? /Morning Brew/
      </span>
    </li>
    <li className="text-[16px] mb-[10px]">
      Санах:{" "}
      <span className="text-orange-500 underline">
        Шинэ Зеланд түүхэн сонголт хийв /BBC/
      </span>
    </li>
    <li className="text-[16px] mb-[10px]">
      Шагших:{" "}
      <span className="text-orange-500 underline">
        Сар хиртэлтийг гэрчлэх нь /CNN/
      </span>
    </li>
    <li className="text-[16px] mb-[10px]">
      Сонсох:{" "}
      <span className="text-orange-500 underline">
        Криптогийн ирээдүй хааш чиглэж байна вэ? /Wired/
      </span>
    </li>
    <li className="text-[16px] mb-[10px]">
      Тоглох:{" "}
      <span className="text-orange-500 underline">
        Евро 2028 Англид зохиогдоно /Sky/
      </span>
    </li>
    <li className="text-[16px] mb-[10px]">
      Ойлгох:{" "}
      <span className="text-orange-500 underline">
        Израйл-Палестинийг Араб хэрхэн харж байна вэ? /Vox/
      </span>
    </li>
  </ul>
</div>
<div className="w-full md:w-[70%] lg:w-[50%] mt-[30px]">
  <p className="font-bold text-[16px] leading-[23px] md:text-[20px] md:leading-[29px] lg:text-[24px] lg:leading-[35px] ">
    The Future
  </p>
  <div className="w-full border-b-[1px] border-neutral-100 my-[5px]"></div> */
}
// <RegisterContainer />
// </div> */}
