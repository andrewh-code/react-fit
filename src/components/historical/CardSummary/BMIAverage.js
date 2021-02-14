import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react'
import { faHeartbeat, faWeight, faTachometerAlt, faPercentage } from '@fortawesome/free-solid-svg-icons';

function BMIAverage() {
    var bmiAve = 24.4;

    var bpStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        display: 'inline'
    }

    var cardStyle = {
        // border: '1px solid #FFFFFF',
        height: '100%',
        width: '20%',
        display: 'inline-block',
        padding: '0.5em',
        marginRight: '1em',
        marginLeft: '1em',
        background: '#333842',
        borderRadius: '10px'
    }

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
                <div style={cardStyle}>
                    <div>
                        <h1>Heart Rate</h1>
                    </div>
                    
                    <FontAwesomeIcon icon={faHeartbeat} size="2x"></FontAwesomeIcon>
                    <span style={{marginRight: '1em'}}></span>
                    <h1 style={bpStyle}>{bpm}</h1><p style={{fontSize: '0.5em', display: 'inline'}}> bpm</p>
                    <p style={{fontSize: '0.75em', color: '#c2c2c2', marginTop: '0.2em'}}>{date}</p>
                </div>
                <div style={cardStyle}>
                    <div>
                        <h1>Blood Pressure</h1>
                    </div>
                    <FontAwesomeIcon icon={faTachometerAlt} size="2x"></FontAwesomeIcon>
                    <span style={{marginRight: '1em'}}></span>
                    <h1 style={bpStyle}>{systolic}/{diastolic}</h1><p style={{fontSize: '0.5em', display: 'inline'}}> mmHG</p>
                    <p style={{fontSize: '0.75em', color: '#c2c2c2', marginTop: '0.2em'}}>{date}</p>
                </div>
                <div style={cardStyle}>
                    <div>
                        <h1>BMI</h1>
                    </div>
                    <FontAwesomeIcon icon={faPercentage} size="2x"></FontAwesomeIcon>
                    <span style={{marginRight: '1em'}}></span>
                    <h1 style={bpStyle}>{bmi}</h1><p style={{fontSize: '0.5em', display: 'inline'}}> lb/in&sup2;</p>
                    <p style={{fontSize: '0.75em', color: '#c2c2c2', marginTop: '0.2em'}}>{date}</p>
                </div>
                <div style={cardStyle}>
                    <div>
                        <h1>Weight</h1>
                    </div>
                    <FontAwesomeIcon icon={faWeight} size="2x"></FontAwesomeIcon>
                    <span style={{marginRight: '1em'}}></span>
                    <h1 style={bpStyle}>{weight}</h1><p style={{fontSize: '0.5em', display: 'inline'}}> lb</p>
                    <p style={{fontSize: '0.75em', color: '#c2c2c2', marginTop: '0.2em'}}>{date}</p>
                </div>
            </div>
        </Fragment>

    )
}

export default BMIAverage
