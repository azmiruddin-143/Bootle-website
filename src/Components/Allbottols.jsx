import { useEffect } from "react";
import { useState } from "react";
import Singlebottol from "./Singlebottol";


const Allbottols = () => {

    const [bottol, setbottol] = useState([])
    const [product, setproduct] = useState([])

    const productcard = (bottolloop) => {
        const finalcard = [...product, bottolloop]
        setproduct(finalcard)
    }

 

    useEffect(() => {

        fetch("bottols.json")
            .then(res => res.json())
            .then(bottoldata => setbottol(bottoldata))
    }, [])


    return (
        <div>

            {
                product.map(productloop => <div>

                        <img className='w-[100px] h-[100px] pt-2' src={productloop.img} ></img>
                        <button  className="bg-slate-800 py-1 px-3 text-slate-50 my-3">Dilet Item</button>
                    
                </div>)
            }

            <div className="grid grid-cols-4 place-items-center gap-5 my-6">

                {
                    bottol.map(bottolsingle => <Singlebottol key={bottolsingle.id} bottolloop={bottolsingle} productcard={productcard} ></Singlebottol>)
                }

            </div>
        </div>
    );
};

export default Allbottols;