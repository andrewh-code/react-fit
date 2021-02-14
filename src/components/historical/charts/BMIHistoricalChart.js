import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export class BMIHistoricalChart extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            bmiValues: [],
            dateArray: []
        });

        this.processBMI = this.processBMI.bind(this);

    }
    componentDidMount() {
        let response = [
            {
                "date": "2/10/2021",
                "bmi": 24.1
            },
            {
                "date": "2/9/2021",
                "bmi": 21.1
            },
            {
                "date": "2/8/2021",
                "bmi": 22.1
            },
            {
                "date": "2/7/2021",
                "bmi": 24.1
            },
            {
                "date": "2/6/2021",
                "bmi": 23.1
            },
        ]

        this.processBMI(response);
    }

    processBMI(data) {
        var bmiArray = data.map(bmi => bmi.bmi);
        this.setState({
            bmiValues: bmiArray
        })
    }

    processDates(response) {
        var dateArray = response.map(d => d.date)

        this.setState({
            dateValues: dateArray
        })
    }

    render() {

        const { dateArray, bmiValues } = this.state;

        var graphInfo = {
            labels: dateArray,
            fontColor: '#FFFFFF',

            datasets: [
                {
                    label: 'BMI',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: '#966fd6',
                    borderColor: '#966fd6',
                    borderWidth: 3,
                    data: bmiValues,
                    fill: true
                }
            ]
        }

        return (
            <div style={{background: '#333842', borderRadius: '10px'}}>
                <Line
                    data={graphInfo}

                    width={700}
                    height={300}
                    fontColor='#FFFFFF'
                    options={{
                        title: {
                            display: true,
                            text: 'BMI',
                            fontSize: 30,
                            fontColor: '#FFFFFF'
                        },
                        legend: {
                            labels: {
                                fontColor: '#FFFFFF',
                                fontSize: 20
                            },
                            display: true,
                            position: 'bottom'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    fontColor: '#FFFFFF'
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: '#FFFFFF'
                                }
                            }]
                        },
                        animation: {
                            duration: 2000
                        }
                    }}
                />
            </div>
        )
    }
}

export default BMIHistoricalChart
