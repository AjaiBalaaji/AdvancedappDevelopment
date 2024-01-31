import React,{ useState } from 'react';
import { FaFacebook,FaGoogle,FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import { useEffect } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const Signup = () => {
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
    <div className='Signupbody'>
        <div className="signup-container sign-up">
            <Signupp/>
            {/* <SocialIcons/> */}
            <SignDivision/>
        </div>
    </div>
  );
};

const Signupp = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpass,setConfirmpass] =useState("");
    const handleSubmit = async(event) =>
    {
        event.preventDefault();
        if(email.trim()==="")
        {
            alert("Email cannot be empty")
            return;
        }
        if(password.trim()==="")
        {
            alert("Password cannot be empty")
            return;
        }
        if(password.trim()!==confirmpass.trim())
        {
            alert("Password mismatch")
        }
        if(email.trim()==="" && password.trim()==="" && username.trim()==="" && phonenumber.trim()==="" && confirmpass.trim()==="")
        {
            alert("Fill all the details!!!!")
            return;
        }
        
    }
    const handleSignup = () => {
        navigate('/'); 
    };
    return (
        <div className="form-container sign-up">
            <form onSubmit={handleSubmit}>
                <h1>SIGNUP</h1>
                <SocialIcons />
                <span>or use your email password</span>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                <input type="number" value={phonenumber} onChange={(event) => setPhone(event.target.value)} placeholder="Phone number" />
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                <input type="password" value={confirmpass} onChange={(event) => setConfirmpass(event.target.value)} placeholder="Confirm Password" />
                <a href="#">Forget Your Password?</a>
                <button className='Signin' onClick={handleSignup}>Sign In</button>
            </form>
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
const SignDivision = () => {
    return (
        <div className="SignDiv2">
            <div className="SignDiv2-Info">
            </div>
        </div>
    );
};

export default Signup;
