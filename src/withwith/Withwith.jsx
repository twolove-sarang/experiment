import React from "react";
import GoToPersonalPage from "../component/GoToPersonalPage";
import OutletHeader from "../component/OutletHeader";

export default function Withwith() {
  return (
    <div>
      <OutletHeader
        menuName="withwith"
        dialogue="✅ 첫 쇼핑몰 만들기 프로젝트"
      />
      <GoToPersonalPage
        web="https://gleeful-twilight-b5818b.netlify.app//"
        blog="https://velog.io/@twolove-sarang/%EC%87%BC%ED%95%91%EB%AA%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-03-withwith-%EB%A7%88%EB%AC%B4%EB%A6%AC-%ED%95%98%EA%B8%B0"
        github="https://github.com/twolove-sarang/WITHWITHshoppingmall"
      />
    </div>
  );
}
