"use client";
import Link from "next/link";
import { filters } from "../../../static/filters";
import { routes } from "@/app/static/routes";
import "./filters.scss";
import { useSearchParams } from "next/navigation";

export default function Filters() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const activeClass = (id) => {
    if (filter === id || (filter === null && id === "all")) {
      return "active";
    }
  };

  return (
    <ul className="shop-filters">
      {filters.map(({ id, name }) => (
        <li key={id}>
          <Link
            className={activeClass(id)}
            href={{
              pathname: routes[2].href,
              query: `filter=${id}`,
            }}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
