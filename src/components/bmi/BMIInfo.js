import React, {Fragment} from 'react'

export default function BMIInfo() {
    
    
    const BMI_NORMAL_LOWER=18.5;
    const BMI_NORMAL_UPPER=24.9;
    const BMI_OVERWEIGHT_LOWER=25;
    const BMI_OVERWEIGHT_UPPER=29.9;
    const BMI_OBESE=30;

    return (
        <Fragment>
            <table>
                <tbody>
                    <tr>
                        <th>Category</th>
                        <th></th>
                        <th>BMI Value</th>
                    </tr>
                    <tr>
                        <td>
                            Underweight
                        </td>
                        <td>less than</td>
                        <td>{BMI_NORMAL_LOWER}</td>
                    </tr>
                    <tr>
                        <td>
                            Normal
                        </td>
                        <td> between</td>
                        <td>{BMI_NORMAL_LOWER} - {BMI_NORMAL_UPPER}</td>
                    </tr>
                    <tr>
                        <td>
                            Overweight
                        </td>
                        <td> between</td>
                        <td>{BMI_OVERWEIGHT_LOWER} - {BMI_OVERWEIGHT_UPPER}</td>
                    </tr>
                    <tr>
                        <td>
                            Obese
                        </td>
                        <td>more than</td>
                        <td>{BMI_OBESE}</td>
                    </tr>

                </tbody>
            </table>
        </Fragment>
    )
}
