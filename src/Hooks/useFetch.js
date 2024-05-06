//custom hook
//used for fetching data
import { useState,useEffect } from "react"


const useFetch = (url)=>{

    const [data,setData] = useState()

    useEffect(()=>{

        //apicall

        fetch(url).then((result)=>{
            result.json().then((response)=>{
                setData(response.products)
            })
        })
        
    },[])
    return data

}

export default useFetch