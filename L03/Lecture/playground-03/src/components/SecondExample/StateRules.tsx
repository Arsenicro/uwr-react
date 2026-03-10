import { useState } from 'react';
import { initialPlan, type Place } from './betterPlaces';
// Based on https://react.dev/learn/choosing-the-state-structure

// 1. Group related state
function MovingDot() {
  /* const [x, setX] = useState(0);
  const [y, setY] = useState(0); */

  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
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
        transform: `translate(${position.x}px, ${position.y}px)`,
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
  //const [selectedItem, setSelectedItem] = useState(items[0]);
  const [selectedItemId, setSelectedItemId] = useState(items[0].id);

  const selectedItem = items.find(item => item.id === selectedItemId)!;

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
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedItemId(item.id);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked: {selectedItem.title}</p>
    </>
  );
}

// 3. Avoid deep nesting
function PlaceTree({ listOfPlaces, placeId }: { listOfPlaces: Record<number, Place>; placeId: number }) {
  const place = listOfPlaces[placeId];
  return (
    <li>
      {place.title}
      {place.childIds.length > 0 && (
        <ol>
          {place.childIds.map(childId => (
            <PlaceTree key={childId} listOfPlaces={listOfPlaces} placeId={childId} />
          ))}
        </ol>
      )}
    </li>
  );
}

function TravelPlan() {
  const [plan, setPlan] = useState(initialPlan);

  const planets = plan[0].childIds.map(id => plan[id]);

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map(place => (
          <PlaceTree key={place.id} listOfPlaces={Object.values(plan)} placeId={place.id} />
        ))}
      </ol>
    </>
  );
}

export function StateRules() {
  return (
    <div style={{ width: '100%' }}>
      {/* <MovingDot /> */}
      {/* <Menu /> */}
      <TravelPlan />
    </div>
  );
}