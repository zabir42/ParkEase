import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
    const id = htmlFor || getChildId(children);
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={id} className="block mb-2">
                    {label}
                </label>
            )}
            {children}
            {!!error && (
                <div role="alert" className="text-red-600">
                    {error.message}
                </div>
            )}
        </div>
    );
};

const getChildId = (children) => {
    const childArray = React.Children.toArray(children);
    const child = childArray.find((child) => "id" in child?.props);
    return child?.props.id;
};

export default Field;
