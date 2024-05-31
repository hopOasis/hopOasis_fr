import Link from "next/link";
import styles from "./icons.module.scss";
import {
	HiShoppingCart,
	HiSearch,
	HiOutlineHeart,
	HiOutlineUser,
} from "react-icons/hi";

export default function Icons() {
	return (
		<ul className={styles.icons}>
			<li>
				<Link href={"/search"}>
					<HiSearch style={{ color: "white", width: "24px", height: "24px" }} />
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
				<Link href={"/cart"}>
					<HiShoppingCart
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
		</ul>
	);
}
