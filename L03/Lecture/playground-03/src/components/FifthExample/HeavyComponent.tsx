// Simulating a component that is expensive to render
import React, { useRef } from 'react';

const HeavyComponent: React.FC = () => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  // Artificial delay to make re-renders noticeable (blocking main thread briefly)
  const start = performance.now();
  while (performance.now() - start < 500) {
  }

  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '10px 0' }}>
      <h4>I am a HEAVY component</h4>
      <p>I perform expensive calculations on every render.</p>
      <div style={{ fontWeight: 'bold', color: 'red' }}>
        Render Count: {renderCount.current}
      </div>
      <small>Last render: {new Date().toLocaleTimeString()}</small>
    </div>
  );
};

export default HeavyComponent;
