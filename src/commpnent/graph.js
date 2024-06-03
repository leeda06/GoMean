import React from 'react';

const BarGraph = ({ values }) => {
  // Define the legend items
  const legendItems = [
    { category: '건강', color: '연두색' },
    { category: '금전', color: '노랑색' },
    { category: '개인', color: '흰색' },
    { category: '인간관계', color: '분홍색' },
    { category: '취업', color: '보라색' },
    { category: '학업', color: '파란색' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      {/* Bar Graph */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '50vw' }}>
        {values.map((value, index) => (
          <div key={index} style={{ margin: '0 10px', position: 'relative', transform: 'rotate(180deg)' }}>
            {/* Bar */}
            <div style={{ backgroundColor: 'lightgray', width: '5vw', height: `${value}px`, position: 'relative', transform: 'rotate(180deg)' }}>
              {/* Image */}
              <img src={`image-${index}.png`} alt={`Image ${index}`} style={{ position: 'absolute', bottom: `${value}px`, left: '50%', transform: 'translateX(-50%)' }} />
            </div>
          </div>
        ))}
      </div>
      {/* Legend */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {legendItems.map((item, index) => (
          <span key={index} style={{ marginRight: '20px', color: item.color }}>{item.category}</span>
        ))}
      </div>
    </div>
  );
};

// Example usage
const values = [80, 120, 60, 90, 150, 100]; // Example values for the bars

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <BarGraph values={values} />
      </div>
    </div>
  );
};

export default App;
