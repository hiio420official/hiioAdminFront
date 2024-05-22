import {useNavigate} from "react-router-dom";
import axios, {AxiosError} from "axios";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";

export default function Main(){
    const [cookies, setCookie, removeCookie] = useCookies(['a']);
    const [GET] = useApi();
    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        GET();
        setLoading(true);
    },[]);
    if(loading){
        return <>asd</>
    }
    else{
        return <></>
    }

}

const useApi = ()=>{
    const navigate = useNavigate();

    const GET = async ()=>{
        try{
            const sessionResult = await axios.get("http://localhost:8088",{withCredentials:true});
        }catch(error:any){
           error = error as AxiosError;
           if(error.response.status===401){
               navigate("/signin");
           }
        }


    }
    return [GET];
}