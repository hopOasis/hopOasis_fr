import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CartModal from "../../ui/modals/CartModal";

export default function Portal() {
  return createPortal(<CartModal />, document.body!);
}
