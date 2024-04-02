

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email, password)


    }

    return (
        <div>
           <div>
           <h2 className="text-center text-3xl mb-8 font-medium">Please Register</h2>

            <form onSubmit={handleRegister} className="text-center">
                <input className="mb-4 w-3/4 border rounded-lg p-2" type="email" placeholder="Enter Your Email" name="email" required />
                <br />
                <input className="mb-4 w-3/4 border rounded-lg p-2"  type="password" placeholder="Enter Your Password" name="password" required /> <br />
                <input className="mb-4 btn btn-primary w-3/4 border rounded-lg"  type="submit" value="Register" />
            </form>
           </div>
        </div>
    );
};

export default Register;