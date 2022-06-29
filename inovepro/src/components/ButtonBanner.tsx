import React from "react";

export default function ButtonBanner(props) {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 bg-rose-700  text-gray-200 bg-white-500 outline-none capitalize hover:bg-rose-600 hover:text-white-500 transition-all shadow-md shadow-gray-900 hover:shadow-xl hover:shadow-rose-500/50">
      {" "}
      {props.children}
    </button>
  );
}
