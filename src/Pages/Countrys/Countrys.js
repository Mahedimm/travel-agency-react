import React from 'react';
import useCountrys from '../../Hooks/useCountrys';
import CountryCard from './CountryCard';


const Countrys = () => {
    const countrys = useCountrys()
    return (
        <div>
               <div className="" id="countrys">
               <div className='p-32 font-serif text-5xl'>
                    <div className='border-l-4 border-black '>
                    <h1 className=''>Choose The<strong className='font-extrabold'> Destination</strong></h1>
                    <h1><strong className='font-extrabold'> Just Right </strong>For Your Vacation</h1>
                    </div> 
            </div>
            <div class="container mx-auto my-5" >
            {
                    countrys.map(Country=><CountryCard key={Country.key} Country={Country}></CountryCard>)
                }
            </div>
                
            </div>
            
        </div>
    );
};

export default Countrys;