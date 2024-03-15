import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useParking from '../hooks/useParking';
import Field from './shared/Field';

const ParkingForm = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const { parking, setParking, editState, setEditState } = useParking();

    useEffect(() => {
        if (editState) {
            setValue('owner', editState.owner);
            setValue('car', editState.car);
            setValue('licensePlate', editState.licensePlate);
        }
    }, [editState, setValue]);

    const onSubmitCreate = (data) => {
        const newEntry = { ...data, entryDate: new Date().toLocaleString(), id: generateUniqueId() };
        setParking([...parking, newEntry]);
        reset();
    };

    const onSubmitEdit = (data) => {
        const updatedParking = parking.map((entry) =>
            entry.id === editState?.id ? { ...entry, ...data } : entry
        );
        setParking(updatedParking);
        reset();
        setEditState('')
    };



    const onSubmit = editState ? onSubmitEdit : onSubmitCreate;

    const generateUniqueId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    return (
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="card rounded-0 shadow">
                <div className="card-header rounded-0">
                    <div className="card-title">
                        <b>{editState ? 'Edit Parking Entry' : 'Create Parking Entry'}</b>
                    </div>
                </div>
                <div className="card-body rounded-0">
                    <div className="container-fluid">
                        <form id="entryForm" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <div className="form-group">
                                <Field label="Car Owner Name:" error={errors.owner?.message}>
                                    <input
                                        type="text"
                                        {...register('owner', { required: 'Car Owner Name is required' })}
                                        className={`form-control rounded-0 shadow-sm ${errors.owner ? 'is-invalid' : ''}`}
                                        placeholder="Enter Name:"
                                    />
                                    {errors.owner && <div className="invalid-feedback">{errors.owner.message}</div>}
                                </Field>
                            </div>
                            <div className="form-group">
                                <Field label="Car Brand/Model/Color :" error={errors.car?.message}>
                                    <input
                                        type="text"
                                        {...register('car', { required: 'Car Brand/Model/Color is required' })}
                                        className={`form-control rounded-0 shadow-sm ${errors.car ? 'is-invalid' : ''}`}
                                        placeholder="Write Here"
                                    />
                                    {errors.car && <div className="invalid-feedback">{errors.car.message}</div>}
                                </Field>
                            </div>
                            <div className="form-group">
                                <Field label="License Plate:" error={errors.licensePlate?.message}>
                                    <input
                                        type="text"
                                        {...register('licensePlate', { required: 'License Plate is required' })}
                                        className={`form-control rounded-0 shadow-sm ${errors.licensePlate ? 'is-invalid' : ''}`}
                                        placeholder="License Plate:"
                                    />
                                    {errors.licensePlate && <div className="invalid-feedback">{errors.licensePlate.message}</div>}
                                </Field>
                            </div>
                            <button
                                type="submit"
                                className="btn bg-blue-500 mx-auto col-lg-5 col-md-6 col-sm-12 col-12 d-block mt-5 rounded-0 bg-gradient btn-primary"
                                id="btnOne"
                            >
                                {editState ? 'Update' : 'Save'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParkingForm;
