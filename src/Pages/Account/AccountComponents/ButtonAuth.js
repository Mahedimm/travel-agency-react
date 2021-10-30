import React from 'react';


const ButtonAuth = (props) => {
    return (
        <div>
            <div className="mb-2 w-full py-4 text-white font-bold border-2 rounded border-white hover:bg-red-500  duration-200 flex flex-row justify-center  items-center gap-4">{props.children}</div>
        </div>
    );
};

export default ButtonAuth;