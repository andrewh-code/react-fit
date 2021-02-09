import React, { Fragment } from 'react'
import '../App.css';

export default function BPInfo() {

    var hLine = (color) => ({
        widtd: '80%',
        height: '15px',
        borderRadius: '25px',
        background: `${color}`,
        margin: 'auto'
    });


    return (
        <Fragment>
            <div className="container">
                
            <table>
                <tbody>

                
                <tr>
                    <th>Colour</th>
                    <th>Type</th>
                    <th>Systolic</th>
                    <th>Diastolic</th>
                </tr>
                <tr>
                    <td>
                        <div style={hLine('#decef2')}></div>
                    </td>
                    <td>Hypotension</td>
                    <td>&lt;90</td>
                    <td>&lt;60</td>

                </tr>
                <tr>
                    <td>
                        <div style={hLine('#cdb5eb')}></div>
                    </td>
                    <td>Normal</td>
                    <td>90-120</td>
                    <td>61-80</td>
                </tr>
                <tr>
                    <td>
                        <div style={hLine('#bb9ee4')}></div>
                    </td>
                    <td>Prehypertension</td>
                    <td>121-140</td>
                    <td>81-90</td>
                    
                </tr>
                <tr>
                    <td>
                        <div style={hLine('#a986dd')}></div>
                    </td>
                    <td>Stage 1 Hypertension</td>
                    <td>141-160</td>
                    <td>91-100</td>
                    
                </tr>
                <tr>
                    <td>
                        <div style={hLine('#966fd6')}></div>
                    </td>
                    <td>Stage 2 Hypertension</td>
                    <td>&gt;160</td>
                    <td>&gt;100</td>
                    
                </tr>
                </tbody>
            </table>
            </div>
        </Fragment>
        
    )
}
