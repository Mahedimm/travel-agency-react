import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const BookingPackages = () => {
    const { register, handleSubmit ,reset} = useForm();
    const{user} = useAuth();
    
    const onSubmit = data => { 
        //Performing a POST request using axios
        axios.post('http://localhost:5000/orders',data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Booking SuccessFully");
                reset();
            }
        })
        // console.log(data)
    };
    return (
        <div className="container flex flex-col justify-center items-center mx-auto  py-10">
        <div style={{
            backgroundImage: `url("https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`}}
            className="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center mt-10">
        </div>
        <div className="bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
        <div className="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
                <div className="px-2 -mt-6">
                    <div className="text-center">
                        <h1 className=" text-3xl text-grey-800 font-medium leading-loose my-3 w-full">Add New Package</h1>
                        <div className="w-full text-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between ">
                            <input type='name' {...register("name", { required: true, maxLength: 20 })}  placeholder={user.displayName} className="my-5 p-4 border-2 border-red-500 rounded-md"/>
                            <input type="email" {...register("email",)}  value={user.email} className="my-5 p-4 border-2 border-red-500 rounded-md"/>
                            <input  type="phone number"{...register("number",{required:true})} placeholder="Phone Number" className="my-5 p-4 border-2 border-red-500 rounded-md"/>
                            <input type="text" {...register("location")} placeholder="Location" className="my-5 p-4 border-2 border-red-500 rounded-md"/>
                            <input className='p-2 bg-yellow-400 cursor-pointer hover:bg-yellow-300' type="Submit" />
                        </form>

                        </div>
                </div>
            </div>
            </div>
        </div>    
        </div>
    );
};

export default BookingPackages;