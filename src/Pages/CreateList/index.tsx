import React from "react";
import Logo from '../../assets/logo.png'

export default function CreateList() {

    return (

        <>
            <div className="bg-indigo-500">
                <div className="flex justify-between bg-indigo-500 p-2 w-3/4 mx-auto">
                    <img
                        className="h-10 w-10"
                        src={Logo} alt="Logo"
                    />
                    <img
                        className="h-10 w-10"
                        src={Logo} alt="Profile-image"
                    />
                </div>
            </div>
            <div className="flex-wrap flex flex-row justify-center items-start mt-5">

                <div className="justify-center items-center bg-[#222042] max-w-xs rounded-md p-5 outline outline-1 outline-[#4643DE]">
                    <h1
                        className="text-xl text-white font-bold mb-3"
                    >Novo item</h1>

                    <form action="">
                        <input
                            className="bg-indigo-900 w-full rounded-sm p-1 my-1 outline outline-[#4643DE] outline-1 hover:outline-2 text-[#4643DE]"
                            placeholder="Titulo"
                            name="titulo"
                            type="text"
                        />
                        <div className="flex" >
                            <input
                                className="bg-indigo-900 w-full rounded-sm p-1 my-1 outline outline-[#4643DE] outline-1 hover:outline-2 text-[#4643DE]"
                                placeholder="Preço"
                                name="preco"
                                type="number"
                            />
                            <input
                                className="bg-indigo-900 w-full rounded-sm p-1 my-1 outline outline-[#4643DE] outline-1 hover:outline-2 text-[#4643DE]"
                                placeholder="Frete"
                                name="frete"
                                type="number"
                            />

                        </div>

                        <button
                            className="bg-indigo-500 w-full my-2 py-2 rounded-sm text-white font-bold"
                        >
                            Adicionar
                        </button>

                    </form>
                </div>

                <div className="justify-center items-center bg-[#222042] rounded-md p-5 outline outline-1 outline-[#4643DE]">
                    <h1 className="text-white">Titulo da lista</h1>
                    <div className="w-full bg-[#262EFF] p-2 rounded-md flex justify-between items-center">
                        <p className="text-white text-xs">
                            Mouse Logitech
                        </p>
                        <ul className="text-xs">
                            <li>Preço R$ 100,00</li>
                            <li>Frete R$ 100,00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );

}