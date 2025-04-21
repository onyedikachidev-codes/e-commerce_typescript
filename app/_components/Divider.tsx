import React from "react";

export default function Divider() {
  return (
    <div className=" flex w-full items-center">
      <hr className="flex-grow border-t-2 border-gray-600" />
      <span className="px-2 text-gray-800">OR</span>
      <hr className="flex-grow border-t-2 border-gray-600" />
    </div>
  );
}
