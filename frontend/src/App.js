import "./App.css";
import React, { useState } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const refreshData = () => {
    setRefresh(!refresh);
    setSelectedStudent(null);
  };

  return (
    <div>
      <h1>Student Management System</h1>

      <AddStudent 
        selectedStudent={selectedStudent} 
        refresh={refreshData} 
      />

      <StudentList 
        onEdit={setSelectedStudent} 
        refresh={refresh}
      />
    </div>
  );
}

export default App;