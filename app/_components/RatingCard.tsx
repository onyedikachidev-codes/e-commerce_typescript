import Image from "next/image";
import React from "react";

interface RatingCardProps {
  avatar: string;
  commentTitle: string;
  comment: string;
  name: string;
  title: string;
}

export default function RatingCard({
  avatar,
  commentTitle,
  comment,
  name,
  title,
}: RatingCardProps) {
  return (
    <div className="lg:max-w-[32%] max-w-[90%] bg-gray-200 py-4 px-4 rounded-xl">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src={avatar}
              alt="user_image"
              width={30}
              height={30}
              className="h-10 w-10 rounded-full object-[center_20%] object-cover"
            />
            <div>
              <h5 className="text-lg hidden sm:block font-semibold ">
                “{commentTitle}”
              </h5>
            </div>
          </div>

          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-600 mb-3 mt-3">{comment}</p>

      {/* Footer */}
      <div className="flex justify-between items-center text-slate-600 text-sm">
        <span className="font-medium text-gray-800">{name}</span>
        <span>{title}</span>
      </div>
    </div>
  );
}
