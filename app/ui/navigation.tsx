import Link from "next/link";

const links = [
  { name: "Пиво", href: "/beer" },
  { name: "Cідр", href: "/cider" },
  { name: "Снеки", href: "/snacks" },
  { name: "Набори", href: "/sets" },
];

export function Navigation() {
  return (
    <ul>
      {links.map(({ name, href }) => (
        <li key={name}>
          <Link href={href}> {name} </Link>
        </li>
      ))}
    </ul>
  );
}
