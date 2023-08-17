import Layout from "@/components/layout";
import { useAuthStore } from "@/context/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Register(){
    const {user} = useAuthStore();
    const router = useRouter();
    const {redirect} = router.query;

    useEffect(()=>{
        if(user) router.push(redirect || '/home');
    }, [user, router, redirect]);

    return(
        <Layout title="register">
            <h1>register</h1>
        </Layout>
    );
};

export default Register;