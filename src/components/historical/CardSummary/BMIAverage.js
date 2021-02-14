import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react'
import { faHeartbeat, faWeight, faTachometerAlt, faPercentage } from '@fortawesome/free-solid-svg-icons';
import StatCard from './StatCard.js';

function BMIAverage() {
    var cardContainerStyle = {
        height: '7em',
        padding: '0.25em'
    }

    var systolic = 120;
    var diastolic = 80;
    var bpm = 66;
    var bmi = 24.1;
    var weight = 200;
    var date = "01/01/2020";

    return (
        <Fragment>
            <div style={cardContainerStyle}>
                <StatCard title="Heart Rate" value="55" units="bpm" faIconComponent={faHeartbeat} date={date}/>
                <StatCard title="Blood Pressure" value="120/80" units="mmHG" faIconComponent={faTachometerAlt} date={date}/>
                <StatCard title="Weight" value="200" units="lb" faIconComponent={faWeight} date={date}/>
                <StatCard title="BMI" value="24.4" units="lb/in^2" faIconComponent={faPercentage} date={date}/>
            </div>
        </Fragment>

    )
}

export default BMIAverage
