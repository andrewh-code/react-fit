import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faWeight, faTachometerAlt, faPercentage } from '@fortawesome/free-solid-svg-icons';

function StatCard(props) {

    const {
        title,
        value,
        units,
        faIconComponent,
        date
    } = props

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

    var bpStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        display: 'inline'
    }
    
    var icon = "faHeartbeat"

    return (
        <div style={cardStyle}>
            <div>
                <h1>{title}</h1>
            </div>

            <FontAwesomeIcon icon={faIconComponent} size="2x"></FontAwesomeIcon>
            <span style={{ marginRight: '1em' }}></span>
            <h1 style={bpStyle}>{value}</h1><p style={{ fontSize: '0.5em', display: 'inline' }}> {units}</p>
            <p style={{ fontSize: '0.75em', color: '#c2c2c2', marginTop: '0.2em' }}>{date}</p>
        </div>
    )
}

export default StatCard;