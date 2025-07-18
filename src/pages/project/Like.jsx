import React from 'react';

const Like = () => {
    return (
        <div className="overflow-x-visible relative w-14 h-14 overflow-y-clip group text-center">
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-yellow-300 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="26.463" height="26.647" viewBox="0 0 26.463 26.647">
                    <g id="Grupo_3793" data-name="Grupo 3793" transform="translate(1.5 1.5)">
                        <path id="Trazado_28219" data-name="Trazado 28219" d="M7,10V24.188" transform="translate(-1.088 -0.541)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                        <path id="Trazado_28220" data-name="Trazado 28220" d="M17.37,6.587l-1.182,4.871h6.893a2.365,2.365,0,0,1,2.27,3.027L22.6,23.944a2.365,2.365,0,0,1-2.27,1.7H4.365A2.365,2.365,0,0,1,2,23.282V13.823a2.365,2.365,0,0,1,2.365-2.365H7.628a2.365,2.365,0,0,0,2.116-1.312L13.823,2A3.7,3.7,0,0,1,17.37,6.587Z" transform="translate(-2 -2)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                    </g>
                </svg>
            </div>
            <div className="absolute text-white font-bold -bottom-10 left-1/2 text-sm text-center text-black whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
                Like
            </div>
        </div>
    );
}

export default Like;
