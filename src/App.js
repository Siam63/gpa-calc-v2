import './App.css';
import { useState } from 'react';

function App() {
  const [grades, setGrades] = useState([]);
  const [markReceived, setMarkReceived] = useState(0);
  const [markWeight, setMarkWeight] = useState(0);

  const [total, setTotal] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  
  const [count, setCounter] = useState(1);

  const handleMarkChange = (e) => {
    const value = e.target.value;

    const regex = /^[0-9]*\.?[0-9]*$/;

    if(regex.test(value) || value === ''){
      setMarkReceived(value);
    }
  }

  const handleWeightChange = (e) => {
    const value = e.target.value;

    const regex = /^[0-9]*\.?[0-9]*$/;

    if(regex.test(value) || value === ''){
      setMarkWeight(value);
    }
  }

  const addMark = (markReceived, markWeight) => {
    if(!markReceived && !markWeight){
      alert("Enter a mark and it's weight!");
      return;
    }

    if(!markWeight){
      alert("Enter the mark received!");
      return;
    }

    if(!markReceived){
      alert("Enter a weight for the mark!");
      return;
    }

    const grade = {
      id: count,
      markValue: markReceived,
      weightValue: markWeight
    };

    setGrades(list => [...list, grade]);

    const mark = (markReceived / 100) * markWeight;
    setTotal(total + mark);

    const weight = Number(markWeight);
    setTotalWeight(weight + totalWeight);
    
    setMarkReceived(0);
    setMarkWeight(0);
    setCounter(count + 1);
  }

  return (
    <div className="App">
      <p className="text-center text-3xl">Final Grade Calculator</p>
      <div className="mt-3 text-center justify-center">
        <label className="font-bold text-xl">Assessment {count}</label>

        <div className="mt-5 flex flex-row justify-center text-center">
          <label for="small-input" class="mr-2 mt-2.5 block mb-2 text-sm font-medium text-gray-900 ">Mark Received (%)</label>
          <div className="justify-center">
            <input value ={markReceived} onChange={handleMarkChange} type="text" id="small-input" class="text-center p-2 w-20 text-gray-900 border border-gray-300 rounded-lg "/>
          </div>
        </div>

        <div className="mt-5 flex flex-row justify-center text-center">
          <label for="small-input" class="mr-2 mt-2.5 block mb-2 text-sm font-medium text-gray-900 ">Weight of Mark (%)</label>
          <div className="justify-center">
            <input value={markWeight} onChange={handleWeightChange} type="text" id="small-input" class="text-center p-2 w-20 text-gray-900 border border-gray-300 rounded-lg "/>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <button onClick={() => addMark(markReceived, markWeight)} className="p-2 m-5 border-solid border-2 border-black rounded-lg hover:bg-slate-100 transition-all">Add Mark</button>
          </div>
        </div>

        <h1>
          You currently have a {total}% in the class and this accounts for {totalWeight}% of the class.
        </h1>

      </div>

      <div>
        <ul>
          {grades.map(grade => {
            return(
              <div className="mt-10 flex justify-center">
                <li key={grade.id}>Assessment {grade.id} - Mark Received: {grade.markValue}% - Weight: {grade.weightValue}%</li>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
