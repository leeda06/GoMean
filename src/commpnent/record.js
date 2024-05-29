import React, { useState } from 'react';
import '../css/recode.css';
import Subtract from '../img/Subtract.png'

const App = () => {
    const [selected, setSelected] = useState(null);

    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
    const textBoxes = {
        'Item 1': [
            { id: 1, name: 'Name 1.1', title: 'Title 1.1', content: 'Text 1.1' },
            { id: 2, name: 'Name 1.2', title: 'Title 1.2', content: 'Text 1.2' },
            { id: 3, name: 'Name 1.3', title: 'Title 1.3', content: 'Text 1.3' }
        ],
        'Item 2': [
            { id: 4, name: 'Name 2.1', title: 'Title 2.1', content: 'Text 2.1' },
            { id: 5, name: 'Name 2.2', title: 'Title 2.2', content: 'Text 2.2' },
            { id: 6, name: 'Name 2.3', title: 'Title 2.3', content: 'Text 2.3' }
        ],
        // 나머지 items 데이터 추가
        'Item 3': [
            { id: 7, name: 'Name 3.1', title: 'Title 3.1', content: 'Text 3.1' },
            { id: 8, name: 'Name 3.2', title: 'Title 3.2', content: 'Text 3.2' },
            { id: 9, name: 'Name 3.3', title: 'Title 3.3', content: 'Text 3.3' }
        ],
        'Item 4': [
            { id: 10, name: 'Name 4.1', title: 'Title 4.1', content: 'Text 4.1' },
            { id: 11, name: 'Name 4.2', title: 'Title 4.2', content: 'Text 4.2' },
            { id: 12, name: 'Name 4.3', title: 'Title 4.3', content: 'Text 4.3' }
        ],
        'Item 5': [
            { id: 13, name: 'Name 5.1', title: 'Title 5.1', content: 'Text 5.1', icon: Subtract },
            { id: 14, name: 'Name 5.2', title: 'Title 5.2', content: 'Text 5.2', icon: "" },
            { id: 15, name: 'Name 5.3', title: 'Title 5.3', content: 'Text 5.3', icon: "" }
        ],
        'Item 6': [
            { id: 16, name: 'Name 6.1', title: 'Title 6.1', content: 'Text 6.1' },
            { id: 17, name: 'Name 6.2', title: 'Title 6.2', content: 'Text 6.2' },
            { id: 18, name: 'Name 6.3', title: 'Title 6.3', content: 'Text 6.3Text 6.3Text 6.3' }
        ],
    };

    return (
        <div className="container">
            <ul className="list">
                {items.map(item => (
                    <li key={item} onClick={() => setSelected(item)}>
                        {item}
                    </li>
                ))}
            </ul>
            <div className="text-boxes">
                {selected && textBoxes[selected].map(({ id, name, title, content, icon }) => (
                    <div key={id} className="text-box">
                        <img src={icon} className='icon'></img>
                        <div className='title'>{title}</div>
                        <div className='name'>{name}</div>
                        <div className='text'>{content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
