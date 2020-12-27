import CurrLocation from "Components/CurrLocation";
import Section from "Components/LookBookSection/Section";
import Poster from "Components/LookBookSection/Poster";
import React, { useEffect, useState } from "react";

const LookBook = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState("LOOK BOOK");
  // eslint-disable-next-line no-unused-vars
  const [posters, setPosters] = useState([
    {
      id: "http://firstfloor.co.kr/article/look-book/8/138982/",
      title: "19F/W JUST MODERN",
      writer: "Tan",
      date: "2019-11-10",
      imgUrl:
        "http://m.firstfloor.co.kr/file_data/firstfloor/2019/11/10/a081f9eeb75c6abe16c374839fde15f6.jpg",
    },
    {
      id: "http://firstfloor.co.kr/article/look-book/8/133629/",
      title: "247 everyday everywhere",
      writer: "Tan",
      date: "2019-03-14",
      imgUrl:
        "http://m.firstfloor.co.kr/file_data/firstfloor/2019/03/14/fb0cf2abc9f681b2a6fa9c81b3d89844.jpg",
    },
    {
      id: "http://firstfloor.co.kr/article/look-book/8/128750/",
      title: "18-19 F/W - LESS BUT BETTER",
      writer: "Tan",
      date: "2018-11-06",
      imgUrl:
        "http://m.firstfloor.co.kr/file_data/firstfloor/2018/11/06/4938cd1dff88a9fb19e21c0b8ad973f3.jpg",
    },
    {
      id: "http://firstfloor.co.kr/article/look-book/8/127651/",
      title: "18 SFW , 여름 그리고 가을",
      writer: "Tan",
      date: "2018-08-16",
      imgUrl:
        "http://m.firstfloor.co.kr/file_data/firstfloor/2018/08/16/642daed4608890857c18c807db0b9b16.jpg",
    },
    {
      id: "http://firstfloor.co.kr/article/look-book/8/118751/",
      title: "17 F/W FIRST FLOOR 2nd Delivery",
      writer: "BONNIE",
      date: "2017-11-03",
      imgUrl:
        "http://m.firstfloor.co.kr/file_data/firstfloor/2017/10/18/74e308be50d474dd9406e7b5a911e22a.jpg",
    },
    {
      id: "http://firstfloor.co.kr/article/look-book/8/117970/ㅈ",
      title: "17 F/W FIRST FLOOR in London Film Ver.",
      writer: "BONNIE",
      date: "2017-10-18",
      imgUrl:
        "http://m.firstfloor.co.kr/file_data/firstfloor/2017/10/18/7df25307a70791c09dbc2a74488996c9.jpg",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CurrLocation location={location} />
      <Section>
        {posters.map((poster) => (
          <Poster
            id={poster.id}
            imgUrl={poster.imgUrl}
            title={poster.title}
            writer={poster.writer}
            date={poster.date}
          />
        ))}
      </Section>
    </>
  );
};

export default LookBook;
