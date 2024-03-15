import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoutes = () => {
    const [user] = useAuthState(auth);


    const showConfirmation = () => {
        window.confirm("You are logged in successfully!"); 
    };

    if (user) {
        showConfirmation();
    }

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
