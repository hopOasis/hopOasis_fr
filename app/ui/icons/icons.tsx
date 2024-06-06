import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { HiOutlineHeart, HiOutlineUser, HiSearch } from "react-icons/hi";
import styles from "./icons.module.scss";

export default function Icons() {
	return (
		<ul className={styles.icons}>
			<li>
				<Link href={"/search"}>
					<HiSearch style={{ color: "white", width: "24px", height: "24px" }} />
				</Link>
			</li>
			<li>
				<Link href={"tel:066000000000"}>
					<FiPhone style={{ color: "white", width: "24px", height: "24px" }} />
				</Link>
			</li>
			<li>
				<Link href={"/favorites"}>
					<HiOutlineHeart
						style={{ color: "white", width: "24px", height: "24px" }}
					/>
				</Link>
			</li>
			<li>
				<Link href={"/autorization"}>
					<HiOutlineUser
						style={{ color: "white", width: "24px", height: "24px" }}
					/>
				</Link>
			</li>
			<li>
				<Link href={"/cart"}>
					<BsCart3 style={{ color: "white", width: "24px", height: "24px" }} />
				</Link>
			</li>
		</ul>
	);
}
