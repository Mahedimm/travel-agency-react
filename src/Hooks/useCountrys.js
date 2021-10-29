import { useEffect, useState } from 'react';

const useCountrys = () => {
    
    const [countrys, setCountrys] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/countrys')
        .then(res=>res.json())
        .then(data=>setCountrys(data));
    },[])
    return countrys;

};

export default useCountrys;