import React from 'react';
import usePackages from '../../Hooks/usePackages';
import PackagesCard from './PackagesCard';

const Packages = () => {
    const packages = usePackages();
    return (
        <div id="packages"className="">
             <div className='p-32 font-serif text-5xl'>
                    <div className='border-l-4 border-black '>
                    <h1 className=''><strong className='font-extrabold'>Amazing</strong> Tour And Fun  </h1>
                    <h1>Adventures<strong className='font-extrabold'> Waiting For You</strong></h1>
                    </div> 
            </div>
            <div class="container mx-auto my-5">
            {
                packages.map(pack=><PackagesCard key={pack.key} pack={pack}></PackagesCard>)
            }
            </div>
           
        </div>
    );
};

export default Packages;