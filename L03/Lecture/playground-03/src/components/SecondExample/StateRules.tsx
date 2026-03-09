import { useState } from 'react';
import { initialPlan, type Place } from './places';
// Based on https://react.dev/learn/choosing-the-state-structure

// 1. Group related state
function MovingDot() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div
      onPointerMove={e => {
        setX(e.clientX);
        setY(e.clientY);
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${x}px, ${y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}


// 2. Avoid duplication in state
const initialItems = [
  { title: 'Pretzels', id: 0 },
  { title: 'Crispy Seaweed', id: 1 },
  { title: 'Granola Bar', id: 2 },
];

function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  function handleItemChange(id: number, e: React.ChangeEvent<HTMLInputElement>) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input
              value={item.title}
              readOnly
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedItem(item);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked: {selectedItem.title}</p>
    </>
  );
}

// 3. Avoid deep nesting
function PlaceTree({ place }: { place: Place }) {
  return (
    <li>
      {place.title}
      {place.childPlaces.length > 0 && (
        <ol>
          {place.childPlaces.map(child => (
            <PlaceTree key={child.id} place={child} />
          ))}
        </ol>
      )}
    </li>
  );
}

function TravelPlan() {
  const [plan, setPlan] = useState(initialPlan);

  const planets = plan.childPlaces;

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map(place => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}

export function StateRules() {
  return (
    <div style={{ width: '100%' }}>
      <MovingDot />
      {/* <Menu /> */}
      {/* <TravelPlan /> */}
    </div>
  );
}