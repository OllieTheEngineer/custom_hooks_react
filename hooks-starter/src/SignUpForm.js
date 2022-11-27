import React from "react";
import useFields from "./hooks/useFields";

const SignUpForm = () => {
    const [formData, handleChange, resetForm] = useFields({
        username: '',
        email: '',
        password: '',
    })

    const handleSubmit = evt => {
        evt.preventDefault();
        resetForm();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />

            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            />
            <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            />
            <button onClick={handleSubmit}> Submit Form</button>
        </form>
    )
}

export default SignUpForm;