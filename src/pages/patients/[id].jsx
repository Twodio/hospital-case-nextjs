import Layout from "@/components/layout";
import { ROLES } from "@/shared/constants";
import { useEffect } from "react";

const ProfilePage = (data) =>{

    return(
        <Layout title="healthcare profile">
            <h1>Profile</h1>
        </Layout>
    );
};

ProfilePage.auth = {
    roles: [
        ROLES.HEALTHCARE_PROVIDER,
        ROLES.PATIENT
    ],
};

export default ProfilePage;