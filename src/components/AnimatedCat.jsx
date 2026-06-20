import React from 'react';

const AnimatedCat = () => {
  return (
    <div className="w-[100px] h-[118px] md:w-[110px] md:h-[130px]">
      <style>{`
        @keyframes catTailSway {
          0%   { transform: rotate(-8deg);  }
          50%  { transform: rotate(18deg); }
          100% { transform: rotate(-8deg);  }
        }
        @keyframes catEyeBlink {
          0%, 88%, 94%, 100% { transform: scaleY(1); }
          91%               { transform: scaleY(0.05); }
        }
        .cat-tail {
          animation: catTailSway 3.2s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: 50% 5%;
        }
        .cat-eyes {
          animation: catEyeBlink 5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center center;
        }
      `}</style>

      <svg
        viewBox="0 0 200 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* ── TAIL (behind body) ── */}
        <g className="cat-tail">
          <path
            d="M 135 195 C 168 188, 190 160, 182 128 C 175 100, 155 95, 148 112"
            stroke="#1a1a2e"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* tail tip — slightly lighter */}
          <circle cx="148" cy="113" r="10" fill="#2e2e4a" />
        </g>

        {/* ── BODY + HEAD GROUP ── */}
        <g>

          {/* Body */}
          <ellipse cx="105" cy="185" rx="52" ry="48" fill="#1a1a2e" />

          {/* Front paws */}
          <ellipse cx="80"  cy="226" rx="16" ry="9" fill="#1a1a2e" />
          <ellipse cx="130" cy="226" rx="16" ry="9" fill="#1a1a2e" />
          {/* paw toe lines */}
          <line x1="74"  y1="229" x2="74"  y2="233" stroke="#2e2e4a" strokeWidth="2" strokeLinecap="round" />
          <line x1="80"  y1="230" x2="80"  y2="234" stroke="#2e2e4a" strokeWidth="2" strokeLinecap="round" />
          <line x1="86"  y1="229" x2="86"  y2="233" stroke="#2e2e4a" strokeWidth="2" strokeLinecap="round" />
          <line x1="124" y1="229" x2="124" y2="233" stroke="#2e2e4a" strokeWidth="2" strokeLinecap="round" />
          <line x1="130" y1="230" x2="130" y2="234" stroke="#2e2e4a" strokeWidth="2" strokeLinecap="round" />
          <line x1="136" y1="229" x2="136" y2="233" stroke="#2e2e4a" strokeWidth="2" strokeLinecap="round" />

          {/* Neck */}
          <ellipse cx="105" cy="143" rx="32" ry="18" fill="#1a1a2e" />

          {/* Head */}
          <ellipse cx="105" cy="112" rx="44" ry="42" fill="#1a1a2e" />

          {/* Left Ear (outer) */}
          <polygon points="68,90 58,52 90,76" fill="#1a1a2e" />
          {/* Left Ear (inner) */}
          <polygon points="70,86 63,58 86,76" fill="#2e1a2e" />

          {/* Right Ear (outer) */}
          <polygon points="142,90 152,52 120,76" fill="#1a1a2e" />
          {/* Right Ear (inner) */}
          <polygon points="140,86 147,58 124,76" fill="#2e1a2e" />

          {/* ── FACE ── */}

          {/* Eyes — blink wrapper */}
          <g className="cat-eyes">
            {/* Left eye white glow */}
            <ellipse cx="88" cy="110" rx="9"  ry="10" fill="#e8d44d" />
            {/* Left pupil (vertical slit) */}
            <ellipse cx="88" cy="110" rx="3.5" ry="8" fill="#0d0d1a" />
            {/* Left eye shine */}
            <circle  cx="91" cy="106" r="2" fill="white" opacity="0.8" />

            {/* Right eye */}
            <ellipse cx="122" cy="110" rx="9"  ry="10" fill="#e8d44d" />
            <ellipse cx="122" cy="110" rx="3.5" ry="8" fill="#0d0d1a" />
            <circle  cx="125" cy="106" r="2" fill="white" opacity="0.8" />
          </g>

          {/* Nose */}
          <path d="M 101 124 L 109 124 L 105 129 Z" fill="#e879b0" />

          {/* Mouth */}
          <path d="M 105 129 C 100 134, 94 133, 92 131" stroke="#e879b0" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 105 129 C 110 134, 116 133, 118 131" stroke="#e879b0" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Whiskers left */}
          <line x1="90" y1="122" x2="54" y2="118" stroke="#4a4a6a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <line x1="90" y1="126" x2="54" y2="126" stroke="#4a4a6a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <line x1="90" y1="130" x2="56" y2="134" stroke="#4a4a6a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

          {/* Whiskers right */}
          <line x1="120" y1="122" x2="156" y2="118" stroke="#4a4a6a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <line x1="120" y1="126" x2="156" y2="126" stroke="#4a4a6a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <line x1="120" y1="130" x2="154" y2="134" stroke="#4a4a6a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

          {/* Belly highlight */}
          <ellipse cx="105" cy="185" rx="24" ry="28" fill="#24243e" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedCat;
