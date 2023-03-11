// CSS
import './Shop.css';
import {axios_get} from "../Others/requests.jsx";
import {useEffect, useState} from "react";

// Imports


// Code
export default function Shop() {

    const [products, setProducts] = useState([])
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetchShop()
    }, []);

    function fetchShop() {
        axios_get("/api/products/get")
            .then((response) => {
                setProducts(response.data.data)
                console.log(response.data.data)
            })

    }

    function addToCart(ID) {
        setOrder([...order, {
            ID: ID,
            Name: products[ID -1].Name,
            Price: products[ID -1].Price,
        }])
        setTotal(total + products[ID -1].Price)
        console.log(order)
    }

    function removeFromCart(ID) {
        // Remove latest row where ID is ID
        setOrder(
            order.filter((item, index) => {
                return item.ID !== ID
            }
        ))
        setTotal(0)
    }


    return (
        <div>
            {products.map((product) => (
                <div key={product.Name}>
                    <h2>{product.Name}</h2>
                    <h4>{product.Price} PLN</h4>
                    <br/>
                    <span>{product.Description}</span>
                    <img src={product.Image} height="200px" />
                    <button onClick={() => addToCart(product.ID)}>Add to cart</button>
                    <button onClick={() => removeFromCart(product.ID)}>Remove from cart</button>
                    {
                        order.filter((item) => item.ID === product.ID).map((item) => (
                            <div key={item.ID}>
                                <h5>{item.Name}</h5>
                            </div>
                        ))
                    }
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            ))}
            <div>Łączna kwota: {total}</div>
        </div>
    )
}