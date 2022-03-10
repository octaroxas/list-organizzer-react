import React from "react";

interface CardProps {
    children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="my-10 mx-5 justify-center items-center bg-[#222042] max-w-xs rounded-md p-5 outline outline-1 outline-[#4643DE]">
            {children}
        </div>
    )
}