import React from "react";
import OutletHeader from "../component/OutletHeader";
import ColorChange from "./component/ColorChange";
import GoToPersonalPage from "../component/GoToPersonalPage";

export default function Design() {
  return (
    <div className="flex-col">
      <OutletHeader
        menuName="Hex Color Palette"
        dialogue={`✅ 컬러로 고민하는 디자이너를 위한 페이지`}
      />
      <GoToPersonalPage
        web="https://csscolorvariation.netlify.app/"
        blog="https://velog.io/@twolove-sarang/%EB%9E%9C%EB%8D%A4-%EC%83%89-%EC%B6%94%EC%B6%9C%EB%A1%9C-css-%EC%BB%AC%EB%9F%AC%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-07"
        github="https://github.com/twolove-sarang/cssColor-ariation"
      />

      <div className="lg:flex gap-12 md:items-start">
        <div className="mt-10">
          <div className="text-center text-lg font-bold">
            버튼을 눌러보세요 👆
          </div>
          <ColorChange />
        </div>
        <div className="md:mt-10">
          <div className="text-center text-lg font-bold">웹페이지 view</div>
          <div className="w-96 mx-auto">
            <img
              src="/img/screenshot01.png"
              alt="color variation"
              className="w-96 mx-auto mt-10 mb-20 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
