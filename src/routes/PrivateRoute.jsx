import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoutes = () => {
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            showConfirmation();
        }
    }, [user]);

    const showConfirmation = () => {
        window.confirm("You are logged in successfully!");
    };

    return (
        <>
            {user ? (
                <>
                    <Outlet />
                </>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
};

export default PrivateRoutes;
