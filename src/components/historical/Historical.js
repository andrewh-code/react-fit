import React, { Fragment } from 'react'
import BMIHistorical from './BMIHistorical.js';
import BPHistorical from './BPHistorical.js';
import BMIAverage from './CardSummary/BMIAverage.js';
import BPAverage from './CardSummary/BPAverage.js';
import HRAverage from './CardSummary/HRAverage.js';
import HRHistorical from './HRHistorical.js';
import StatCard from './CardSummary/StatCard.js';
import { faHeartbeat, faWeight, faTachometerAlt, faPercentage } from '@fortawesome/free-solid-svg-icons';

function Historical() {

    var cardContainerStyle = {
        height: '7em',
        padding: '0.25em'
    }
    //dummy data
    var systolic = 120;
    var diastolic = 80;
    var bp = systolic + "/" + diastolic;
    var hr = 66;
    var bmi = 24.1;
    var weight = 200;
    var date = "01/01/2020";

    return (
        <Fragment>
            <div style={{width: '100%', overflow: 'hidden', top: '10vh', position: 'fixed'}}>
                <div style={cardContainerStyle}>
                    <StatCard title="Heart Rate" value={hr} units="bpm" faIconComponent={faHeartbeat} date={date}/>
                    <StatCard title="Blood Pressure" value={bp} units="mmHG" faIconComponent={faTachometerAlt} date={date}/>
                    <StatCard title="Weight" value={weight} units="lb" faIconComponent={faWeight} date={date}/>
                    <StatCard title="BMI" value={bmi} units="lb/in^2" faIconComponent={faPercentage} date={date}/>
                </div>
            </div>
            
            <div style={{width: '80%', overflow: 'hidden', top: '31vh', position: 'fixed'}}>
                <div style={{width: '45%', float: 'left'}}>
                    <BPHistorical/>
                </div>
                <div style={{width: '45%', float: 'right'}}>
                    <BMIHistorical/>
                </div>
            </div>
            <div style={{width: '80%', overflow: 'hidden', top: '65vh', position: 'fixed'}}>
                <div style={{width: '45%', float: 'left'}}>
                    <HRHistorical/>
                </div>
                <div style={{width: '45%', float: 'right'}}>
                    <HRHistorical/>
                </div>
            </div>
        </Fragment>
        
    )
}

export default Historical