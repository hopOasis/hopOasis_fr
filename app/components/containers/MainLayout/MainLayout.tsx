import Portal from "../Portal/Portal";
import Footer from "../footer/footer";
import { Header } from "../header/Header";
import { IProps } from "./types";

export default function MainLayout({ children }: IProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* <Portal /> */}
    </>
  );
}
