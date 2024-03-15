import React, { useState } from "react";
import { ParkingContext } from "../context";

const ParkingProvider = ({ children }) => {
    const [parking, setParking] = useState([]);
    const [editState, setEditState] = useState(false)

    const deleteParkingEntry = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this parking entry?");

        if (confirmDelete) {
            const updatedParking = parking.filter((_, i) => i !== index);
            setParking(updatedParking);
        }
    };


    return (
        <ParkingContext.Provider value={{ parking, setParking, deleteParkingEntry, editState, setEditState }}>
            {children}
        </ParkingContext.Provider>
    );
};

export default ParkingProvider;
