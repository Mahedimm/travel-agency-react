import React from 'react';
import Countrys from '../Countrys/Countrys';
import Packages from '../Packages/Packages';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div id="home">
            <Slider/>
            <div className='bg-home1 h-40 w-full'>    
            </div>
                <Packages/>
                <Countrys/>
         
            
            
        </div>
    );
};

export default Home;