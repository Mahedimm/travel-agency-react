import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const PackDetails = () => {
    const {packId} = useParams();
    const [pack,setPack] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/packages/${packId}`)
        .then(res=>res.json())
        .then(data=>setPack(data));
    },[])
    
  
    return (
        <div>
            <div className="flex-row flex-wrap md items-center ">
        <div>
        <img
          src={pack.cover}
          className="h-96 w-full"
          alt=""
        />
        </div>   
      </div>
            <div className="bg-white w-full md:w-1/2 h-full pb-5">
             <div className="mx-32">
          <h1 className="text-6xl  mt-16">Incredible <strong className="font-bold">{pack.name}</strong></h1>

        
          <div className="flex mt-16 font-light text-gray-500 ">
            <div className="pr-4">
              <span className="uppercase">{pack.person}</span>
              <p className="text-2xl text-red font-semibold pt-2">{pack.price} $</p>
            </div>
          </div>
          <div
            className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm"
          >
        {pack.information}
          </div>
        <Link to={`/booking/${packId}`}>
        <button   className=" bg-yellow-400 p-3 text-white uppercase mt-5 text-sm font-semibold hover:bg-yellow-300">
            Book now
          </button>
        </Link>
         
        </div>
      </div>
      

        </div>
    );
};

export default PackDetails;