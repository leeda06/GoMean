import React from 'react';
import "../css/graph.css"

import Sub_green from '../img/Substract_green.png';
import Sub_yellow from '../img/Substract_yellow.png';
import Sub_white from '../img/Substract_white.png';
import Sub_pink from '../img/Substract_pink.png';
import Sub_purple from '../img/Substract_purple.png';
import Sub_blue from '../img/Substract_blue.png';

const BarGraph = ({ values }) => {
  // Define the legend items
  const legendItems = [
    { category: '건강', color: '연두색', image: Sub_green, className: 'green' },
    { category: '금전', color: '노랑색', image: Sub_yellow, className: 'yellow' },
    { category: '개인', color: '흰색', image: Sub_white, className: 'white' },
    { category: '인간관계', color: '분홍색', image: Sub_pink, className: 'pink' },
    { category: '취업', color: '보라색', image: Sub_purple, className: 'purple' },
    { category: '학업', color: '파란색', image: Sub_blue, className: 'blue' },
  ];

  // Find the maximum value in the array
  const maxValue = Math.max(...values);

  return (
    <div className="bar-graph-container">
      {/* Bar Graph */}
      <div className="bar-container">
        {values.map((value, index) => (
          <div key={index} className={`bar-item`}>
            {/* Bar */}
            <div className={`bar ${legendItems[index].className}`} style={{ height: `${(value / maxValue) * 50}vh` }}>
              {/* Image */}
              <img src={legendItems[index].image} alt={`Image ${index}`} style={{ bottom: `${(value / maxValue) * 51}vh` }} className="bar-image" />
            </div>
          </div>
        ))}
      </div>
      {/* Legend */}
      <div className="legend-container">
        {legendItems.map((item, index) => (
          <span key={index} className="legend-item" style={{ color: item.color }}>{item.category} : {item.color}</span>
        ))}
      </div>
    </div>
  );
};

// Example usage
const values = [80, 120, 60, 90, 150, 100]; // Example values for the bars

const App = () => {
  return (
    <div className="app-container">
      <div className="graph-container">
        <BarGraph values={values} />
      </div>
      
      
      <nav>
        <div className="Button-back">
          <button className="slide-btn Home-btn">홈</button>
          <button className="slide-btn Trash-btn">쓰레기 보관함</button>
          <button className="slide-btn Statistics-btn">통계</button>
        </div>
      </nav>
    </div>
  );
};

export default App;
