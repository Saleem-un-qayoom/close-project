import { useState } from 'react';
import './App.css';

const initialState = {
  selectedItem: [],
};

function App() {
  const [{ selectedItem }, setState] = useState(initialState);

  const addItem = item => {
    const indexOfItem = selectedItem.indexOf(item.name);

    if (indexOfItem !== -1) {
      const arr = selectedItem;
      arr.splice(indexOfItem, 1);
      setState(prevData => ({
        ...prevData,
        selectedItem: arr,
      }));
    } else {
      setState(prevData => ({
        ...prevData,
        selectedItem: [...selectedItem, item.name],
      }));
    }
  };

  return (
    <>
      {!!selectedItem.length && (
        <div className="navbar">
          {selectedItem.map((item, index) => (
            <div key={index} className="flex items-center ">
              <span className="mr-1">{index + 1}.</span>
              <p className="navbar-item">{`${item}`}</p>
            </div>
          ))}
        </div>
      )}
      <ul className="List">
        {items.map(item => (
          <li
            key={item.name}
            onClick={() => addItem(item)}
            className={`List__item List__item--${item.color}`}
          >
            {selectedItem.indexOf(item.name) !== -1 && (
              <span className="List__item--selected">
                {selectedItem.indexOf(item.name) + 1}
              </span>
            )}
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = [
  'navy',
  'blue',
  'aqua',
  'teal',
  'olive',
  'green',
  'lime',
  'yellow',
  'orange',
  'red',
  'maroon',
  'fuchsia',
  'purple',
  'silver',
  'gray',
  'black',
];
const fruits = [
  'apple',
  'banana',
  'watermelon',
  'orange',
  'peach',
  'tangerine',
  'pear',
  'kiwi',
  'mango',
  'pineapple',
];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

export default App;
