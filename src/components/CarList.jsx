import React from 'react';
import useParking from '../hooks/useParking';

const CardList = ({ filteredParking, onDelete }) => {
    const { setEditState } = useParking()

    const handleEdit = (entry) => {
        setEditState(entry)
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
                            <td className='flex gap-3'>
                                <button onClick={() => onDelete(index)} className="btn btn-danger">Delete</button>
                                <button onClick={() => handleEdit(entry)} className="btn btn-primary">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CardList;
