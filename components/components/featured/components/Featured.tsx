import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CardsLarge from "./CardsLarge";

export default function Definition() {
  const [seeMore, setSeemore] = useState(false);

  const handleSeeMore = () => setSeemore(!seeMore);

  const [widthDetect, setWidthDetect] = useState(100);
  const widthDetectF = () => setWidthDetect(window.screen.availWidth);
  return (
    <div className="w-full m-auto  py-[15px]">
      <p className="subheading text-orange-500 px-[24px] mb-[10px]">
        Онцлох дугаарууд
      </p>
      {/* end cards duudna */}
      <CardsLarge />
    </div>
  );
}
