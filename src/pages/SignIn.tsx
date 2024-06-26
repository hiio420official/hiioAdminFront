import styled from "styled-components";
import {useRef} from "react";
import {useCookies} from "react-cookie";
import {AdminAPI} from "../libs/api/AdminAPI";
import {SMainBase} from "../libs/styles/Main";


export default function SignIn(){
    const formRef = useRef(null);
    const [cookies] = useCookies()
    return <SMainBase>
            <SFormSignIn ref={formRef} onSubmit={e=>{
                e.preventDefault();
                if(formRef&&formRef.current){
                    var formData = new FormData(formRef.current);
                    console.log(formData.entries());
                    var data:{[key:string]:FormDataEntryValue} = {}
                    for (var pair of Array.from(formData.entries())) {
                        console.log(pair[0] + ": " + pair[1]);
                        data[pair[0]] = pair[1] ;
                    }
                    console.log(data);
                    formData.append("dto",new Blob([JSON.stringify(data)],{
                        type: 'application/json'
                    }));
                    console.log(AdminAPI.defaults["baseURL"])
                    //axios.post("http://localhost:8088/api/v1/user/insert",formData,{headers:{"Content-Type":"multipart/form-data"}}).then(resp=>console.log(resp.data)).catch(err=>console.log(err));
                    AdminAPI.post("signin",data)
                        .then(resp =>{
                            console.log(resp);
                            console.log(document.cookie)
                        });
                }


                // output as an object

                console.log(e)
            }}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div style={{textAlign:"center"}}>
                    <label>ID</label>
                    <SInput type={"email"} name={"email"}  required={true} onInvalid ={e=>{
                        e.preventDefault();
                        console.log("invalid");
                        var target = e.target as HTMLInputElement;
                        target.focus();
                        alert(target.title);
                    }}/>
                </div>
                <div>
                    <label>PASSWORD</label>
                    <SInput type={'password'} name={"password"} />
                </div>
                <div>
                    <SInput type={'submit'}/>
                </div>
            </SFormSignIn>
    </SMainBase>
}



const SFormSignIn = styled.form`

`

const SInput = styled.input`
    

`