import React from 'react';
import { Link } from "react-router-dom";
import './signup.css';


class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            surname: '',
            mobileOrEmail: '',
            password: '',
            day: 'Day',
            month: 'Month',
            year: 'Year',
            gender: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Your account has been created successfully!');
    };

    render() {
        return (
                <div className="signup-row">
                    <div className="signup-col-logo">
                        <p>
                            <a href="https://www.facebook.com/">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                                    alt="Facebook"
                                />
                            </a>
                        </p>
                    </div>

                <div id="signup-wrapper">
                    <div id="div1"></div>
                    <div id="signup-div2">
                        <h1>Create an account</h1>
                        <form onSubmit={this.handleSubmit}>
                            <li>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    placeholder="Surname"
                                    name="surname"
                                    value={this.state.surname}
                                    onChange={this.handleInputChange}
                                />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    placeholder="Mobile number or email"
                                    name="mobileOrEmail"
                                    value={this.state.mobileOrEmail}
                                    onChange={this.handleInputChange}
                                />
                            </li>
                            <li>
                                <input
                                    type="password"
                                    placeholder="New password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                            </li>
                            <li><h2>Date of Birth</h2></li>
                            <li>
                                <select
                                    name="day"
                                    value={this.state.day}
                                    onChange={this.handleInputChange}
                                >
                                    <option>Day</option>
                                </select>
                                <select
                                    name="month"
                                    value={this.state.month}
                                    onChange={this.handleInputChange}
                                >
                                    <option>Month</option>
                                </select>
                                <select
                                    name="year"
                                    value={this.state.year}
                                    onChange={this.handleInputChange}
                                >
                                    <option>Year</option>
                                </select>
                            </li>
                            <br/>
                            <br/>
                            <li><h2>Gender</h2>
                            </li>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={this.handleInputChange}
                            />
                            Female{' '}
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={this.handleInputChange}
                            />
                            Male{' '}
                            <input
                                type="radio"
                                name="gender"
                                value="Custom"
                                onChange={this.handleInputChange}
                            />
                            Custom
                            <li id="signup-terms">
                                By clicking Sign Up, you agree to our <a href="">Terms</a>,{' '}
                                <a href="">Privacy Policy</a> and <a href="">Cookies Policy</a>.
                                You may receive SMS notifications from us and can opt out at any
                                time.
                            </li>
                            
                                <button className="signup" id="signup">
                                    <Link to="/home">Sign Up</Link>
                                </button>
                                {/* <input type="submit" value="Sign Up" /> */}
                        
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateAccount;
