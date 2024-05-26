import styled from "styled-components";
import {useRef} from "react";
import axios from "axios";

export default function SignIn(){
    const formRef = useRef(null);
    return <SMain>
        <div>
            <form ref={formRef} onSubmit={e=>{
                e.preventDefault();
                if(formRef&&formRef.current){
                    var formData = new FormData(formRef.current);
                    console.log(formData.entries());
                    var data:{[key:string]:FormDataEntryValue} = {}
                    for (var pair of Array.from(formData.entries())) {
                        console.log(pair[0] + ": " + pair[1]);
                        data[pair[0]] = pair[1] ;
                    }

                    axios.post("http://localhost:8088/api/v1/user/insert",formData,{headers:{"Content-Type":"multipart/form-data"}}).then(resp=>console.log(resp.data));
                    axios.post("http://localhost:8088/api/v1/user/insert",data,{headers:{"Content-Type":"application/json"}}).then(resp=>console.log(resp.data));
                }


                // output as an object

                console.log(e)
            }}>
                <div>
                    <SInput type={"email"} name={"email"}  required={true} onInvalid ={e=>{
                        e.preventDefault();
                        console.log("invalid");
                        var target = e.target as HTMLInputElement;
                        target.focus();
                        alert(target.title);
                    }}/>
                </div>
                <div>
                    <SInput type={'password'} name={"password"} />
                </div>
                <div>
                    <SInput type={'submit'}/>
                </div>
            </form>
        </div>
    </SMain>
}

const SMain = styled.main`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const SInput = styled.input`
    

`