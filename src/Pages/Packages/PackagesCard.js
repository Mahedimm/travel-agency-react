import React from 'react';
import { Link } from 'react-router-dom';
import './packages.css';

const PackagesCard = ({pack}) => {
    const {name,price,information,cover,_id} = pack;
    return (
        <div>
           <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2 mb-6">
        
            <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg content-div">
                <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom" style={{backgroundImage: `url( ${cover} )`, backgroundBlendMode: 'multiply'}}>
                
                </div>
                <div className="absolute opacity-0 fd-sh group-hover:opacity-100 flex justify-center align-center py-20 pl-40">
                    <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">   {price} $</span> 
                    <div className="pt-8 text-center">
                        <Link to={`/packages/${_id}`}>
                        <button className="text-center  p-2 bg-yellow-400  text-black text-">See Details</button>
                        </Link>
                        
                    </div>
                </div>
                <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                    <h3 className="w-full font-bold text-2xl text-red leading-tight mb-2">{name}</h3>
                    {/* <h4 className="w-full text-xl text-gray-100 leading-tight">Bienvenido a</h4> */}
                </div>
                <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
            </div>

            <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                    {/* <h4 className="hidden md:block text-xl text-gray-400">Bienvenido a</h4> */}
                    <h3 className="hidden md:block font-bold text-2xl text-red pb-3">{name}</h3>
                    <p className="text-gray-600 text-justify overflow-ellipsis overflow-hidden">{information.slice(0,500)}...</p>
                    <Link className="flex items-baseline mt-3 text-yellow hover:text-red focus:text-blue-900" to={`/packages/${_id}`}>
                        <span> See Details</span>
                        <span className="text-xs ml-1">&#x279c;</span>
                    </Link>
            </div>
          
        </div>
        

    </div> 
        </div>
    );
};

export default PackagesCard;