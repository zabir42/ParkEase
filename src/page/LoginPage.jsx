import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Field from '../components/shared/Field';
import { loginWithEmailAndPassword } from '../firebase';


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            const response = await loginWithEmailAndPassword(data.email, data.password);
            console.log(response);
            navigate('/')
        } catch (error) {
            console.log(error);

        }
    };

    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <div className="mb-4">
                    <Field label="Email">
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: true })}
                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </Field>
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="mb-4">
                    <Field label="Password">
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: true })}
                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </Field>
                    {errors.password && <span className="text-red-500">Password is required</span>}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
            </form>
            <p className="text-center mt-4">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
        </div>
    );
};

export default LoginPage;
