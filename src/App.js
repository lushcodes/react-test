import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
// This imports the Header.js file in the components folder into your App.js file

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Playing Football',
    day: 'March 8th at 12:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Making Web Apps',
    day: 'September 21st at 4:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
  },
  {
    id: 4,
    text: 'Food Shopping Again',
    day: 'Feb 6th at 7:30pm',
    reminder: false, 
  }])
  return (
    <div className='container'> 
      <Header /> {/* You then need to declare the Header above like this */}
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
