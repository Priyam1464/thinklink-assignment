import React from 'react';
import {Line,defaults} from 'react-chartjs-2';


const state = {
  labels: ['MON', 'TUE', 'WED',
           'THU', 'FRI','SAT','SUN'],
  datasets: [
    {
      fill: false,
      lineTension: 0,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'green',
      borderWidth: 2,
      data: [1000, 7500, 8500,5000 , 10000,50000]
    }
  ]
}

export default function LineChart() {
    return (
      <div className="chart-container">
          <div className="header-style"><b>Total Sales overview</b></div>
          <div className="font-style">7-13 Aug,2020</div>
          <p className="sales-style">$74,729.00</p>
          <div id="line-chart"> 
        <Line 
          
          data={state}
          options={{
              scaleLabel:
            function(label){return  ' $' + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");},
           tooltips: {
              enabled: false
           },
           plugins: {
            legend: {
            display: false,
            },
            },
          }}
        /></div>
      </div>
    );
}
