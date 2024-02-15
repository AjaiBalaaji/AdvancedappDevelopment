import { useState } from 'react';
import { FaFacebook,FaGoogle,FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import { useEffect } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Login from './Login';
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
    // const navigate = useNavigate();
    
    // Define handleSignup function here
    // const handleSignup = () => {
    //     navigate('/Login'); // Navigate to the Login page
    // };
    // const [name,setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [phonenumber,setPhone] = useState("");
    // const [password,setPassword] = useState("");
    // const [confirmpass,setConfirmpass] =useState("");
    
    // const handleSubmit = async(event) =>
    // {
    //     event.preventDefault();

    // // Basic client-side validation
    // if (!email.trim() || !password.trim() || !name.trim() || !phonenumber) {
    //     alert("Please fill in all fields.");
    //     return;
    // }
    // if (password !== confirmpass) {
    //     alert("Passwords do not match.");
    //     return;
    // }
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [conpassword, setConPassword] = useState("");
    // const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    // const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate=useNavigate();

    const handleName = (event) => {
        setUsername(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePwd = (event) => {
        setPassword(event.target.value);
    }

    const handleConpass = (event) => {
        setConPassword(event.target.value);
    }

    // const handleNumber = (event) => {
    //     setMobile(event.target.value);
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validate({ email, password, conpassword });
        if (Object.keys(errors).length === 0) {
            setIsSubmit(true);
        } else {
            // setFormErrors(errors);
            setIsSubmit(false);
        }
    }

    useEffect(() => {
        if (isSubmit) {
            submitForm();
        }
    }, [isSubmit]);

    const submitForm = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8080/api/v1/auth/register",
                { name, email, password }
            );
            console.log("Sign up successful");
            console.log(response.data);
            // Clear form fields
            setUsername("");
            setEmail(""); 
            setPassword("");
            setConPassword("");
            navigate("/Login");
        } catch (error) {
            console.error("Registration failed");
            console.error(error);
        } finally {
            setIsSubmit(false);
        }
    }

    const validate = (values) => {
        const errors = {};
        const preg = new RegExp("[A-Z][A-Za-z0-9$_]+");

        if (!values.email) {
            errors.email = "Email is Required";
        }

        if (!preg.test(values.password)) {
            errors.password = "Invalid password";
        }

        if (values.password !== values.conpassword) {
            errors.conpassword = "Passwords do not match";
        }


        return errors;
    }

    

    
    return (
        <div className="form-container sign-up">
            <form onSubmit={handleSubmit}>
                <h1>SIGNUP</h1>
                <SocialIcons />
                <span>or use your email password</span>
                <input type="text" value={name} onChange={handleName} placeholder="Username" />
                <input type="email" value={email} onChange={handleEmail} placeholder="Email" />
                {/* <input type="number" value={phonenumber} onChange={(event) => setPhone(event.target.value)} placeholder="Phone number" /> */}
                <input type="password" value={password} onChange={handlePwd} placeholder="Password" />
                <input type="password" value={conpassword} onChange={handleConpass} placeholder="Confirm Password" />
                <a href="#">Forget Your Password?</a>
                <button type='submit' className='Signin'>Sign In</button>
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



