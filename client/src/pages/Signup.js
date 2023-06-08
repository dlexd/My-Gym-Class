import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../util/mutations';

function Signup(props) {
    const { formState, setFormState } = useState({ username: '', email: '', password: ''});
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await addUser({ variables: { username: formState.username, email: formState.email, password: formState.password }})
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="flex-row justify-center mb-4">
            <Link to ="/login">
                ← Go to Login
            </Link>

            <h2>Signup</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="username">Username:</label>
                    <input
                        placeholder="Username"
                        name="username"
                        type="username"
                        id="username"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder="
                        Email"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>

                <div className='flex-row space-between my-2'>
                    <label htmlFor="pwd">Confirm Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>

                <div className='flex-row space-between my-2'>
                    <label htmlFor="weight">Weight:</label>
                    <input
                        placeholder="Weight"
                        name="weight"
                        type="weight"
                        id="weight"
                        onChange={handleChange}
                    />
                </div>
                <div className='flex-row space-between my-2'>
                    <label htmlFor="height">Height:</label>
                    <input
                        placeholder="Height"
                        name="height"
                        type="height"
                        id="height"
                        onChange={handleChange}
                    />
                </div>
                <div className='flex-row space-between my-2'>
                    <label htmlFor="age">Age:</label>
                    <input
                        placeholder="Age"
                        name="age"
                        type="age"
                        id="age"
                        onChange={handleChange}
                    />
                </div>
                <div className='flex-row space-between my-2'>
                    <label htmlFor="Activity"
                    >Activity Level:</label>
                    <select name="Activity" id="Activity" onChange={handleChange}>
                        <option value="sedentary">Sedentary</option>
                        <option value="light">Light</option>
                        <option value="moderate">Moderate</option>
                        <option value="very">Very</option>
                        <option value="extra">Extra</option>
                    </select>
                </div>
                <div className='flex-row space-between my-2'>
                    <label htmlFor="Goal"
                    >Goal:</label>
                    <select name="Goal" id="Goal" onChange={handleChange}>
                        <option value="lose">Lose</option>
                        <option value="maintain">Maintain</option>
                        <option value="gain">Gain</option>
                    </select>
                </div>
                
                <div className="flex-row flex-end">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
