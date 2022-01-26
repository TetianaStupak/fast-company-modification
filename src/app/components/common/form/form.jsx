import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { validator } from './../../../utils/validator';

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    useEffect(() => validate(), [data]);
    const isValid = Object.keys(errors).length === 0;
    return <form>
        {children}
    </form>;
};
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default FormComponent;

