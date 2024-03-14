import React, { useState } from 'react';
import useParking from '../hooks/useParking';
import CarSearching from './CarSearching';
import CardList from './CardList';

const CarWrapper = () => {

    const { parking, deleteParkingEntry } = useParking();
    const [searchQuery, setSearchQuery] = useState('');

    const searchFilteredParking = (parking, search) =>
        parking.filter(
            (entry) =>
                !search ||
                entry.owner.toLowerCase().includes(search.toLowerCase()) ||
                entry.car.toLowerCase().includes(search.toLowerCase()) ||
                entry.licensePlate.toLowerCase().includes(search.toLowerCase())
        );

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleDeleteEntry = (index) => {
        deleteParkingEntry(index);
    };

    const filteredParking = searchFilteredParking(parking, searchQuery);
    return (
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card rounded-0 shadow">
                <div className="card-header rounded-0">
                    <div className="card-title">
                        <b>List of Parked Cars</b>
                    </div>
                </div>
                <div className="card-body rounded-0">
                    <div className="container-fluid">
                        <CarSearching searchQuery={searchQuery} onSearch={handleSearch} />
                        <CardList filteredParking={filteredParking} onDelete={handleDeleteEntry} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarWrapper;
