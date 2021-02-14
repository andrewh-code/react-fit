import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export class HRHistoricalChart extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            dateValues: [],
            hrValues: []
        });
        
        this.processHR = this.processHR.bind(this);
    }
    
    componentDidMount(){
        // execute api request
        let response = [
            {
                "date": "2/10/2021",
                "hr": 66,
            },
            {
                "date": "2/9/2021",
                "hr": 66,
            },
            {
                "date": "2/8/2021",
                "hr": 65,
            },
            {
                "date": "2/7/2021",
                "hr": 64,
            },
            {
                "date": "2/6/2021",
                "hr": 68,
            },
            {
                "date": "2/5/2021",
                "hr": 80,
            },
            {
                "date": "2/4/2021",
                "hr": 61,
            },
            {
                "date": "2/3/2021",
                "hr": 59,
            },
            {
                "date": "2/2/2021",
                "hr": 58,
            },
            {
                "date": "2/1/2021",
                "hr": 55,
            }
        ];
        this.processHR(response);
        this.processDates(response);
        
    }

    // process systolic data for array
    processHR(response) {
        var hrArray = response.map(hr => hr.hr);
        this.setState({
            hrValues: hrArray
        });
    }

    processDates(response) {
        var dateArray = response.map(hr => hr.date)

        this.setState({
            dateValues: dateArray
        })
    }

    render() {

        const { dateValues, hrValues } = this.state;

        var graphInfo = {
            labels: dateValues,
            fontColor: '#FFFFFF',

            datasets: [
              {
                label: 'Heart Rate',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#966fd6',
                borderColor: '#966fd6',
                borderWidth: 3,
                data: hrValues,
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
                            text: 'Heart Rate',
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
                        }
                    }}
                />
            </div>
        )
    }
}

export default HRHistoricalChart
