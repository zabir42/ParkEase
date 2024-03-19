import React, { useState } from "react";
import { toast } from "react-toastify";
import { ParkingContext } from "../context";

const ParkingProvider = ({ children }) => {
    const [parking, setParking] = useState([]);
    const [editState, setEditState] = useState('')

    const deleteParkingEntry = (index) => {

        const confirmed = window.confirm("Are you sure you want to delete this parking entry?");
        if (confirmed) {
            const updatedParking = parking.filter((_, i) => i !== index);
            setParking(updatedParking);
            toast.success('Parking entry deleted successfully!');
        }
    };


    return (
        <ParkingContext.Provider value={{ parking, setParking, deleteParkingEntry, editState, setEditState }}>
            {children}
        </ParkingContext.Provider>
    );
};

export default ParkingProvider;
