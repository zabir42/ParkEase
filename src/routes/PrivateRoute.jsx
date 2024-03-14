import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const [user] = useAuthState(auth);


    return (
        <>
            {user ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default PrivateRoutes;