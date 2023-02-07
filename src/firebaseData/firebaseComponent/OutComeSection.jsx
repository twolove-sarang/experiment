import { useQuery } from "@tanstack/react-query";
import React from "react";
import { viewContact } from "../firebaseAuth/AuteFirebase";
import { useUserContext } from "../firebaseUserContext/userContext";
import ContactList from "./ContactList";

export default function OutComeSection() {
  const {
    isLoading,
    error,
    data: contact,
  } = useQuery({
    queryKey: ["contact"],
    queryFn: viewContact,
  });

  const { user } = useUserContext();

  return (
    <div className="bg-grey w-96 p-4 rounded-3xl h-80 overflow-scroll">
      <div className="font-extrabold text-xl my-2 mx-4">Contact</div>
      {user &&
        contact.map((contact) => {
          return <ContactList contact={contact} />;
        })}

      {user && !contact.length && (
        <p className="ml-4">⬅️ 정보를 입력해 주세요</p>
      )}
      {!user && <p className="ml-4">로그인이 필요합니다 🤩</p>}
    </div>
  );
}
