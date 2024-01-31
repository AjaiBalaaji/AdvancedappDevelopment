import React, { useEffect, useState } from 'react';
// import './Login.css';
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    useEffect(() => {
        const bodyStyle = document.body.style;
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
                <Division2 />
            </div>
        </div>
    );
};

const SignInForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = new RegExp("[A-Z][A-za-z0-9$_]+");

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "Invalid password";
        }

        return errors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validate({ email, password });
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmit(true);
            console.log("Login Successful");
            navigate('/Home');
        } else {
            setIsSubmit(false);
        }
    };

    return (
        <div className='Body'>
            <div className="form-container sign-in">
                <form onSubmit={handleSubmit}>
                    <h1> LOGIN</h1>
                    <SocialIcons />
                    <span>or use your email password</span>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                    <p style={{ color: "red" }}>{formErrors.email}</p>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                    <p style={{ color: "red" }}>{formErrors.password}</p>
                    <a href="#">Forget Your Password?</a>
                    <button type="submit" className='Loginin'>Sign In</button>
                </form>
            </div>
        </div>
    );
};

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="#" className="icon"><FaFacebook /></a>
            <a href="#" className="icon"><FaGoogle /></a>
            <a href="#" className="icon"><FaTwitter /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
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
