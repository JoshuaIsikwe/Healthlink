import React, { Component } from 'react'
import { BarChart, Bar, ResponsiveContainer } from 'recharts';


export class Chart extends Component {
  render() {
    const data = [
        {
          name: 'Monday',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Tuesday',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Wednesday',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Thursday',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Friday',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Saturday',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Sunday',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    

    return (
      <div>
            <ResponsiveContainer width="100%" height="100%">
    <BarChart width={150} height={40} data={data}>
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
      </div>
    )
  }
}

export default Chart
