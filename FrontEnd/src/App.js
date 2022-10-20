import axios from "axios";
import { useState } from 'react';
import ResponsiveBreakpointsExample from "./tabel/Index";
import './App.css';

function App() {
  const [data, setData] = useState([]);



  return (
    <div className="App">
<ResponsiveBreakpointsExample/>
      <table>
        {data.map((ele, key) => {
          return (
            <tbody key={key}>
              <td>{ }</td>
              <td>{ }</td>
              <td>{ }</td>
            </tbody>
          )
        })}
      </table>
    </div>
  );
}

export default App;
