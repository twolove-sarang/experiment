import React from "react";

export default function OutComeSection() {
  return (
    <div className="bg-grey w-96 p-4 rounded-3xl">
      {/* <input type="text" placeholder="search..." /> */}
      <div className="font-extrabold text-xl m-4">Contact</div>
      <section className="flex justify-between items-center">
        <div className="m-4">연락처가 여기 표시됩니다.</div>
        <button className="border p-2 mr-2 rounded-lg shadow-sm bg-white text-sm">
          지우기
        </button>
      </section>
    </div>
  );
}
