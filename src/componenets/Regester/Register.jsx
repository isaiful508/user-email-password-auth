import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile, verifyBeforeUpdateEmail } from "firebase/auth";
import auth from './../../firebase/firebase-confg';
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError] = useState(' ');
    const [success, setSuccess] = useState();
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked

        console.log(email, password, accepted, name);
        //reset error and success
        setRegisterError('');
        setSuccess('')

        
        if (password.length < 6) {
            setRegisterError('Password Must Be 6 or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Should use one uppercase characters');
            return;
        }else if(!accepted){
            setRegisterError('Please accept our terms and condition!');
            return;
        }




        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully');

                //update profile
                updateProfile(result.user, {
                    displayName:name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then( () => console.log('Profile updated'))
                .catch( error =>{
                    console.error(error);
                })

                //send verification email
                sendEmailVerification(result.user)
                .then(() => {
                    alert('Please check your email')
                })
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })

    }

    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-center text-3xl mb-8 font-medium">Please Register</h2>

                <form onSubmit={handleRegister} className="text-center">
                    <input className="mb-4 w-full border rounded-lg p-2" type="email" placeholder="Enter Your Email" name="email" required />
                    <br />
                    <input className="mb-4 w-full border rounded-lg p-2" type="text" placeholder="Enter Your Full Name" name="name" required />
                    <br />

                   <div className="relative ">
                   <input
                        className="mb-4 w-full border rounded-lg p-2"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password" name="password"
                        required />
                         <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                         </span>
                   </div>
                    <br />

                    <div >
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="mr-40" htmlFor="terms">Accept our <a href="">terms and conditions</a> </label>
                    </div>
                    <br />

                    <p>Already have an account? <Link to='/login'> Please Login</Link></p>

                    <input className="mb-4 btn btn-primary w-full border rounded-lg" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;