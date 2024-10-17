/* import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { universities } from './data';

const UniversityList = () => {
  return (
    <div>
      <h1>University List</h1>
      <ul>
        {universities.map((university) => (
          <li key={university.id}>
            <Link to={`/university/${university.id}`}>
              {university.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityList;*/
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { universities } from './data';

const UniversityList = () => {
  return (
    <div>
      <h1>University List</h1>
      <ul>
        {universities.map((university) => (
          <li key={university.id}>
            <Link to={`/university/${university.id}`}>
              {university.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityList;
