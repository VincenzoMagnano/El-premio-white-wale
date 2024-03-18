import { useEffect, useState } from "react";
import { Card } from "../../Types/card";


export function useProducts(url: string) {

    const [products, setProducts] = useState<Card[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setProducts([...data].map(product => ({ ...product, quantity: 0 })));
        }
        fetchData();
    }, [url]);
    return { products, setProducts };
}