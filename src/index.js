import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Record from './commpnent/record';
import Graph from './commpnent/graph';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Record />
    {/* <Graph /> */}
      <nav>
        <div className="Button-back">
          <button className="slide-btn Home-btn">홈</button>
          <button className="slide-btn Trash-btn">쓰레기 보관함</button>
          <button className="slide-btn Statistics-btn">통계</button>
        </div>
      </nav>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
