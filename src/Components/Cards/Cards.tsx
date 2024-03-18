import React, { FC, useEffect, useState } from 'react'
import { Card } from '../../Types/card';
import './card.css'
interface CardProps {
    item: Card;
    index: number;
    setProducts: Function;
}
const Cards: FC<CardProps> = ({ item, index, setProducts }) => {
    const [quantity, setQuantity] = useState<number>(0);

    useEffect(() => {
        setProducts((prev: Card[]) => {
            const updateProduct = [...prev];
            updateProduct[index] = { ...updateProduct[index], quantity: quantity };
            return updateProduct;
        });
    }, [index, quantity, setProducts])

    const changeQuantity = (quantity: number) => {
        setQuantity(prev => Math.max(0, prev + quantity));
    }
    return (
        <div >
            <div className="card col-4 m-5 card-design" >
            
                <img src={item.image} className="card-img-top " alt={"card"} />
                <div className="card-body">
                    <h5 className="title-des">{item.title}</h5>
                    <p className="text-secondary text-des">{item.description}</p>

                    <div className="prod-quantity d-flex flex-column justify-content-center price-adt">
                        <p className="price">{`${item.price.toFixed(2)} €`}</p>
                        <button className="btn-design3">Add to Cart</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cards
