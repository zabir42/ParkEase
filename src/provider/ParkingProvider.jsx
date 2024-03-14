import React, { useState } from "react";
import { ParkingContext } from "../context";

const ParkingProvider = ({ children }) => {
    const [parking, setParking] = useState([]);

    const deleteParkingEntry = (index) => {
        const updatedParking = parking.filter((_, i) => i !== index);
        setParking(updatedParking);
    };

    return (
        <ParkingContext.Provider value={{ parking, setParking, deleteParkingEntry }}>
            {children}
        </ParkingContext.Provider>
    );
};

export default ParkingProvider;
