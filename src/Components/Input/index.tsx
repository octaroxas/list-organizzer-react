import React from "react";


export default function Input({ label, name, onChange, ...rest }: any) {
    return (
        <>
            <div className="flex flex-col">
                <label className="text-sm text-white font-bold">
                    {label}
                </label>
                <input
                    className="bg-[#222042] w-full rounded-sm p-1 my-1 outline outline-[#4643DE] outline-1 hover:outline-2 text-[#4643DE]"
                    onChange={onChange}
                    name={name}
                    {...rest}
                />
            </div>
        </>
    )
}