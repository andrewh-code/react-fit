import React, { Component, Fragment } from 'react'
import DailyInput from './DailyInput'
import BPInfo from './BPInfo';

export class BloodPressure extends Component {
    render() {
        return (
            <Fragment>
                <DailyInput/>
                <BPInfo/>
            </Fragment>
            
        )
    }
}

export default BloodPressure
