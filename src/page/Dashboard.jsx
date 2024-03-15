import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import CarWrapper from '../components/CarWrapper.jsx';
import Footer from "../components/Footer.jsx";
import Header from '../components/Header.jsx';
import ParkingForm from '../components/ParkingForm.jsx';
import { auth } from '../firebase.js';

const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()


    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/login");
            console.log('Signed Out');
        }).catch((error) => {
            console.error(error);
        });
    }


    if (loading) return <p>Loading user data...</p>
    if (error) return <p>{error}</p>


    return (
        <>
            <Header />
            <div className="container flex items-center justify-end m-4">
                <div className="mr-4">Welcome, {user.displayName ? user.displayName : 'admin'}</div>
                <button className='bg-blue-500 text-white rounded p-2' onClick={handleLogout}>Logout</button>
            </div>
            <div className="container-md pt-5">
                <div className="row">
                    <ParkingForm />
                    <CarWrapper />
                </div>
            </div>
            <Footer />
        </>


    );

};

export default Dashboard;
