import { useAuthStore } from "@/context/authContext";
import Head from "next/head";
import Link from "next/link";

const Layout = ({title, children}) => {
    const {user, signOut} = useAuthStore();

    const logout = async () => {
        await signOut();
    };

    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div>
                <Link href="/home">Home</Link>
                {!user ? (
                    <>
                        <Link href="/login">Signin</Link>
                        <Link href="/register">Register</Link>
                    </>
                ): 
                    <>
                        ({user.username})
                        <Link href="#" onClick={logout}>logout</Link>
                    </>
                }
            </div>
            <main>
                {children}
            </main>
        </>
    )
};

export default Layout;