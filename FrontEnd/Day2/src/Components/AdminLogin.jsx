// import React from 'react';
import './Login.css'; 
// import React,{ useState} from 'react';
import { useEffect,useState } from 'react';
// import { Icons } from 'react';
import { FaFacebook,FaGoogle,FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    useEffect(() => {
        const bodyStyle=document.body.style;
        bodyStyle.backgroundImage = "url('https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg')"; 
        bodyStyle.backgroundSize = 'cover';
        bodyStyle.backgroundRepeat = 'no-repeat';
        bodyStyle.backgroundAttachment = 'fixed';
        bodyStyle.backgroundPosition = 'center center';
        return () => {
            document.body.style.backgroundImage = ""; 
        };
    }, []);
    return (
        <div className='Body'>
        <div className="LoginContainer" id="container">
            <SignInForm />
            <Division2/>
        </div>
        </div>
    );
};
const SignInForm = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit = async(event) =>
    {
        event.preventDefault();
        if(email.trim()==="" && password.trim()==="")
        {
            alert("Please enter email and password")
            return;
        }
        if(email.trim()==="")
        {
            alert("Please enter email")
            return;
        }
        if(password.trim()==="")
        {
            alert("please enter password")
            return;
        }
        
    }
    const handleSignup = () => {
        navigate('/Signup'); 
    };
    const handleHome = () => {
        navigate('/Home'); 
    };
    return (
        <div className='Body'>
        <div className="form-container sign-in">
            <form onSubmit={handleSubmit}>
                <h1> LOGIN</h1>
                <SocialIcons />
                <span>or use your email password</span>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                <a href="#">Forget Your Password?</a>
                <button className='Loginin' onClick={handleHome}>Sign In</button>
            </form>
        </div>
        </div>
    );
};

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="#" className="icon"><i className=""><FaFacebook/></i></a>
            <a href="#" className="icon"><i className=""><FaGoogle/></i></a>
            <a href="#" className="icon"><i className=""><FaTwitter/></i></a>
            <a href="#" className="icon"><i className=""><FaLinkedinIn/></i></a>
        </div>
    );
};

const Division2 = () => {
    return (
        <div className="Div2">
            <div className="Div2-Info">
            </div>
        </div>
    );
};

export default Login;