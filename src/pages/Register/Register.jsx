import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext/AuthContext";


const Register = () => {

    const { registration } = useContext(AuthContext)

    const handleFormRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        registration(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })

        e.currentTarget.reset();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="text-3xl text-center mt-14 font-semibold">Register</h2>
                <form onSubmit={handleFormRegister} className=" mt-5">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo" className="input input-bordered" name="photo" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <h2 className="text-xl text-center mt-3">Already have an account? <Link to={'/login'} className="text-blue-400">Login</Link> here</h2>
            </div>
        </div>
    );
};

export default Register;