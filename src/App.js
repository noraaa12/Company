import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UniversityList from './Component/UniversityList';
import StudentScores from './Component/StudentScores';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UniversityList />} />
        <Route path="/university/:id" element={<StudentScores />} />
      </Routes>
    </Router>
  );
}

export default App;