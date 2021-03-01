import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import BMIInfo from './BMIInfo';

export class BMIDailyInput extends Component {

    constructor() {
        super();

        this.state = {
            gender: null,
            system: null,
            height: "",
            weight: "",
            bmi: 0,
            errorHeight: "",
            errorWeight: "",
            errorSystem: "",
            error: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    calculateBMI = (e) => {
        e.preventDefault();     // prevent the page refresh
        // reset error messages
        this.setState({
            errorHeight: "",
            errorWeight: "",
            errorSystem: ""
        })
        const { gender, system, height, weight } = this.state;
        var errorMsg = "";
        var error = false;
        // formula
        // bmi = weight / height ^ 2
        // 1 inch = 2.54 cm
        // 1 pound = 0.453592kg ==> round to 0.454

        if (!this.isValidInput(height)) {
            this.setState({
                error: true,
                errorHeight: "invalid input for height"
            });
            return;
        }

        if (!this.isValidInput(weight)) {
            this.setState({
                error: true,
                errorWeight: "invalid input for weight"
            });
            return;
        }

        var bmi = 0;
        var newHeight = parseInt(height, 10);
        var newWeight = parseInt(weight, 10);
        if (!system) {
            this.setState({
                error: true,
                errorSystem: "Please input measurement system"
            });
            return;
        }
        if (system === "metric") {
            bmi = (newWeight / Math.pow(newHeight / 100, 2)).toFixed(2);
        } else if (system === "imperial") {
            bmi = ((newWeight * 0.454) / Math.pow((newHeight * 2.54 / 100), 2)).toFixed(2);
        } else {
            errorMsg = "please choose measurement system"
            error = true;
        }

        if (error) {
            this.setState({
                error: error,
                errorMsg: errorMsg
            });
        } else {
            this.setState({
                bmi: bmi
            });
        }
    }

    isValidInput = (input) => {
        try {
            var result = parseInt(input, 10);
            if (Number.isNaN(result)) {
                return false;
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }


    render() {

        var {
            gender,
            height,
            weight,
            system,
            bmi,
            errorHeight,
            errorWeight,
            errorSystem,
            error
        } = this.state;

        var weightUnits = "units";
        var heightUnits = "units";
        if (system && system === "imperial") {
            heightUnits = "inches";
            weightUnits = "lbs";
        } else if (system && system === "metric") {
            heightUnits = "cm";
            weightUnits = "Kg";
        }

        return (
            <div className="container">
                <form onSubmit={this.calculateBMI}>
                    <div style={{ marginTop: '1em', width: '50%' }}>
                        <select id="weightUnits" style={{ fontSize: '0.75em' }}
                            name="system"
                            value={system}
                            onChange={this.handleChange}>
                            <option value="">Measurement:</option>
                            <option value="imperial">inches/lbs</option>
                            <option value="metric">cm/Kgs</option>
                        </select>
                    </div>
                    <p id="error">{errorSystem ? errorSystem : ""}</p>

                    <div style={{ marginTop: '1em', width: '50%' }}>
                        <center>
                            <div className="form-check form-check-inline" style={{ marginRight: '1em' }}>
                                <input className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="maleRadioInput"
                                    onChange={this.handleChange}
                                    value="male" />
                                <label className="form-check-label" htmlFor="maleRadioInput" style={{ fontSize: '0.75em' }}>Male</label>
                            </div>
                            <div className="form-check form-check-inline" style={{ marginLeft: '1em' }}>
                                <input className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="femaleRadioInput"
                                    onChange={this.handleChange}
                                    value="female" />
                                <label className="form-check-label" htmlFor="femaleRadioInput" style={{ fontSize: '0.75em' }}>Female</label>
                            </div>
                        </center>
                    </div>

                    <div>
                        <div style={{ marginTop: '1em', width: '30%'}}>
                            <label style={{ display: 'inline-block', width: '30%', fontSize: '0.75em' }} htmlFor="height">{heightUnits}</label>
                            <input style={{ width: '70%', float: 'left' }} className="form-control border-0 shadow-none"
                                type="text"
                                name="height"
                                placeholder="enter height..."
                                onChange={this.handleChange}
                                value={height}
                                required
                            />
                        </div>
                        
                        <p id="error">{errorHeight ? errorHeight : ""}</p>
                        
                    </div>
                    
                
                    
                    <div>
                        <div style={{ marginTop: '1em', width: '50%', float: 'left'}}>
                            <div style={{ display: 'inline', width: '50%' }}>
                                {gender != "female" ? <FontAwesomeIcon icon={faMale} size="10x" /> : <FontAwesomeIcon icon={faFemale} size="10x" />}
                            </div>

                            <div style={{ display: 'inline', float: 'right', width: '40%', marginRight: '1em', marginTop: '4em' }}>
                                <label style={{ display: 'inline-block', width: '30%', fontSize: '0.75em' }} htmlFor="height">{weightUnits}</label>
                                <input style={{ width: '70%', float: 'left' }} className="form-control border-0 shadow-none"
                                    type="text"
                                    name="weight"
                                    placeholder="enter weight..."
                                    onChange={this.handleChange}
                                    value={weight}
                                    required
                                />
                            </div>
                            <p id="error">{errorWeight ? errorWeight : ""}</p>
                        </div>
                        
                        <div style={{ marginTop: '1em', width: '50%', float: 'right'}}>
                            <BMIInfo/>
                        </div>
                    </div>

                    <div style={{}}>
                        <button
                            className="btn btn-light"
                            type="submit">Calculate BMI
                            </button>
                            <p>Your BMI is: {this.state.bmi}</p>
                    </div>

                </form>

            </div>
        )
    }
}

export default BMIDailyInput
