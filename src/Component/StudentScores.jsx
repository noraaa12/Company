/* import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { universities } from './data';
const StudentScores = () => {
  const { id } = useParams();
  const university = universities.find((uni) => uni.id === parseInt(id));

  return (
    <div>
      <h1>Scores for {university.name}</h1>
      <ul>
        {university.students.map((student, index) => (
          <li key={index}>{student.name}: {student.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentScores;*/
import React from 'react';
import { useParams } from 'react-router-dom';
import { universities } from './data';

const StudentScores = () => {
  const { id } = useParams();
  const university = universities.find((uni) => uni.id === parseInt(id));

  if (!university) {
    return <h2>University not found</h2>;
  }

  return (
    <div>
      <h1>Scores for {university.name}</h1>
      <ul>
        {university.students.map((student, index) => (
          <li key={index}>{student.name}: {student.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentScores;