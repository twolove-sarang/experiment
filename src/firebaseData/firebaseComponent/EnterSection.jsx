import React, { useState } from "react";
import { updateContact } from "../firebaseAuth/AuteFirebase";
import { v4 as uuid } from "uuid";

export default function EnterSection() {
  const [contact, setContact] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const userId = uuid();
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(contact);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="flex justify-between">
            <span className="w-36 p-2 my-2 basis-3/12">Name</span>
            <div className="basis-9/12">
              <input
                type="text"
                name="first"
                value={contact.first ?? ""}
                placeholder="성 / First"
                className="p-2 mr-2 my-2 outline-none drop-shadow-md rounded-lg"
                onChange={handleChange}
              />
              <input
                type="text"
                name="last"
                onChange={handleChange}
                value={contact.last ?? ""}
                placeholder="이름 / Last"
                className="p-2 mr-2 my-2 outline-none drop-shadow-md rounded-lg"
              />
            </div>
          </label>
          <label className="flex">
            <span className="w-36 p-2 my-2 basis-3/12">Number</span>
            <input
              type="text"
              name="number"
              onChange={handleChange}
              value={contact.number ?? ""}
              placeholder="010-0000-0000"
              className="p-2 mr-2 my-2 outline-none drop-shadow-md rounded-lg basis-9/12"
            />
          </label>
          <label className="flex">
            <span className="w-36 p-2 my-2 basis-3/12">Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={contact.email ?? ""}
              placeholder="Email@naver.com"
              className="p-2 mr-2 my-2 outline-none drop-shadow-md rounded-lg basis-9/12"
            />
          </label>
          <label className="flex">
            <span className="w-36 p-2 my-2 basis-3/12">Memo</span>
            <textarea
              name="memo"
              onChange={handleChange}
              value={contact.memo ?? ""}
              rows={6}
              className="p-2 mr-2 my-2 outline-none drop-shadow-md rounded-lg basis-9/12 h-full"
            />
          </label>
          <div className="flex justify-center mt-4">
            <button className="font-bold text-blue border px-2 py-1 m-2 rounded-lg hover:bg-blue hover:text-white w-32">
              저장
            </button>
            <button className="font-bold border px-2 py-1 m-2 rounded-lg hover:bg-red hover:text-white w-32">
              취소
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
