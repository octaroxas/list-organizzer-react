import React from "react";
import Logo from '../../assets/atendimento.png'


export default function NavBar() {
    return (
        <div className="bg-[#25243C] w-full border-2 border-b-[#4643DE] border-x-[#25243C] border-t-[#25243C]">
            <div className="flex justify-between bg-[#25243C] p-2 w-11/12 mx-auto">
                <img
                    className="h-7 w-7"
                    src={Logo} alt="Logo"
                />
                <img
                    className="h-7 w-7"
                    src={Logo} alt="Profile-image"
                />
            </div>
        </div>
    )
}