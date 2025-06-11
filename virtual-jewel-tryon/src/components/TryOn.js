import React from 'react';

function TryOnFrame() {
  const openHandRingTryOn = () => {
    window.open('./Hand Ring Try On.html', '_blank');
    // or use navigation if routing is set up
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <button
        onClick={openHandRingTryOn}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
        }}
      >
        👋 Try On Hand Ring
      </button>

      <iframe
        src="./TryOn.html"
        title="Virtual Jewelry Try-On"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}

export default TryOnFrame;

































