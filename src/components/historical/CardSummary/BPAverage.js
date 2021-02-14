import React from 'react'

function BPAverage() {
    
    var sysAve = 120
    var diaAve = 80
    
    var bpStyle = {
        fontSize: '2em',
        fontWeight: 'bold'
    }

    var cardStyle = {
        border: '1px solid #FFFFFF',
        maxWidth: '30%',
        maxHeight: '100%',
        display: 'inline-block',
        margin: '0 auto'

    }

    return (
        <div style={cardStyle}>
            <div>
                <h1>Blood Pressure</h1>
            </div>
            <div>
                <p style={bpStyle}>{sysAve}/{diaAve}</p>
            </div>
        </div>
    )
}

export default BPAverage
