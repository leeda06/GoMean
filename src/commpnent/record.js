import React, { useState, useEffect, useRef } from 'react';
import '../css/recode.css';
import Subtract from '../img/Subtract.png';

const App = () => {
  const [selected, setSelected] = useState('금전');
  const textBoxesRef = useRef([]);
  const containerRef = useRef(null);

  const items = ['건강', '금전', '개인', '인간관계', '취업', '학업'];
  const textBoxes = {
    '건강': [
      { id: 1, title: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...' },
      { id: 2, title: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...' },
      { id: 3, title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...' },
      { id: 4, title: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...' },
      { id: 5, title: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...' },
      { id: 6, title: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...' }
    ],
    '금전': [
      { id: 7, title: 'Name 2.1', name: 'Title 2.1', content: 'Text 2.1' },
      { id: 8, title: 'Name 2.2', name: 'Title 2.2', content: 'Text 2.2' },
      { id: 9, title: 'Name 2.3', name: 'Title 2.3', content: 'Text 2.3' }
    ],
    '개인': [
      { id: 7, title: 'Name 2.1', name: 'Title 2.1', content: 'Text 2.1' },
      { id: 8, title: 'Name 2.2', name: 'Title 2.2', content: 'Text 2.2' },
      { id: 9, title: 'Name 2.3', name: 'Title 2.3', content: 'Text 2.3' }
    ],
    '인간관계': [
      { id: 7, title: 'Name 2.1', name: 'Title 2.1', content: 'Text 2.1' },
      { id: 8, title: 'Name 2.2', name: 'Title 2.2', content: 'Text 2.2' },
      { id: 9, title: 'Name 2.3', name: 'Title 2.3', content: 'Text 2.3' }
    ],
    '취업': [
      { id: 7, title: 'Name 2.1', name: 'Title 2.1', content: 'Text 2.1' },
      { id: 8, title: 'Name 2.2', name: 'Title 2.2', content: 'Text 2.2' },
      { id: 9, title: 'Name 2.3', name: 'Title 2.3', content: 'Text 2.3' }
    ],
    '학업': [
      { id: 7, title: 'Name 2.1', name: 'Title 2.1', content: 'Text 2.1' },
      { id: 8, title: 'Name 2.2', name: 'Title 2.2', content: 'Text 2.2' },
      { id: 9, title: 'Name 2.3', name: 'Title 2.3', content: 'Text 2.3' }
    ]
  };

  useEffect(() => {
    const boxes = textBoxesRef.current.filter(Boolean); // Filter out null refs
    const container = containerRef.current;

    if (!container || boxes.length === 0) return;

    const columns = 3;
    const columnHeights = Array(columns).fill(0);
    const columnWidth = (container.offsetWidth - (columns - 1) * 40) / columns;

    boxes.forEach(box => {
      const minHeight = Math.min(...columnHeights);
      const column = columnHeights.indexOf(minHeight);
      const x = column * (columnWidth + 40);
      const y = minHeight;

      if (box) { // Ensure box is not null
        box.style.transform = `translate(${x}px, ${y}px)`;
        columnHeights[column] += box.offsetHeight + 40;
      }
    });

    container.style.height = `${Math.max(...columnHeights)}px`;
  }, [selected]);

  useEffect(() => {
    textBoxesRef.current = []; // Clear out the previous values
  }, [selected]);
  
  return (
    <div className="container">
      <div className='div'>
        <ul className="list">
          {items.map(item => (
            <li className='li' key={item} onClick={() => setSelected(item)} style={{ alignItems: selected === item ? 'center' : 'left', justifyContent: selected === item ? 'center' : 'right',flexDirection: selected === item ? 'column' : 'row' , height: selected === item ?'200px': "fit-content",gap: selected === item ? '10px' : '',backgroundImage: selected === item ? 'linear-gradient(#403950, #3E3356), linear-gradient(to bottom right, #494358, #888297, #494358, #494358, #494358, #888297, #494358)' : 'linear-gradient(to bottom right, #4F4F4F, #414141), linear-gradient(to bottom right, #565656, #565656, #a0a0a0, #565656, #656565)'}}>
              <img src={Subtract} style={{width: selected === item ? '150px' : '40px', position: selected === item ? "static" : "absolute"}}/>
              <div className='li-id' style={{color: selected === item ? '#B092F6' : '#959595'}}>{item}</div>
            </li>
          ))}
        </ul>
        <div className="text-boxes" ref={containerRef}>
          {selected && textBoxes[selected].map(({ id, name, title, content }, index) => (
            <div key={id} className="text-box" ref={el => textBoxesRef.current[index] = el || undefined}>
              <div className='title'>{title}</div>
              <div className='name'>{name}</div>
              <div className='text'>{content}</div>
              <div className=''></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
