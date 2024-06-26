import Image from "next/image";
import Rating from "../Rating/Rating";
import { IFeedbackCard } from "@/app/types/types";

export default function FeedBackCard({
  img,
  author,
  feedback,
  rating,
}: IFeedbackCard) {
  return (
    <>
      <div>
        <Image src={img} alt={author} width={100} height={100} />
        <p className="typography__h5">{author}</p>
      </div>
      <div>
        <Rating rating={rating} onChange={(rating) => console.log(rating)} />
        <p className="typography__h4__regular">{feedback}</p>
      </div>
    </>
  );
}
