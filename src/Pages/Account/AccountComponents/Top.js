import React from 'react';
import { Link } from 'react-router-dom';

const Top = (props) => {
    return (
        <div>
            <div className="mb-6 lg:mb-20 w-full  flex items-center justify-between">
                <Link className="text-white text-3xl font-bold leading-none" href="/home">
                    <img className="h-12" src='./logo.png' alt="" width="auto"/>
                </Link>
                <a className="py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-red-500 hover:bg-red-400 text-white font-bold transition duration-200" href=" ">{props.children}</a>
            </div>
        </div>
    );
};

export default Top;