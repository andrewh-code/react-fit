import React, { Component, Fragment } from 'react';
import BPBar from './BPBar';
import '../../App.css';

export default class DailyInput extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            weight: "",
            pulse: "",
            systolic: "",
            diastolic: "",
            sys: 0,
            dia: 0,
            weightErr: false,
            pulseErr: false,
            systolicErr: false,
            diastolicErr: false,
            showBPBar: false,
            
            today: new Date().toLocaleString([], {year: 'numeric', month:'numeric', day:'numeric'})
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveBPData = this.saveBPData.bind(this);
    }

    saveBPData() {
        
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    async handleSubmit(e) {
        e.preventDefault(); // prevent page refresh
        this.setState({
            showBPBar: false
        });
        // validate only numbers
        var {weight, 
            pulse,
            systolic, 
            diastolic,
            weightErr,
            pulseErr,
            systolicErr,
            diastolicErr} = this.state;
        
        // this.setState(this.validInput(weight) ? {weightErr: false} : {weightErr: true});
        await this.setState(this.validInput(weight) ? {weightErr: false} : {weightErr: true});
        await this.setState(this.validInput(pulse) ? {pulseErr: false} : {pulseErr: true});
        await this.setState(this.validInput(systolic) ? {systolicErr: false} : {systolicErr: true});
        await this.setState(this.validInput(diastolic) ? {diastolicErr: false} : {diastolicErr: true});
        
        if (this.state.weightErr || this.state.pulseErr || this.state.systolicErr || this.state.diastolicErr){
            await this.setState({
                showBPBar: false
            })
        } else {
            await this.setState({
                sys: parseInt(systolic,10),
                dia: parseInt(diastolic, 10),
                showBPBar: true
            })   
        }
    }

    validInput = (x) => {
        try {
            var num = parseInt(x, 10);
            if (!Number.isInteger(num) || num < 0){
                return false;
            }
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }


    render() {

        const {weight, pulse, systolic, diastolic, sys, dia, pulseErr, weightErr, systolicErr, diastolicErr} = this.state;
        var today = this.state.today;
        var placeHolderWeight = "input weight...";
        var placeHolderPulse = "input pulse...";
        var placeHolderSys = "input systolic pressure...";
        var placeHolderDia = "input diastolic pressure...";
        var weightErrMsg = "Please input a valid weight value";
        var pulseErrMsg = "Please input a valid heart pulse value";
        var sysErrMsg = "Please input a valid systolic value";
        var diaErrMsg = "Please input a valid diastolic value";
    

        return (
            <Fragment>
                <div style={{marginTop: '1.5em', marginBottom: '1em'}}>
                    <h2>Today: {today}</h2>
                </div>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-3">
                            <h3>Weight</h3>
                        </div>
                        <div className="col-3">
                            <h3>Pulse</h3>
                        </div>
                        <div className="col-6">
                            <h3>BP</h3>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-3">
                                <input 
                                    className="form-control border-0 shadow-none" 
                                    type="text"
                                    name="weight"
                                    placeholder={placeHolderWeight}
                                    value={weight}
                                    onChange={this.handleChange} 
                                    required/>
                                    {weightErr ? <p id="error">{weightErrMsg}</p> : <p></p>}
                            </div>
                            <div className="col-3">
                                <input 
                                    className="form-control border-0 shadow-none" 
                                    type="text"
                                    name="pulse"
                                    placeholder={placeHolderPulse}
                                    value={pulse}
                                    onChange={this.handleChange} 
                                    required/>
                                    {pulseErr ? <p id="error">{pulseErrMsg}</p> : <p id="error"></p>}
                            </div>
                            <div className="col-3">
                                <input 
                                    className="form-control border-0 shadow-none" 
                                    type="text" 
                                    name="systolic" 
                                    placeholder={placeHolderSys}
                                    value={systolic}
                                    onChange={this.handleChange} 
                                    required/>
                                    {systolicErr ? <p id="error">{sysErrMsg}</p> : <p></p>}
                            </div>
                            <div className="col-3">
                                <input 
                                    className="form-control border-0 shadow-none" 
                                    type="text" 
                                    name="diastolic" 
                                    placeholder={placeHolderDia}
                                    value={diastolic}
                                    onChange={this.handleChange} 
                                    required/>
                                    {diastolicErr ? <p id="error">{diaErrMsg}</p> : <p></p>}
                            </div>
                        </div>
                        <button className="btn btn-light" type="submit">Check Blood Pressure</button>
                    </form>
                </div>

                <BPBar bp={sys}></BPBar>

                {/* { this.state.showBPBar ?  <div style={{margin: "1em"}}>
                                                <button 
                                                    className="btn btn-light" 
                                                    onClick={this.saveBPData}>Save Data
                                                </button>
                                            </div>
                                        : <div style={{margin: "2em"}}></div> }*/
                }
            </Fragment>
        )
    }
}
