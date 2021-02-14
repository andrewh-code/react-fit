import React, { Fragment } from 'react'
import BMIHistorical from './BMIHistorical.js';
import BPHistorical from './BPHistorical.js';
import BMIAverage from './CardSummary/BMIAverage.js';
import BPAverage from './CardSummary/BPAverage.js';
import HRAverage from './CardSummary/HRAverage.js';
import HRHistorical from './HRHistorical.js';

function Historical() {
    return (
        <Fragment>
            <div style={{width: '100%', overflow: 'hidden', top: '10vh', position: 'fixed'}}>
                <div>
                    <BMIAverage/>
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