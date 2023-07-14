import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import QuizShow from './components/quizShow';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < QuizShow  />
  </React.StrictMode>
);


reportWebVitals();
