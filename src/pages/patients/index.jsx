import Layout from "@/components/layout";
import { ROLES } from "@/shared/constants";
import { useEffect } from "react";

const ProfilesPage = ({id}) =>{
    useEffect(()=>{
        console.log(id);
    }, [id]);

    return(
        <Layout title="healthcare profile">
            <h1>Profile</h1>
        </Layout>
    );
};

ProfilesPage.auth = {
    roles: [
        ROLES.HEALTHCARE_PROVIDER
    ],
};

export default ProfilesPage;