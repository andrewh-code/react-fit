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

                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="gender"
                            id="maleRadioInput"
                            onChange={this.setGender}
                            value="male" />
                        <label className="form-check-label" htmlFor="maleRadioInput">Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="gender"
                            id="femaleRadioInput"
                            onChange={this.setGender}
                            value="female" />
                        <label className="form-check-label" htmlFor="femaleRadioInput">Female</label>
                    </div>
                    <center>
                        <div style={{ border: '1px solid white', width: '25%' }}>

                            <input className="form-control border-0 shadow-none"
                                type="text"
                                name="height"
                                placeholder="enter height in inches"
                            />
                        </div>
                    </center>

                    <div>
                        <div style={{ border: '1px solid white', display: 'inline', float: 'left', marginLeft: '5em', width: '6em' }}>
                            {gender != "female" ? <FontAwesomeIcon icon={faMale} size="10x" /> : <FontAwesomeIcon icon={faFemale} size="10x" />}
                        </div>

                        <div style={{ display: 'inline', float: 'right', marginTop: '4em', marginRight: '5em' }}>
                            <input className="form-control border-0 shadow-none"
                                type="text"
                                name="height"
                                placeholder="enter weight..."
                            />

                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="radio"
                                    name="weight"
                                    id="lbRadioInput"
                                    onChange={this.setGender}
                                    value="lb" />
                                <label className="form-check-label" htmlFor="lbRadioInput">pounds</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    type="radio"
                                    name="weight"
                                    id="kgRadioInput"
                                    onChange={this.setGender}
                                    value="kg" />
                                <label className="form-check-label" htmlFor="kgRadioInput">kilograms</label>
                            </div>


                        </div>
                    </div>



                </form>

            </div>
        )
    }
}

export default BMIDailyInput
