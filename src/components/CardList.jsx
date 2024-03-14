import React from 'react';

const CardList = ({ filteredParking, onDelete }) => {
   
    const handleDelete = (index) => {
        onDelete(index);
    };

    return (
        <div className="table-responsive">
            <table className="table table-sm table-striped table-bordered" id="parkingTable">
                <thead id="tableHead">
                    <tr>
                        <th scope="col">Owner</th>
                        <th scope="col">Car</th>
                        <th scope="col">License Plate</th>
                        <th scope="col">Entry Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    {filteredParking.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.owner}</td>
                            <td>{entry.car}</td>
                            <td>{entry.licensePlate}</td>
                            <td>{entry.entryDate}</td>
                            <td>
                                <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CardList;
