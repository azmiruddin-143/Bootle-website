import React from 'react';

const Singlebottol = ({ bottolloop, productcard }) => {
    const { name, price, img, category } = bottolloop

    return (
        <div>
            <div>
                <img className='w-[400px] h-[400px]' src={img} alt="" />
                <h1>{name} </h1>
                <h1>{category}</h1>
                <h1>Price : {price} USd</h1>
                <button onClick={() => productcard(bottolloop)} className='bg-[#181893] text-white py-1 px-3 rounded-md my-3'>Buy Now</button>
            </div>
        </div>
    );
};

export default Singlebottol;