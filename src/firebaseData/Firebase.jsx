import React from "react";
import EnterSection from "./firebaseComponent/EnterSection";
import OutComeSection from "./firebaseComponent/OutComeSection";
import { useUserContext } from "./firebaseUserContext/userContext";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Firebase() {
  const { user, login, logout } = useUserContext();

  return (
    <div>
      <div>
        <section>
          <p
            className="text-4xl font-extrabold text-center -mt-16
        md:hover:translate-x-6 ease-out duration-700 transition-all
        md:text-left md:mt-0"
          >
            Fire Base
          </p>
          <div className="mt-2 text-center md:text-left">
            ✅ 파이어베이스를 활용한 연락처 저장기능
          </div>
        </section>
        {!user && (
          <>
            <div className="my-4 text-center md:invisible">
              <div className="text-center">
                <p className="font-bold">로그인이 필요합니다</p>
                <div className="w-4 mx-auto my-2">
                  <AiOutlineArrowDown />
                </div>
              </div>

              <button
                onClick={() => login()}
                className="bg-blue p-2 rounded-lg text-white font-bold transition-all hover:scale-105"
              >
                구글 로그인
              </button>
            </div>

            <div className="my-4 text-center invisible md:visible md:-mt-28 flex items-center gap-4">
              <div className="flex items-center gap-4">
                <p className="font-bold">로그인이 필요합니다</p>
                <AiOutlineArrowRight />
              </div>

              <button
                onClick={() => login()}
                className="bg-blue p-2 rounded-lg text-white font-bold transition-all hover:scale-105"
              >
                구글 로그인
              </button>
            </div>
          </>
        )}
        {user && (
          <>
            <div className="my-4 text-center md:invisible">
              <div className="text-center">
                <p className="font-bold">
                  안녕하세요 {user && user.displayName}님
                </p>
                <p>로그아웃은 여깁니다.</p>
                <div className="w-4 mx-auto my-2">
                  <AiOutlineArrowDown />
                </div>
              </div>

              <button
                onClick={() => logout()}
                className="bg-blue p-2 rounded-lg text-white font-bold transition-all hover:scale-105"
              >
                로그아웃
              </button>
            </div>

            <div className="my-4 text-center invisible md:visible md:-mt-32 flex items-center gap-4">
              <div className="flex items-center gap-4">
                <p className="font-bold">
                  안녕하세요 {user && user.displayName}님
                </p>
                <p>로그아웃은 여깁니다.</p>
                <AiOutlineArrowRight />
              </div>

              <button
                onClick={() => logout()}
                className="bg-blue p-2 rounded-lg text-white font-bold transition-all hover:scale-105"
              >
                로그아웃
              </button>
            </div>
          </>
        )}
      </div>

      <section className="lg:flex lg:items-start">
        <div className="-mt-10 md:mt-2 lg:basis-1/2">
          <EnterSection />
        </div>
        <div className="lg:basis-1/2">
          <OutComeSection />
        </div>
      </section>
    </div>
  );
}
