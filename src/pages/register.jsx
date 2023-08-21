import Layout from "@/components/Layout";
import { useAuthStore } from "@/context/authContext";
import { ROLES } from "@/shared/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Register(){
    const {user, error} = useAuthStore();
    const router = useRouter();
    const {redirect} = router.query;

    const {
        register,
        getValues,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'onChange'});

    // Change it later... (or just use the react-form-hook?)
    const [userType, setUserType] = useState(ROLES.PATIENT);

    useEffect(()=>{
        if(user) router.push(redirect || '/home');
    }, [user, router, redirect]);

    const onSubmit = async(data) => { 
        return;
    };

    return(
        <Layout title="register">
            <h1>register</h1>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Usernane</label>
                    <input type="text" id="username" {...register('username', {
                        required: {
                            value: true,
                            message: 'Username is required'
                        },
                    })} autoFocus/>
                    {errors.username && <span className=''>{errors.username.message}</span>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" {...register('password', {
                        required: {
                            value: true,
                            message: 'Password is required'
                        }
                    })} autoFocus/>
                    {errors.password && <span className=''>{errors.password.message}</span>}
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" id="confirmPassword" {...register('confirmPassword', {
                        validate: function(v){
                            const value = getValues('password');
                            if(value.length > 0 && value !== v){
                                return 'Passwords do not match!';
                            }
                        }
                    })} autoFocus/>
                    {errors.confirmPassword && <span className=''>{errors.confirmPassword.message}</span>}
                </div>

                <div>
                    <label htmlFor="accountType">Type</label>
                    <select id="accountType" onChange={e => setUserType(e.target?.value)}>
                        {Object.entries(ROLES).map((values, key)=>(
                            <option key={key} defaultValue={userType}>{values[key]}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" disabled={!isValid}>create account</button>
            </form>
        </Layout>
    );
};

export default Register;