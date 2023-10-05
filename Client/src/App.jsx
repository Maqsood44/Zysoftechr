import React, { useEffect, useState } from 'react';
import axios from "axios"
import FileUpload from './FileUpload';
export const routePath = "localhost:3000/"
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillDelete } from "react-icons/ai"



function App() {
  const [csvData, setCsvData] = useState([]);
  const [csvFile, setCsvFile] = useState([]);



  const handleFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target.result;
      const lines = result.split('\n');
      const data = [];

      for (let i = 0; i < lines.length; i++) {
        const row = lines[i].split(',');
        data.push(row);
      }

      setCsvData(data);

  
    };

    reader.onerror = (event) => {
      console.error('Error reading file:', event.target.error);
    };

    reader.readAsText(file);

      axios.post(`http://localhost:3000/api/upload`, csvData)
      .then((json) => { json.message })
      .catch((err) => { err.message })


  };

 
  


  return (
    <div className="App ">
      <h1 className='text-center'>CSV File Reader</h1>
      <div className='text-center'>
        {/* <FileUpload handleFileUpload={handleFileUpload} /> */}
        <input className="form-control" onChange={(e) => setCsvFile(e.target.files[0])} type="file" id="formFile" />
        <button onClick={() => {handleFileUpload(csvFile)}}>Upload CSV</button>
      </div>
      <div className='bg-success container'>
        {csvData.length > 0 && (
          <table className='bg-white border 1' style={{ width: "100%" }}>
            <thead>
              <tr>
                <th className='bold text-danger text-center px-4 border-4'>Roll No.</th>
                <th className='bold text-danger text-center px-4 border-4'>Name</th>
                <th className='bold text-danger text-center px-4 border-4'>Percentage</th>
                <th className='bold text-danger text-center px-4 border-4'>Marks</th>
                <th className='bold text-danger text-center px-4 border-4'>
                </th>
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, rowIndex) => (
                <tr className='boder-1' key={rowIndex}>

                  {row.map((cell, colIndex) => (
                    <td className='text-center' key={colIndex}>{cell}</td>
                  ))}

                      {/* <AiFillDelete className='text-danger' />  */}


                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
