import Layout from "@/components/Layout";
import { useAuthStore } from "@/context/authContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Login(){
    const {user, error, signIn} = useAuthStore();
    const router = useRouter();
    const {redirect} = router.query;

    const {
        register,
        getValues,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'onChange'});

    // Define the routes elsewhere
    useEffect(()=>{
        if(user) router.push(redirect || '/home');
    }, [user, router, redirect]);

    const onSubmit = async(data)=>{
        return;
    };

    return(
        <Layout title="login">
            <h1>Login</h1>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Usernane</label>
                    <input type="text" id="username" {...register('username', {
                        required: {
                            value: true,
                            message: 'Username is required!'
                        }
                    })} autoFocus/>
                    {errors.username && <span className=''>{errors.username.message}</span>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register('password', {
                        required: {
                            value: true,
                            message: 'Password is required!'
                        }
                    })} autoFocus/>
                    {errors.password && <span className=''>{errors.password.message}</span>}
                </div>

                <button type="submit">signin</button>
            </form>
        </Layout>
    );
};

export default Login;