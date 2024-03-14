import { useState } from "react";
import { ParkingContext } from "../context";



// eslint-disable-next-line react/prop-types
const ParkingProvider = ({ children }) => {
    const [parking, setParking] = useState([]);



    return (
        <ParkingContext.Provider value={{ parking, setParking }}>
            {children}
        </ParkingContext.Provider>
    );
};

export default ParkingProvider;