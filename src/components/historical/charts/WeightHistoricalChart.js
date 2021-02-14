import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export class WeightHistoricalChart extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            dateValues: [],
            weightValues: []
        });
        
        this.processHR = this.processHR.bind(this);
        this.processDates = this.processDates.bind(this);
    }
    
    componentDidMount(){
        // execute api request
        let response = [
            {
                "date": "2/10/2021",
                "hr": 150,
            },
            {
                "date": "2/9/2021",
                "hr": 151,
            },
            {
                "date": "2/8/2021",
                "hr": 152,
            },
            {
                "date": "2/7/2021",
                "hr": 153,
            },
            {
                "date": "2/6/2021",
                "hr": 154,
            },
            {
                "date": "2/5/2021",
                "hr": 156,
            },
            {
                "date": "2/4/2021",
                "hr": 154,
            },
            {
                "date": "2/3/2021",
                "hr": 153,
            },
            {
                "date": "2/2/2021",
                "hr": 152,
            },
            {
                "date": "2/1/2021",
                "hr": 150,
            }
        ];
        this.processHR(response);
        this.processDates(response);
        
    }

    // process systolic data for array
    processHR(response) {
        var weightArray = response.map(hr => hr.hr);
        this.setState({
            weightValues: weightArray
        });
    }

    processDates(response) {
        var dateArray = response.map(hr => hr.date)

        this.setState({
            dateValues: dateArray
        })
    }

    render() {

        const { dateValues, weightValues } = this.state;

        var graphInfo = {
            labels: dateValues,
            fontColor: '#FFFFFF',

            datasets: [
              {
                label: 'Weight',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#966fd6',
                borderColor: '#966fd6',
                borderWidth: 3,
                data: weightValues,
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
                            text: 'Weight',
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

export default WeightHistoricalChart
