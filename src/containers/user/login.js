import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import {
    useNavigate
} from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [regUser, setregForm] = useState({
        regusername: "",
        regpassword: "",
        regconfirmpass: "",
        regname: "",
        regemail: "",
    });
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");
    const [regNameError, setRegNameError] = useState("");
    const [regEmailError, setRegEmailError] = useState("");
    const [loginError, setLoginError] = useState("");
    function updateregForm(value) {
        return setregForm((prev) => {
            return { ...prev, ...value };
        });
    }
    const [user, setForm] = useState({
        username: "Ostrich",
        password: "hello",
    });
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    async function loginU(user) {
        // console.log(user)
        try{
            let res = await axios.post("http://localhost:8000/login", user);
            // console.log('===>>>>>>>>>>>>>'+res.data)
            if (res.data.result) {
                dispatch(setUser({ username: res.data.username }))
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("username", res.data.username)
                navigate("/")
            }
        }
        catch(error){ 
            setLoginError("Unathorized User");
            // console.log('---=========>>>'+loginError)
        }
    }
    async function signup(reguser) {
        if (reguser.regname === "")setUserNameError("Username Required *")
        if(reguser.regpassword.length<=5)setPasswordError("You must type more than 6 letters.")
        if(reguser.regconfirmpass!==reguser.regpassword)setConfirmPassError("You must same word as password.")
        if(reguser.regname.length<=1)setRegNameError("You must type more than 1 letter.")
        if(reguser.regemail.indexOf("@")===-1) setRegEmailError("You must type *@*.")
        if ((reguser.regname !== "" )&& (reguser.regpassword.length>=6 )&& (reguser.regconfirmpass===reguser.regpassword) && 
            (reguser.regname.length>=1)&&(reguser.regemail.indexOf("@")!==-1)) {
            try{
                let res = await axios.post("http://localhost:8000/login/signup", reguser);
                if (res.data.result) {
                    dispatch(setUser({ username: res.data.username }))
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("username", res.data.username)
                    navigate("/")
                }
            }
            catch(error){
                setRegNameError("Server is busy.")
            }
        }
    }
    return (
        <div className='w-full flex flex-row mt-7 '>
            <div className='w-1/3 flex flex-col '>
                <div className='w-full'>
                    <img src='img/login/Login Title.png' alt="brand" />
                </div>
            </div>
            <div className='w-1/3 flex flex-row '>
                <div className='w-1/2 flex flex-row'>
                    <div className='flex flex-col'>
                        <div className='w-full'>
                            <img src='img/login/Login Text.png' alt="brand" />
                        </div>
                        <div className=' float-right '>
                            <input type='text' className='w-full mt-5 border-white text-white text-2xl border bg-[#353535] rounded-xl  h-14 pl-5'
                                placeholder='Username' id='username' value={user.username} onChange={(e) => {updateForm({ username: e.target.value })
                                setLoginError("")}}   />
                                {loginError && <h1 className='ml-12 text-red-500'>{loginError}</h1>}
                        </div>
                        <div className='float-right '>
                            <input type='password' className='w-full mt-5 border-white text-white text-2xl border bg-[#353535] rounded-xl  h-14 pl-5' placeholder='Password' id='password'
                                value={user.password} onChange={(e) => updateForm({ password: e.target.value })}
                            />
                        </div>
                        <button className='rounded-md w-1/2 h-14 bg-sky-500 text-2xl text-white hover:bg-[#1167a0] mt-6 focus:outline-none focus:ring-4 focus:bg-sky-500'
                            onClick={() => { loginU(user); }} >Login</button>
                    </div>
                    <div className='ml-10 h-fix   float-right  border-2 bg-[#A1A1A1] '></div>
                </div>
                <div className='w-1/2 flex flex-col '>
                    <div className='w-full'>
                        <img src='img/login/Signup Text.png' alt="brand" />
                    </div>
                    <div className='mt-5  float-right '>
                        <input type='text' className='w-full ml-12 border-white text-white text-2xl border bg-[#353535] rounded-xl  h-14 pl-5' placeholder='Username' id='regusername'
                            value={regUser.regusername} onChange={(e) => { updateregForm({ regusername: e.target.value })
                            setUserNameError("")}} />
                        {userNameError && <h1 className='ml-12 text-red-500'>{userNameError}</h1>}
                    </div>
                    <div>
                    </div>
                    <div className='mt-5  float-right '>
                        <input type='text' className='w-full ml-12 border-white text-white text-2xl border bg-[#353535] rounded-xl  h-14 pl-5' placeholder='Name' id='regname'
                            value={regUser.regname} onChange={(e) => {updateregForm({ regname: e.target.value })
                            setRegNameError("")}} />
                            {regNameError && <h1 className='ml-12 text-red-500'>{regNameError}</h1>}
                    </div>
                    <div className='mt-5  float-right '>
                        <input type='email' className='w-full ml-12 border-white text-white text-2xl border bg-[#353535] rounded-xl  h-14 pl-5' placeholder='Email' id='regemail'
                            value={regUser.regemail} onChange={(e) => {updateregForm({ regemail: e.target.value })
                            setRegEmailError("")}}/>
                            {regEmailError && <h1 className='ml-12 text-red-500'>{regEmailError}</h1>}
                    </div>
                    <div className='mt-5  float-right '>
                        <input type='password' className='w-full ml-12 border-white text-white text-2xl border bg-[#353535] rounded-xl  h-14 pl-5' placeholder='Password' id='regpassword'
                            value={regUser.regpassword} onChange={(e) => {updateregForm({ regpassword: e.target.value }) 
                            setPasswordError("")}}/>
                            {passwordError&& <h1 className='ml-12 text-red-500'>{passwordError}</h1>}
                    </div>
                    <div className='mt-5  float-right '>
                        <input type='password' className='w-full ml-12 border-white text-white text-2xl border bg-[#353535] rounded-xl  h-14 pl-5' placeholder='Confirm Password' id='regconfirmpass'
                            value={regUser.regconfirmpass} onChange={(e) => {updateregForm({ regconfirmpass: e.target.value })
                            setConfirmPassError("")}} />
                            {confirmPassError&& <h1 className='ml-12 text-red-500'>{confirmPassError}</h1>}
                    </div>
                    <button className='ml-12 rounded-md w-1/2 h-14 bg-[#F29F05] text-2xl text-white hover:bg-[#b3b619] mt-6 focus:outline-none focus:ring-4 focus:bg-[#F29F05]'
                        onClick={() => { signup(regUser); }}>Signup</button>
                </div>
            </div>
        </div>
    );
}

export default Login;

