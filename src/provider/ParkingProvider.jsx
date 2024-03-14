import React, { useState } from "react";
import { ParkingContext } from "../context";

const ParkingProvider = ({ children }) => {
    const [parking, setParking] = useState([]);
    const [editState, setEditState] = useState(false)

    const deleteParkingEntry = (index) => {
        const updatedParking = parking.filter((_, i) => i !== index);
        setParking(updatedParking);
    };

    return (
        <ParkingContext.Provider value={{ parking, setParking, deleteParkingEntry, editState, setEditState }}>
            {children}
        </ParkingContext.Provider>
    );
};

export default ParkingProvider;
