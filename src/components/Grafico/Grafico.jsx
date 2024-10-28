
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Grafico() {
 
    return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="descricao" />
          <YAxis />
          <Tooltip />
          <Line type="monotone"
                datakey="descricao"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
        </LineChart>
    );
  }

