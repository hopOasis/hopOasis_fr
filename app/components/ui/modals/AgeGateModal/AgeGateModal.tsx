"use client";
import { useState } from "react";
import "./ageGateModal.scss";
import AgeGateModalBody from "./components/AgeGateModalBody";
import { oazaStorage } from "@/app/utils";


export default function AgeGateModal() {
  const [show, setShow] = useState<boolean>(() => {
    const isInStore = oazaStorage.getSecure();
    return isInStore ? false : true;
  });
  return show && <AgeGateModalBody setShow={setShow} />;
}
