import { LogoLink } from "../components/ui/links/links";

export default function Page() {
  return (
    <>
      <header className="header">
        <div className="container">
          <LogoLink variant="dark"/>
        </div>
      </header>
      <main className="container">
        <form>Checkout-page</form>
      </main>
    </>
  );
}
