import React from 'react';

function HardwareSet({ setName, available, capacity, onCheckIn, onCheckOut }) {
  const [qty, setQty] = React.useState(1);

  const handleCheckIn = () => {
    if (qty > 0) {
      onCheckIn(setName, qty);
    }
  };

  const handleCheckOut = () => {
    if (qty > 0 && qty <= available) {
      onCheckOut(setName, qty);
    } else {
      alert('Not enough available!');
    }
  };

  return (
    <div style={{
      border: '1px solid #999',
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: 'white'
    }}>
      <strong>{setName}</strong>
      <p>Available: {available} / {capacity}</p>
      
      <div>
        <label>Qty: </label>
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(parseInt(e.target.value) || 1)}
          style={{ width: '60px', marginRight: '10px' }}
        />
        
        <button 
          onClick={handleCheckIn}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '5px 10px',
            marginRight: '5px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Check In
        </button>
        
        <button 
          onClick={handleCheckOut}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '5px 10px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}

export default HardwareSet;
