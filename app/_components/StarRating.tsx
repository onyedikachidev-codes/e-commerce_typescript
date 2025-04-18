import React from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  maxStars?: number;
  size?: number;
};

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 20,
}) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }, (_, i) => {
        const current = i + 1;

        let fillPercent = 0;
        if (rating >= current) {
          fillPercent = 100;
        } else if (rating + 1 > current) {
          fillPercent = (rating - i) * 100;
        }

        return (
          <div
            key={i}
            className="relative"
            style={{ width: size, height: size }}
          >
            {/* Full outline star */}
            <Star size={size} className="text-gray-300" />

            {/* Filled star clipped to percentage */}
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercent}%` }}
            >
              <Star size={size} className="text-yellow-500 fill-yellow-500" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
