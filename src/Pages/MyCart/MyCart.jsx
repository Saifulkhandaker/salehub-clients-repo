import { useEffect, useState } from "react";
import CartProduct from "../../components/CartProduct";



const MyCart = () => {


    const [carts, setCarts] = useState([])
    const [noFound, setNofound] = useState(false)

    useEffect(()=>{
        const cartItems = JSON.parse(localStorage.getItem('items'))
        
        if(cartItems){
            setCarts(cartItems)
        }
        else{
            setNofound('No Product Added Yet..')
        }
    },[])

    return (
        <div className="w-11/12 mx-auto py-10">
            {noFound ? <p className="h-[80vh] flex justify-center items-center text-3xl font-bold">{noFound}</p> : <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {carts.map(item => <CartProduct item={item}></CartProduct>)}
                </div>

            </div> }
        </div>
    );
};

export default MyCart;