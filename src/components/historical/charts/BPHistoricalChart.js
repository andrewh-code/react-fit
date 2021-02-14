import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export class BPHistoricalChart extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            dateValues: [],
            sysValues: []
        });
        
        this.processSystolic = this.processSystolic.bind(this);
        this.processDates = this.processDates.bind(this);
    }
    
    componentDidMount(){
        // execute api request
        let response = [
            {
                "date": "2/10/2021",
                "systolic": 80,
                "diastolic": 80,
                "heartRate": 66
            },
            {
                "date": "2/9/2021",
                "systolic": 90,
                "diastolic": 80,
                "heartRate": 66
            },
            {
                "date": "2/8/2021",
                "systolic": 100,
                "diastolic": 80,
                "heartRate": 66
            },
            {
                "date": "2/7/2021",
                "systolic": 112,
                "diastolic": 80,
                "heartRate": 66
            },
            {
                "date": "2/6/2021",
                "systolic": 120,
                "diastolic": 80,
                "heartRate": 66
            },
            {
                "date": "2/5/2021",
                "systolic": 130,
                "diastolic": 80,
                "heartRate": 66
            },
            {
                "date": "2/4/2021",
                "systolic": 140,
                "diastolic": 80,
                "heartRate": 66
            },
            {
                "date": "2/3/2021",
                "systolic": 145,
                "diastolic": 80,
                "heartRate": 66
            },
            {
                "date": "2/2/2021",
                "systolic": 145,
                "diastolic": 80,
                "heartRate": 66
            },
            {
                "date": "2/1/2021",
                "systolic": 150,
                "diastolic": 80,
                "heartRate": 66
            }
        ];
        this.processSystolic(response);
        this.processDates(response);
    }

    // process systolic data for array
    processSystolic(response) {
        var sysArray = response.map(sys => sys.systolic);
        this.setState({
            sysValues: sysArray
        });
    }

    processDates(response) {
        var dateArray = response.map(d => d.date)

        this.setState({
            dateValues: dateArray
        })
    }

    render() {

        const { dateValues, sysValues } = this.state;
        var diaValues = [80,90,90,70,90,100,80,70, 60, 100]

        var graphInfo = {
            labels: dateValues,
            fontColor: '#FFFFFF',

            datasets: [
              {
                label: 'Systolic',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#966fd6',
                borderColor: '#966fd6',
                borderWidth: 3,
                data: sysValues,
              },
              {
                label: 'Diastolic',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#FFFFFF',
                borderColor: '#FFFFFF',
                borderWidth: 3,
                data: diaValues,
              }
            ]
          }


        return (
            <div style={{background: '#333842', borderRadius: '10px'}}>
                <Bar
                    data={graphInfo}

                    width={700}
                    height={300}
                    fontColor='#FFFFFF'
                    options={{
                        title: {
                            display: true,
                            text: 'Blood Pressure',
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

export default BPHistoricalChart
