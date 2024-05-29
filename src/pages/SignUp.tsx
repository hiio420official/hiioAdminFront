import {SMainBase} from "../libs/styles/Main";
import {useRef} from "react";
import {SFormBase} from "../libs/styles/Form";
import {SBtnSubmit} from "../libs/styles/Button";

export default function SignUp(){
    const ref = useRef<HTMLInputElement>(null)
    return <SMainBase>
        <SFormBase>
            <div>
                <label>이메일</label>
                <input type={"password"} ref={ref} value={"asdasd"}/>
            </div>
            <div>
                이메일 찾기
            </div>
            <SBtnSubmit onClick = {e=> {
                e.preventDefault();
                if(ref.current!==null){
                    if(ref.current.type==="text"){
                        ref.current.type = "password"
                    }else{
                        ref.current.type = "text"
                    }
                }
            }}>다음</SBtnSubmit>
        </SFormBase>
    </SMainBase>
}