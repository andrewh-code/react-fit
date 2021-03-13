import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import './NavigationBar.css';


export default function NavigationBar() {

    const nbStyle = {
        fontSize: '1em',
        justifyContent: 'space-between',
        backgroundColor: '#282c34',
        width: '100%',
        display: 'flex',
        float: 'right'
    }

    const ulStyle = {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        float: 'right'
    }

    return (
            <div className='navigation-bar'>
                <h1>React Fit</h1>
                 <ul>
                    <li>
                        <Link to='/react-fit/bmi'>BMI</Link>
                    </li>
                    <li>
                        <Link to='/react-fit/bp'>Blood Pressure</Link>        
                    </li>
                    <li>
                        <Link to='/react-fit/historical'>Historical</Link>
                    </li>
                </ul>
            </div>
    )
}
