import React, { ChangeEvent, useState } from "react";
import NavBar from "../../Components/NavBar";
import Card from "../../Components/Card";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Item from "../../Components/Item";
//Import de tipos
import { ItemList } from '../../types/types'
import ShowList from "../../Components/ShowList";
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid'

export default function CreateList() {

    const { register, setValue, handleSubmit } = useForm()
    const [listItems, setListItems] = useState<Array<ItemList>>([{ nome: 'dwaef', preco: 11, frete: 12 }])
    const arrAux: Array<ItemList> = []

    const add = (i: any) => {
        console.log('form ', i)
        arrAux.push(...arrAux, i)
        console.log(arrAux)
        setListItems([...arrAux])
    }

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setValue(event.target.name, event.target.value)
    }

    return (

        <>
            <NavBar />

            <div className="h-screen bg-[#25243C] flex-wrap flex flex-row justify-center items-start">
                <Card>

                    <h1 className="text-2xl text-white font-bold mb-3">
                        Novo item
                    </h1>

                    <form onSubmit={handleSubmit(add)}>
                        <Input
                            {...register("nome")}
                            type='text'
                            label="Nome"
                            onChange={inputChangeHandler}
                        />
                        <Input
                            {...register("preco")}
                            type='number'
                            label="Preço"
                            onChange={inputChangeHandler}

                        />
                        <Input
                            {...register("frete")}
                            type='number'
                            label="Frete"
                            onChange={inputChangeHandler}
                        />

                        <Button type='submit'> Adicionar</Button>

                    </form>
                </Card>

                <Card>
                    <h1 className="text-2xl text-white font-bold mb-3">Titulo da lista</h1>

                    {listItems.map((item) => (
                        <Item
                            nome={item.nome}
                            preco={item.preco}
                            frete={item.frete}
                        />
                    ))}
                </Card>

            </div>

        </>

    );

}