import Layout from "@/components/Layout";
import { useAuthStore } from "@/context/authContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Login(){
    const {user, error, signIn} = useAuthStore();
    const router = useRouter();
    const {redirect} = router.query;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(user) router.push(redirect || '/home');
    }, [user, router, redirect]);

    const login = async(e)=>{
        e.preventDefault();

        await signIn({username, password});
    };

    return(
        <Layout title="login">
            <h1>Login</h1>
            {error && <div>{error}</div>}
            <form>
                <div>
                    <label htmlFor="username">Usernane</label>
                    <input type="text" id="username" value={username} onChange={e => setUsername(e.target?.value)}/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target?.value)}/>
                </div>

                <button type="submit" onClick={login}>signin</button>
            </form>
        </Layout>
    );
};

export default Login;