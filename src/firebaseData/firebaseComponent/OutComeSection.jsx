import { useQuery } from "@tanstack/react-query";
import React from "react";
import { viewContact } from "../firebaseAuth/AuteFirebase";
import { useUserContext } from "../firebaseUserContext/userContext";
import ContactList from "./ContactList";

export default function OutComeSection() {
  const { data: contact } = useQuery(
    {
      queryKey: ["contact"],
      queryFn: viewContact,
    },
    { staleTime: 1000 * 5 * 10 }
  );

  const contactValues = () => {
    if (contact == null) {
      return {};
    } else {
      return Object.values(contact);
    }
  };

  const contactValue = contactValues();
  const { user } = useUserContext();

  return (
    <div className="bg-grey w-96 p-4 rounded-3xl h-80 overflow-scroll">
      <div className="font-extrabold text-xl my-2 mx-4">Contact</div>
      {user &&
        contact &&
        contact.map((contact, index) => {
          return <ContactList contact={contact} key={index} />;
        })}

      {user && contactValue.length === 0 && (
        <p className="ml-4">⬅️ 정보를 입력해 주세요</p>
      )}

      {!user && <p className="ml-4">로그인이 필요합니다 🤩</p>}
    </div>
  );
}
