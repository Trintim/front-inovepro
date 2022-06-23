import React from "react";

export default function ButtonNav(props){
    return (
        <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-rose-600 text-gray-200 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-rose-600 hover:text-white-500 transition-all hover:shadow-rose-md">
            {" "}
            {props.children}
        </button>
    )
}