import React from 'react'

function HRAverage() {
    var hrAve = 66;

    var bpStyle = {
        fontSize: '2em',
        fontWeight: 'bold'
    }

    var cardStyle = {
        border: '1px solid #FFFFFF',
        maxWidth: '30%',
        height: 'auto',
        display: 'inline-block',
        margin: '0 auto'
    }
    return (
        <div style={cardStyle}>
            <div>
                <h1>Heart Rate</h1>
            </div>
            <h1 style={bpStyle}>{hrAve}</h1>
        </div>
    )
}

export default HRAverage
