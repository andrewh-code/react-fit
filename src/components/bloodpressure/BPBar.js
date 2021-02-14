import React, { useState, useEffect, useRef, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


// bootstrap doesn't work...wtf
// figure out how to calculate percentBP before render
// https://encycolorpedia.com/efe6f9
export default function BPBar(props) {
    const { completed, bp} = props;
    // get value of previous state
    var[percentBP, setPercentBP] = useState(0);
    var[bpMsg, setBpMsg] = useState("");
    var[bpOffset, setBpOffset] = useState(0);

    const prevPercentBPRef = useRef();

    useEffect(() =>{
        prevPercentBPRef.current = percentBP;
        setPercentBP(calculatePercentBP(bp)[0]);
        setBpMsg(calculatePercentBP(bp)[1]);
        setBpOffset(parseInt(calculatePercentBP(bp)[0]) + 1);
    }, [props]);
    
    const prevPercentBP = prevPercentBPRef.current;
    const calculatePercentBP = (bp) => {
        
        var result = 0;
        var msg = "";
        var output = [[result],[msg]];

        // can turn this into object
        if (bp <= 90){
            result = Math.floor(bp/90 * 20);
            msg = "hypotension";
        } else if (bp > 90 && bp <= 120){
            result = Math.floor(bp/120 * 40);
            msg = "normal range";
        } else if (bp > 120 && bp <= 140){
            result = Math.floor(bp/140 * 60);
            msg = "prehypertension";
        } else if (bp > 140 && bp <= 160){
            result = Math.floor(bp/160 * 80);
            msg = "stage 1 hypertension";
        } else if (bp > 160 && bp < 200){
            result = Math.floor(bp/200 * 100);
            msg = "stage 2 hypertension";
        }
        else {
            result = 100;
            msg = "stage 2 hypertension";
        }
        output = [[result],[msg]];

        return output;
    }

    const containerStyles = {
        height: 50,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 25,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#FFFFFF',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    var categoryStyles = (color) => ({
        height: '100%',
        width: `20%`,
        float: 'left',
        backgroundColor: `${color}`,
    });

    var categoryStylesLeft = (color) => ({
        height: '100%',
        width: `20%`,
        float: 'left',
        borderRadius: '25px 0px 0px 25px',
        backgroundColor: `${color}`,
    });
    var categoryStylesRight = (color) => ({
        height: '100%',
        width: `20%`,
        float: 'left',
        borderRadius: '0px 25px 25px 0px',
        backgroundColor: `${color}`,
    });
    
    
    var divisionStyles = {
        width: '20%',
        height: '100%',
        fontSize: '0.5em',
        float: 'left',
        textAlign: 'right'
    }

    // var sliderStyles = (width) => ({
    //     height: '100%',
    //     fontSize: '0.75em',
    //     position: 'left',
    //     width: `${width}%`
    // })

    // initial colors
    // var blue = '#96cafd';
    // var green = '#77dd77';
    // var yellow = '#fdfd96';
    // var orange = '#ffb347';
    // var red = '#c23b22';

    // css dark mode theme?
    // f8f5fc
    // var great = '#decef2';
    // var good = '#cdb5eb ';
    // var ok = '#bb9ee4';
    // var bad = '#a986dd';
    // var terrible = '#966fd6';

    return (



        <Fragment>
            <div style={{width: '80%'}}>
                <div className="slider" style={{width: `${bpOffset}%`, textAlign: 'right'}}>
                    <div>
                        <p style={{fontWeight: 'bold', marginBottom:0}}>{bp}</p>
                    </div>
                </div>
                <div className="slider" style={{width: `${percentBP}%`, textAlign: 'right'}}>
                    <div>
                        <FontAwesomeIcon icon={faAngleDoubleDown} size="xs" style={{marginTop:0}}></FontAwesomeIcon>
                    </div>
                </div>
                <div className="bp-bar" style={containerStyles}>
                    <div className="bp-low" style={categoryStylesLeft('#decef2')}></div>
                    <div className="bp-low" style={categoryStyles('#cdb5eb')}></div>
                    <div className="bp-med" style={categoryStyles('#bb9ee4')}></div>
                    <div className="bp-med" style={categoryStyles('#a986dd')}></div>
                    <div className="bp-high" style={categoryStylesRight('#966fd6')}></div>
                </div>
                <div className="bp-division">
                    <div style={divisionStyles}><p style={{fontSize: '1.5em'}}>90</p></div>
                    <div style={divisionStyles}><p style={{fontSize: '1.5em'}}>120</p></div>
                    <div style={divisionStyles}><p style={{fontSize: '1.5em'}}>140</p></div>
                    <div style={divisionStyles}><p style={{fontSize: '1.5em'}}>160</p></div>
                    <div style={divisionStyles}><p style={{fontSize: '1.5em'}}>200</p></div>
                </div>
                <div style={{height: '100px'}}>
                    { bp != 0 ? <p style={{margin: "1em"}}>You are in <b>{bpMsg}</b> range</p> : <p style={{margin: "1em"}}></p>}
                </div>
            </div>
            
        </Fragment>
    )
}

