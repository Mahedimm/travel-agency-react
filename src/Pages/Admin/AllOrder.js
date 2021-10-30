import React, { useEffect, useState } from 'react';

const AllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders/')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

    return (
        <div class="container flex flex-col justify-center items-center mx-auto py-10">
        <div style={{
            backgroundImage: `url("https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`}}
            class="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center ">
        </div>
            {
               orders.map(order=><div class="flex flex-col p-8 bg-yellow-300 shadow-md hover:shodow-lg rounded-2xl mb-5">
               <div class="flex items-center justify-between">
                   <div class="flex items-center">
                   {/* <div className=" border-8 rounded-full h-24 w-24 flex items-center justify-center border-red-400">{order.name} $</div> */}
                       <div class="flex flex-col ml-3">
                           <div class="text-2xl font-bold leading-none text-black">{order.name}</div>
                           <div class="text-2xl font-bold leading-none text-black">{order.email}</div>
                           <div class="text-2xl font-bold leading-none text-black">{order.number}</div>
                           <div class="text-2xl font-bold leading-none text-black">{order.location}</div>
                           <p class="text-sm  leading-none mt-1 pt-2"> <strong className="font-bold">Order Id : </strong>{order._id}
                           </p>
                       </div>
                   </div>
                 
                   <button  class="flex-no-shrink bg-black px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Confirm</button>
                 
                   
                   <button  class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Cancel</button>
               
               </div>
           </div>) 
            }
        </div>
    );
};

export default AllOrder;