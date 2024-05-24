import {useNavigate} from "react-router-dom";
import axios, {AxiosError} from "axios";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import {instanceOf} from "prop-types";

export default function Main() {
    // const [cookies, setCookie, removeCookie] = useCookies(['a']);
    const [GET] = useApi();
    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        GET();
        setLoading(true);
    },[]);
    // if(loading){
    //     return <>asd</>
    // }
    // else{
    //     return <></>
    // }
    const [data, setData] = useState("")
    return <div>
        <input value={data} onChange={(e) => {
            setData(e.target.value)
        }}/>
        <Form/>
    </div>
}
const Form = () => {
    const [data, setDate] = useState("")
    return <input value={data} onChange={e => setDate(e.target.value)}/>
}
const useApi = () => {
    const navigate = useNavigate();

    const GET = async () => {
        try {
            const sessionResult = await axios.get("http://localhost:8088", {withCredentials: true});
        } catch (error:any) {
            if(error instanceof AxiosError){
                error = (error as any) as AxiosError;
                console.log(error << 20);
                if (error.response.status === 401) {
                    // navigate("/signin");
                }
            }

        }


    }
    return [GET];
}

axios.defaults.withCredentials = true;
