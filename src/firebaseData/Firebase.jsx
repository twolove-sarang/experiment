import React, { useEffect, useState } from "react";
import EnterSection from "./firebaseComponent/EnterSection";
import OutComeSection from "./firebaseComponent/OutComeSection";
import { login, logout, loginObserver } from "./firebaseAuth/AuteFirebase";

export default function Firebase() {
  const [user, setUser] = useState();
  const clickLogin = () => {
    login().then((user) => {
      setUser(user);
    });
  };
  const clickLogout = () => {
    logout().then(setUser());
  };
  useEffect(() => {
    loginObserver((user) => setUser(user));
  }, []);
  return (
    <>
      <div className="text-4xl font-extrabold transition-all hover:translate-x-6 ease-out duration-700 inline-block">
        Fire Base
      </div>
      <div className="mt-2">✅ 파이어베이스를 활용한 연락처 저장기능</div>
      {!user && (
        <div className="flex items-center my-4">
          <div className="p-2">로그인이 필요합니다 ➡️</div>
          <button
            onClick={clickLogin}
            className="bg-blue p-2 rounded-lg text-white font-bold transition-all hover:scale-105"
          >
            구글 로그인
          </button>
        </div>
      )}
      {user && (
        <div className="flex items-center my-4">
          <p className="font-bold">안녕하세요 {user && user.displayName}님</p>
          <p className="p-2">로그아웃은 여깁니다. ➡️</p>
          <button
            onClick={clickLogout}
            className="bg-blue p-2 rounded-lg text-white font-bold transition-all hover:scale-105"
          >
            로그아웃
          </button>
        </div>
      )}

      <section className="flex gap-4">
        <EnterSection />
        <OutComeSection />
      </section>
    </>
  );
}
