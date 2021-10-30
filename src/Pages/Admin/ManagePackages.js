import React from 'react';
import usePackages from '../../Hooks/usePackages';
import CardManage from './CardManage';

const ManagePackages = () => {
    const packages = usePackages()
    return (
        <div class="container flex flex-col justify-center items-center mx-auto py-10">
        <div style={{
            backgroundImage: `url("https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`}}
            class="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center ">
        </div>
            {
               packages.map(pack=><CardManage key={pack._id} pack={pack}></CardManage>) 
            }
        </div>
    );
};

export default ManagePackages;