import React from "react";
import { ItemList } from "../../types/types";
import Item from "../Item";

interface ShowListProps {
    arrListItems: Array<ItemList>;
}

export default function ShowList({ arrListItems }: ShowListProps) {
    return (
        <div>
            {arrListItems.map(item => {
                <Item
                    nome={item.nome}
                    preco={item.preco}
                    frete={item.frete}
                />
            })}

        </div>
    )
}