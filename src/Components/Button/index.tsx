import React from "react";
interface ButtonProps {
    children?: React.ReactNode;
}

export default function Button({ children, ...rest }: any) {
    return (
        <button
            {...rest}
            className="bg-[#4643DE] w-full my-2 py-2 rounded-md text-white font-bold"
        >
            {children}
        </button>
    )
}