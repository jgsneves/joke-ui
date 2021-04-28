import React from "react";
import { removeFavJoke } from "../../pages/favorites/helper";

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  favorited: boolean;
  jokeId: string;
}

export const StarIcon = ({ favorited, jokeId }: IProps) => {
  const [coloredStar, setColoredStar] = React.useState(favorited);

  return (
    <button
      type="button"
      onClick={() => {
        setColoredStar(!coloredStar);
        removeFavJoke(jokeId);
      }}
      style={{
        background: "transparent",
        border: 0,
        width: "fit-content",
        justifySelf: "flex-end",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-star"
      >
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          style={{ fill: coloredStar ? "#FFD700" : "#FFF" }}
        ></polygon>
      </svg>
    </button>
  );
};
