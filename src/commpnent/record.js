import React, { useState, useEffect, useRef } from 'react';
import '../css/recode.css';
import Sub_green_off from '../img/Substract_green_off.png';
import Sub_yellow_off from '../img/Substract_yellow_off.png';
import Sub_white_off from '../img/Substract_white_off.png';
import Sub_pink_off from '../img/Substract_pink_off.png';
import Sub_purple_off from '../img/Substract_purple_off.png';
import Sub_blue_off from '../img/Substract_blue_off.png';

import Sub_green from '../img/Substract_green.png';
import Sub_yellow from '../img/Substract_yellow.png';
import Sub_white from '../img/Substract_white.png';
import Sub_pink from '../img/Substract_pink.png';
import Sub_purple from '../img/Substract_purple.png';
import Sub_blue from '../img/Substract_blue.png';

const App = () => {
  const [selected, setSelected] = useState({ category: '건강', color: 'green' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTextBox, setSelectedTextBox] = useState(null);
  const textBoxesRef = useRef([]);
  const containerRef = useRef(null);
  // 임시 데이터
  const categoryData = {
    '건강': { color: 'green', images: [Sub_green, Sub_green_off] },
    '금전': { color: 'yellow', images: [Sub_yellow, Sub_yellow_off] },
    '개인': { color: 'white', images: [Sub_white, Sub_white_off] },
    '인간관계': { color: 'pink', images: [Sub_pink, Sub_pink_off] },
    '취업': { color: 'purple', images: [Sub_purple, Sub_purple_off] },
    '학업': { color: 'blue', images: [Sub_blue, Sub_blue_off] }
  };
  const textBoxes = {
    '건강': [
      { itle: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" },
      { itle: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" },
      { itle: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" },
      { itle: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" },
      { itle: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" },
      { itle: '저녁으로 뭐먹지', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" }
    ],
    '금전': [
      { itle: 'Name 2.1', name: 'Title 2.1', content: '정말정말 긴 고민 글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', date: "2024.07.07" },
      { itle: '저녁으로 뭐먹지', name: 'Title 2.2', content: 'Text 2.2', date: "2024.07.07" },
      { itle: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다...', date: "2024.07.07" },
      { itle: '저녁으로 뭐먹지', name: 'Title 2.2', content: 'Text 2.2', date: "2024.07.07" },
      { itle: '정말정말 긴 고민제목글 아정말 오늘점심 맛있겠다 저녁도 짱 맛있겠는걸?', name: '김미림', content: '돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다 아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다아 저녁 뭐먹지돈까쓰, 치킨, 피자, 초밥 다 먹고 싶다돈까쓰, 치킨, 피자, 초밥 다 먹ㅇㄹㄹㅇㄹㅇㅇ고 싶다...', date: "2024.07.07" }
    ],
    '개인': [
      { title: 'Name 3.1', name: 'Title 3.1', content: 'Text 3.1', date: "2024.07.07" },
      { title: 'Name 3.2', name: 'Title 3.2', content: 'Text 3.2', date: "2024.07.07" },
      { title: 'Name 3.3', name: 'Title 3.3', content: 'Text 3.3', date: "2024.07.07" }
    ],
    '인간관계': [
      { title: 'Name 4.1', name: 'Title 4.1', content: 'Text 4.1', date: "2024.07.07" },
      { title: 'Name 4.2', name: 'Title 4.2', content: 'Text 4.2', date: "2024.07.07" },
      { title: 'Name 4.3', name: 'Title 4.3', content: 'Text 4.3', date: "2024.07.07" }
    ],
    '취업': [
      { title: 'Name 5.1', name: 'Title 5.1', content: 'Text 5.1', date: "2024.07.07" },
      { title: 'Name 6.2', name: 'Title 6.2', content: 'Text 6.2', date: "2024.07.07" },
      { title: 'Name 6.3', name: 'Title 6.3', content: 'Text 6.3', date: "2024.07.07" },
      { title: 'Name 5.2', name: 'Title 5.2', content: 'Text 5.2', date: "2024.07.07" },
      { title: 'Name 5.3', name: 'Title 5.3', content: 'Text 5.3', date: "2024.07.07" }
    ],
    '학업': [
      { title: 'Name 6.1', name: 'Title 6.1', content: 'Text 6.1', date: "2024.07.07" },
      { title: 'Name 6.2', name: 'Title 6.2', content: 'Text 6.2', date: "2024.07.07" },
      { title: 'Name 6.3', name: 'Title 6.3', content: 'Text 6.3', date: "2024.07.07" },
      { title: 'Name 6.2', name: 'Title 6.2', content: 'Text 6.2', date: "2024.07.07" },
      { title: 'Name 6.3', name: 'Title 6.3', content: 'Text 6.3', date: "2024.07.07" }
    ]
  };

  const categories = Object.keys(textBoxes);

  useEffect(() => {
    const boxes = textBoxesRef.current.filter(Boolean);
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

      if (box) {
        box.style.transform = `translate(${x}px, ${y}px)`;
        columnHeights[column] += box.offsetHeight + 40;
      }
    });

    container.style.height = `${Math.max(...columnHeights)}px`;
  }, [selected]);

  useEffect(() => {
    textBoxesRef.current = [];
  }, [selected]);

  const openModal = (textBox) => {
    setIsModalOpen(true);
    setSelectedTextBox(textBox);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTextBox(null);
  };

  return (
    <div className='main'>
      <div className={`container ${isModalOpen ? 'modal-open' : ''}`}>
        <div className='div'>
          <ul className="list">
            {categories.map(category => {
              const { color, images } = categoryData[category];
              return (
                <li
                  className={`li ${selected.category === category ? color : 'default'}`}
                  key={category}
                  onClick={() => setSelected({ category, color })}
                  style={{
                    alignItems: selected.category === category ? 'center' : 'left',
                    justifyContent: selected.category === category ? 'center' : 'right',
                    flexDirection: selected.category === category ? 'column' : 'row',
                    height: selected.category === category ? '200px' : "fit-content",
                    gap: selected.category === category ? '10px' : ''
                  }}
                >
                  <img src={selected.category === category ? images[0] : images[1]} style={{ width: selected.category === category ? '150px' : '40px', position: selected.category === category ? "static" : "absolute" }} />
                  <div className={`li-id ${selected.category === category ? color : ''}`}>{category}</div>
                </li>
              );
            })}
          </ul>
          <div className="text-boxes" ref={containerRef}>
            {selected.category && textBoxes[selected.category].map(({ id, name, title, content, date }, index) => (
              <div
                key={id}
                className={`text-box ${categoryData[selected.category].color}`}
                ref={el => textBoxesRef.current[index] = el || undefined}
                onClick={() => openModal({ id, name, title, content, date })}
              >
                <div className='title'>{title}</div>
                <div className='name'>{name}</div>
                <div className='text'>{content}</div>
                <div className='date'>{date}</div>
                <img className='img' src={`${categoryData[selected.category].images[0]}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && selectedTextBox && (
        <div className="modal">
          <div className="modal-div modal-content">
            <div className='detail'>
              <div className="title">{selectedTextBox.title}</div>
              <div className="name">{selectedTextBox.name}</div>
              <div className="text">{selectedTextBox.content}</div>
            </div>
            <div className='answer'>
              <div className='respondent'>
                <img className="img"></img>
                <div className="name">곰곰이</div>
              </div>
              <div className="text">곰곰이가 말하는 답변</div>
            </div>
          </div>
          <div className='modal-div modal-comment'>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;