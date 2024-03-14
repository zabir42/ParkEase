import React from 'react';
import { useForm } from 'react-hook-form';
import useParking from '../hooks/useParking';
import Field from './shared/Field';

const ParkingForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const { parking, setParking } = useParking()

    const onSubmit = (data) => {
        const newEntry = { ...data, entryDate: new Date().toLocaleString() };
        setParking([...parking, newEntry]);
        reset()
    };

    return (
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="card rounded-0 shadow">
                <div className="card-header rounded-0">
                    <div className="card-title">
                        <b>Parking Form</b>
                    </div>
                </div>
                <div className="card-body rounded-0">
                    <div className="container-fluid">
                        <form id="entryForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <Field label="Car Owner Name:" error={errors.owner?.message}>
                                    <input
                                        type="text"
                                        {...register('owner', { required: 'Car Owner Name is required' })}
                                        className="form-control rounded-0 shadow-sm"
                                        placeholder="Enter Name:"
                                    />
                                </Field>
                            </div>
                            <div className="form-group">
                                <Field label="Car Brand/Model/Color :" error={errors.car?.message}>
                                    <input
                                        type="text"
                                        {...register('car', { required: 'Car Brand/Model/Color is required' })}
                                        className="form-control rounded-0 shadow-sm"
                                        placeholder="Write Here"
                                    />
                                </Field>
                            </div>
                            <div className="form-group">
                                <Field label="License Plate:" error={errors.licensePlate?.message}>
                                    <input
                                        type="text"
                                        {...register('licensePlate', { required: 'License Plate is required' })}
                                        className="form-control rounded-0 shadow-sm"
                                        placeholder="License Plate:"
                                    />
                                </Field>
                            </div>
                            <button
                                type="submit"
                                className="btn bg-blue-500 mx-auto col-lg-5 col-md-6 col-sm-12 col-12 d-block mt-5 rounded-0 bg-gradient btn-primary"
                                id="btnOne"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParkingForm;
