import React, { useState } from "react";
import CategoredNews from "../components/CategoredNews";
import CategoredNComingSoon from "../components/CategoredNComingSoon";
import CategoredNCooperation from "../components/CategoredNCooperation";
export default function CategoredNewsContainer() {
  const [sendData, setSendData] = useState([
    { title: "Ер нь?", text: "asdasd", pic: "/images/card_pic1.svg" },
    {
      title: "The Future",
      text: "gfhdfhfghdfgdfg",
      pic: "/images/card_pic2.svg",
    },
    {
      title: "techworm weekly",
      text: "dfgdfgdfgdfg",
      pic: "/images/card_pic3.svg",
    },
    {
      title: "wheels on",
      text: "dfgfjmghgdsfgds ",
      pic: "/images/card_pic4.svg",
    },
  ]);
  return (
    <div>
      <CategoredNews title="Технологи" listData={sendData} />
      <CategoredNews title="Үйл явдал" listData={sendData} />
      <CategoredNews title="Well-being" listData={sendData} />
      <CategoredNews title="Сонирхол" listData={sendData} />
      <CategoredNews title="Entertainment" listData={sendData} />
      <CategoredNCooperation title="Хамтрал" listData={sendData} />
      <CategoredNComingSoon title="Тун удахгүй" listData={sendData} />
    </div>
  );
}
