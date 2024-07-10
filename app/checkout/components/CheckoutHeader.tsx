import { LogoLink } from "@/app/components/ui/links/links";
import { Palitra } from "@/app/types/types";

export default function CheckoutHeader() {
  return (
    <header className="checkout-header">
      <div className="container">
        <LogoLink variant={Palitra.dark} />
      </div>
    </header>
  );
}
