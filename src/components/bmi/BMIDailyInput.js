import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

export class BMIDailyInput extends Component {

    constructor() {
        super();

        this.state = {
            gender: null
        }

    }

    setGender = (e) => {
        const { name, value } = e.target;

        this.setState({
            gender: value
        })
    }

    calculateBMI = () => {
        console.log("hello from calculateBMI");
    }

    render() {

        var {
            gender
        } = this.state;

        return (
            <div className="container border">
                <form onSubmit={this.calculateBMI}>
                    <center>
                        <div style={{marginTop: '1em'}}>
                            <select id="weightUnits" style={{ fontSize: '0.75em', height: '100%', width: '30%'}}>
                                <option value="">Measurement:</option>
                                <option value="imperial">inches/lbs</option>
                                <option value="metric">cm/Kgs</option>
                            </select>
                        </div>
                    </center>
                    <center>
                        <div style={{marginTop: '1em'}}>
                            <div className="form-check form-check-inline" style={{marginRight: '1em'}}>
                                <input className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="maleRadioInput"
                                    onChange={this.setGender}
                                    value="male" />
                                <label className="form-check-label" htmlFor="maleRadioInput" style={{fontSize: '0.75em'}}>Male</label>
                            </div>
                            <div className="form-check form-check-inline"style={{marginLeft: '1em'}}>
                                <input className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="femaleRadioInput"
                                    onChange={this.setGender}
                                    value="female" />
                                <label className="form-check-label" htmlFor="femaleRadioInput" style={{fontSize: '0.75em'}}>Female</label>
                            </div>
                        </div>
                    </center>
                    <center>
                        <div style={{marginTop: '1em', width: '30%'}}>
                                <input className="form-control border-0 shadow-none"
                                    type="text"
                                    name="height"
                                    placeholder="enter height..."
                                />
                        </div>
                    </center>

                    <center>
                    <div style={{marginTop: '1em', width: '50%'}}>
                        
                        <div style={{ display: 'inline', width: '50%' }}>
                            {gender != "female" ? <FontAwesomeIcon icon={faMale} size="10x" /> : <FontAwesomeIcon icon={faFemale} size="10x" />}
                        </div>

                        <div style={{ display: 'inline', float: 'right', width: '40%', marginRight: '1em', marginTop: '4em'}}>
                            <input className="form-control border-0 shadow-none"
                                type="text"
                                name="height"
                                placeholder="enter weight..."
                            />
                        </div>
                    </div>
                    </center>
                </form>

            </div>
        )
    }
}

export default BMIDailyInput
