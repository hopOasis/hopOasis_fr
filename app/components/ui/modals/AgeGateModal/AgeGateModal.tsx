"use client";
import { useState } from "react";
import "./ageGateModal.scss";
import AgeGateModalBody from "./components/AgeGateModalBody";

export default function AgeGateModal() {
  const [show, setShow] = useState<boolean>(true);
  return show && <AgeGateModalBody setShow={setShow} />;
}
