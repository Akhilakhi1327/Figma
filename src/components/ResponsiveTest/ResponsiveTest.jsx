import React, { useState, useEffect } from 'react';
import './ResponsiveTest.css';

function ResponsiveTester() {
  const [viewport, setViewport] = useState('');
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      setWidth(newWidth);
      setHeight(newHeight);
      
      // Determine viewport
      if (newWidth < 576) setViewport('📱 Mobile (<576px)');
      else if (newWidth < 768) setViewport('📱 Large Mobile (576-768px)');
      else if (newWidth < 992) setViewport('📱 Tablet (768-992px)');
      else if (newWidth < 1200) setViewport('💻 Laptop (992-1200px)');
      else setViewport('🖥️ Desktop (1200px+)');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="responsive-tester">
      <div className="tester-header">
        <h3>📱 Responsive Design Tester</h3>
        <button 
          className="close-btn" 
          onClick={() => document.querySelector('.responsive-tester').style.display = 'none'}
        >
          ×
        </button>
      </div>
      
      <div className="tester-info">
        <div className="info-item">
          <span className="label">Viewport:</span>
          <span className="value viewport">{viewport}</span>
        </div>
        <div className="info-item">
          <span className="label">Width:</span>
          <span className="value">{width}px</span>
        </div>
        <div className="info-item">
          <span className="label">Height:</span>
          <span className="value">{height}px</span>
        </div>
        <div className="info-item">
          <span className="label">Aspect Ratio:</span>
          <span className="value">{(width/height).toFixed(2)}</span>
        </div>
      </div>

      <div className="tester-grid">
        <div className="grid-item mobile">
          <div className="device-icon">📱</div>
          <div className="device-name">Mobile</div>
          <div className="device-size">&lt; 576px</div>
          <div className={`status ${width < 576 ? 'active' : ''}`}>
            {width < 576 ? '✓ Active' : '✗'}
          </div>
        </div>
        
        <div className="grid-item tablet">
          <div className="device-icon">📱</div>
          <div className="device-name">Tablet</div>
          <div className="device-size">768-992px</div>
          <div className={`status ${width >= 768 && width < 992 ? 'active' : ''}`}>
            {width >= 768 && width < 992 ? '✓ Active' : '✗'}
          </div>
        </div>
        
        <div className="grid-item laptop">
          <div className="device-icon">💻</div>
          <div className="device-name">Laptop</div>
          <div className="device-size">992-1200px</div>
          <div className={`status ${width >= 992 && width < 1200 ? 'active' : ''}`}>
            {width >= 992 && width < 1200 ? '✓ Active' : '✗'}
          </div>
        </div>
        
        <div className="grid-item desktop">
          <div className="device-icon">🖥️</div>
          <div className="device-name">Desktop</div>
          <div className="device-size">≥ 1200px</div>
          <div className={`status ${width >= 1200 ? 'active' : ''}`}>
            {width >= 1200 ? '✓ Active' : '✗'}
          </div>
        </div>
      </div>

      <div className="tester-breakpoints">
        <h4>Media Queries Active:</h4>
        <div className="breakpoints-list">
          <div className={`breakpoint ${width < 576 ? 'active' : ''}`}>
            <span>@media (max-width: 575px)</span>
            <span>{width < 576 ? '✅' : '❌'}</span>
          </div>
          <div className={`breakpoint ${width >= 576 && width < 768 ? 'active' : ''}`}>
            <span>@media (min-width: 576px)</span>
            <span>{width >= 576 && width < 768 ? '✅' : '❌'}</span>
          </div>
          <div className={`breakpoint ${width >= 768 && width < 992 ? 'active' : ''}`}>
            <span>@media (min-width: 768px)</span>
            <span>{width >= 768 && width < 992 ? '✅' : '❌'}</span>
          </div>
          <div className={`breakpoint ${width >= 992 && width < 1200 ? 'active' : ''}`}>
            <span>@media (min-width: 992px)</span>
            <span>{width >= 992 && width < 1200 ? '✅' : '❌'}</span>
          </div>
          <div className={`breakpoint ${width >= 1200 ? 'active' : ''}`}>
            <span>@media (min-width: 1200px)</span>
            <span>{width >= 1200 ? '✅' : '❌'}</span>
          </div>
        </div>
      </div>
      
      <div className="tester-instructions">
        <h4>How to Test:</h4>
        <ol>
          <li>Resize your browser window</li>
          <li>Watch the viewport info update</li>
          <li>Check which media queries activate</li>
          <li>Verify your layout changes at each breakpoint</li>
        </ol>
      </div>
    </div>
  );
}

export default ResponsiveTest;