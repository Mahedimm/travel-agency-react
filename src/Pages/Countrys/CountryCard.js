import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CountryCard = ({Country}) => {
    const {_id,country,photos1,photos2,photos3}=Country;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  justify-center">
           <div className=" ">
                
                <div className="shadow-lg group container  rounded-md bg-white  max-w-auto flex justify-center items-center  mx-auto content-div " style={{
                 backgroundImage: `url(${photos1})`,
            
                }}>
                <div>
                <div  className="w-full image-cover rounded-t-md" >
                </div>
                
            </div>
             <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
             <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Original <strong className="text-bold"> Experience</strong></span> 
                 <br />
                 <span className="text-sm font-bold text-red tracking-wider leading-relaxed font-sans">Been there recently?</span> 
                 <div className="pt-8 text-center">
                     <Link to={`/Countrys/${_id}`}>
                     <button className="text-center  p-2 bg-red-500  text-white  text-lg">Learn More</button>
                     </Link>
                     
                </div>
            </div>
            </div>
        
        </div>
            <div className=" ">
                
                <div className="shadow-lg group container  rounded-md bg-white  max-w-auto flex justify-center items-center  mx-auto content-div " style={{
                 backgroundImage: `url(${photos2})`,
            
                }}>
                <div>
                <div  className="w-full image-cover rounded-t-md" >
                </div>
                
            </div>
             <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                 <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Original <strong className="text-bold"> Experience</strong></span> 
                 <br />
                 <span className="text-sm font-bold text-red tracking-wider leading-relaxed font-sans">Been there recently?</span> 
                 <div className="pt-8 text-center">
                     <Link to={`/Countrys/${_id}`}>
                     <button className="text-center  p-2 bg-red-500  text-white  text-lg">Learn More</button>
                     </Link>
                     
                </div>
            </div>
            </div>
   
        </div>
            <div className=" ">
                
                <div className="shadow-lg group container  rounded-md bg-white  max-w-auto flex justify-center items-center  mx-auto content-div " style={{
                 backgroundImage: `url(${photos3})`,
            
                }}>
                <div>
                <div  className="w-full image-cover rounded-t-md" >
                </div>
                
            </div>
             <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
             <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Original <strong className="text-bold"> Experience</strong></span> 
                 <br />
                 <span className="text-sm font-bold text-red tracking-wider leading-relaxed font-sans">Been there recently?</span> 
                 <div className="pt-8 text-center">
                     <Link to={`/Countrys/${_id}`}>
                     <button className="text-center  p-2 bg-red-500  text-white  text-lg">Learn More</button>
                     </Link>
                     
                </div>
            </div>
            </div>
   
        </div>
        </div>
    );
};

export default CountryCard;