import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

export class BMIDailyInput extends Component {
    
    
    render() {
        return (
            <div className="container">
                <form>
                    
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMale} size="10x" />
                        <FontAwesomeIcon icon={faFemale} size="10x" />
                    </div>
                </form>

            </div>
        )
    }
}

export default BMIDailyInput
