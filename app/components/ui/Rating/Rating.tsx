"use client";
import { Rating as ReactRating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import "./rating.scss";
import { IProps } from "./types";

const style = {
  itemShapes: RoundedStar,
  itemStrokeWidth: 2,
  activeFillColor: "#FF9A00",
  activeStrokeColor: "#FF9A00",
  inactiveFillColor: "none",
  inactiveStrokeColor: "#696969",
};

export default function Rating({ onChange }: IProps) {
  const [rating, setRating] = useState<number>(4);
  return (
    <ReactRating
      className="rating"
      value={rating}
      itemStyles={style}
      onChange={(value: number) => {
        onChange(value);
        setRating(value);
      }}
    />
  );
}
