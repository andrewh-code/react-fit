import React, { Fragment } from 'react'
import BMIHistoricalChart from './charts/BMIHistoricalChart.js';
import StatCard from './cardsummary/StatCard.js';
import { faHeartbeat, faWeight, faTachometerAlt, faPercentage } from '@fortawesome/free-solid-svg-icons';
import HRHistoricalChart from './charts/HRHistoricalChart.js';
import WeightHistoricalChart from './charts/WeightHistoricalChart.js';
import BPHistoricalChart from './charts/BPHistoricalChart.js';

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
            <div style={{width: '90%', overflow: 'hidden', top: '10vh', position: 'fixed'}}>
                <div style={cardContainerStyle}>
                    <StatCard title="Heart Rate" value={hr} units="bpm" faIconComponent={faHeartbeat} date={date}/>
                    <StatCard title="Blood Pressure" value={bp} units="mmHG" faIconComponent={faTachometerAlt} date={date}/>
                    <StatCard title="Weight" value={weight} units="lb" faIconComponent={faWeight} date={date}/>
                    <StatCard title="BMI" value={bmi} units="lb/in^2" faIconComponent={faPercentage} date={date}/>
                </div>
            </div>
            
            <div style={{width: '90%', overflow: 'hidden', top: '31vh', position: 'fixed', padding: '0.25em'}}>
                <div style={{width: '40%', float: 'left', marginRight: '1em', marginLeft: '4.5em'}}>
                    <BPHistoricalChart/>
                </div>
                <div style={{width: '40%', float: 'right', marginRight: '4.5em', marginLeft: '1em'}}>
                    <BMIHistoricalChart/>
                </div>
            </div>

            <div style={{width: '90%', overflow: 'hidden', top: '66vh', position: 'fixed', padding: '0.25em'}}>                
                <div style={{width: '40%', float: 'left', marginRight: '1em', marginLeft: '4.5em'}}>
                    <HRHistoricalChart/>
                </div>
                <div style={{width: '40%', float: 'right', marginRight: '4.5em', marginLeft: '1em'}}>
                    <WeightHistoricalChart/>
                </div>
            </div>
        </Fragment>
        
    )
}

export default Historical