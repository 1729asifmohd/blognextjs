import react, { useEffect, useState } from 'react';
import axios from 'axios'

export default function Demo(){
    const [data,setData] = useState("")
    useEffect(async ()=>{
        const res=await axios.get('/api/hello');
        console.log(res.data.text)
        setData(res.data)
    },[])
    return <h1>{data? data.text:" "}</h1>
}