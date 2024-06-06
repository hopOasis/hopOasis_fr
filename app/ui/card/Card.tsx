import type { ProductCard } from "@/app/api/defenitions";

type Props = {
	beer: Pick<ProductCard, "image" | "descricpion" | "name" | "priceLarge">;
};
export const Card: React.FC<Props> = ({ beer }) => {
	const { image, descricpion, name, priceLarge } = beer;
	return (
		<article>
			<p></p>
		</article>
	);
};

export default Card;
