import Layout from "@/components/Layout";
import { ROLES } from "@/shared/constants";
import { useEffect } from "react";
import { useRouter } from "next/router";

const PatientPage = () =>{
    const router = useRouter();
    const {id} = router.query;
    
    useEffect(()=>{
        console.log(id);
    }, [id]);

    return(
        <Layout title="profile">
            <h1>Profile</h1>
        </Layout>
    );
};

PatientPage.auth = {
    roles: [
        ROLES.HEALTHCARE_PROVIDER,
        ROLES.PATIENT
    ],
};

export default PatientPage;