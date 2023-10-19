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

    const handleRemove = () => {
        localStorage.clear();
        setCarts([]);
        setNofound('No Product Added Yet..')
    }

    return (
        <div className="w-11/12 mx-auto py-10">
            {noFound ? <p className="h-[80vh] flex justify-center items-center text-3xl font-bold">{noFound}</p>
            :
             <div>
                {carts.length > 0 && <button onClick={handleRemove} className='btn mb-5 block mx-auto text-white py-1 px-10 bg-red-600'>Delete</button>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {carts.map(item => <CartProduct item={item}></CartProduct>)}
                </div>
            </div> }
        </div>
    );
};

export default MyCart;