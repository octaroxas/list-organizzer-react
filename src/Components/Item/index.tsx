import React from "react";

interface ItemListProps {
    nome: string;
    preco: number;
    frete: number;
}

export default function Item({ nome, preco, frete }: ItemListProps) {
    return (
        <div className="w-full bg-[#262EFF] p-2 rounded-md flex justify-between items-center">
            <p className="text-white text-xs">
                {nome}
            </p>
            <ul className="text-xs">
                <li>Preço R$ {preco}</li>
                <li>Frete R$ {frete}</li>
            </ul>
        </div>
    )
}