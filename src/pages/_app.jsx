import { AuthContextProvider, useAuthStore } from "@/context/authContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <AuthContextProvider>
            {Component.auth ? (
                <Auth roles={Component.auth.roles}>
                    <Component {...pageProps}/>
                </Auth>
            ): (<Component {...pageProps}/>)}
        </AuthContextProvider>
    )
}

// Check for authentication
function Auth({children, roles}){
    const router = useRouter();
    const {user, loading} = useAuthStore();

    useEffect(() => {
        // Cancel if is loading
        if (loading) return;

        // If user is not logged in, go back home
        if (!user) router.push('/home');
    }, [user, router, loading]);

    // Show while is loading
    if(loading) return (<div>Loading...</div>);

    // If user is logged in show the component
    if(user != null) return children;

}

export default App;