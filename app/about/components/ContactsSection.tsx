import Contacts from "@/app/components/containers/footer/components/Contacts";
import Section from "@/app/components/ui/section/section";
import OpeningHours from "./OpeningHours";
import ContactsForm from "./ContactsForm";

export default function ContactsSection() {
  return (
    <Section id="about-page-contacts-section">
      <Contacts />
      <OpeningHours />
      <ContactsForm />
    </Section>
  );
}
