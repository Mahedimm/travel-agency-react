import React from 'react';

const CardManage = ({pack}) => {
    const {name,_id,price} = pack;
    return (
      
            <div class="flex flex-col p-8 bg-yellow-300 shadow-md hover:shodow-lg rounded-2xl mb-5">
	<div class="flex items-center justify-between">
		<div class="flex items-center">
        <div className=" border-8 rounded-full h-24 w-24 flex items-center justify-center border-red-400">{price} $</div>
			<div class="flex flex-col ml-3">
				<div class="font-medium leading-none text-gray-100">{name}</div>
				<p class="text-sm text-gray-500 leading-none mt-1">By deleting your account you will lose your all data
				</p>
			</div>
		</div>
		<button  class="flex-no-shrink bg-black px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Update</button>
		<button  class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Delete</button>
	
	</div>
</div>
      
    );
};

export default CardManage;