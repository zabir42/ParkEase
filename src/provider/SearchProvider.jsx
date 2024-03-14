import { useState } from "react";
import { SearchContext } from "../context";
import useParking from "../hooks/useParking";


const SearchProvider = ({ children }) => {
    const { parking } = useParking()
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

    const filteredParking = searchFilteredParking(parking, searchQuery);



    return (
        <SearchContext.Provider value={{ filteredParking, handleSearch, searchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;