// src/app/loading/loading.tsx
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-24 h-24">
        <rect fill="#000000" stroke="#000000" strokeWidth="15" width="30" height="30" x="25" y="85">
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          />
        </rect>
        <rect fill="#000000" stroke="#000000" strokeWidth="15" width="30" height="30" x="85" y="85">
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          />
        </rect>
        <rect fill="#000000" stroke="#000000" strokeWidth="15" width="30" height="30" x="145" y="85">
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          />
        </rect>
      </svg>
    </div>
  );
};

export default Loading;
