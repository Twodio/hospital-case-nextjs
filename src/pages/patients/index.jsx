import Layout from "@/components/Layout";
import PatientsList from "@/components/patients/PatientsList";
import { ROLES } from "@/shared/constants";
import { useEffect, useState } from "react";

const PatientsPage = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [patients, setPatients] = useState([]);

    useEffect(()=>{
        loadPatients();
    }, []);

    const loadPatients = async() => {
        setLoading(true);

        try {
            const request = await fetch('', {

            });

            if(!request.ok){
                throw new Error(request.status);
            }

            const data = await request.json();

            setPatients(data);
            
        } catch (error) {
            // shallow version
            setError('something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return(
        <Layout title="Patients">
            <h1>Patients List</h1>
            {patients.length > 0 ? <PatientsList patients={patients}/> : <div>Nothing to show</div>}
        </Layout>
    );
};

// PatientsPage.auth = {
//     roles: [
//         ROLES.HEALTHCARE_PROVIDER
//     ],
// };

export default PatientsPage;