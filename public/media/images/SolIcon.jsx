import React from "react";

export default function SolIcon(props){
    return <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48">
        <path fill={props.color} d="m4 44 4-20h32l4 20ZM6 7V4h6v3Zm1.7 34h14.8v-5.5H8.8Zm4-23-2.15-2.1 4.25-4.25 2.15 2.1ZM9.4 32.5h13.1V27h-12ZM24 13q-3.7 0-6.25-2.625T15 4h3q.15 2.5 1.85 4.25Q21.55 10 24 10t4.15-1.75Q29.85 6.5 30 4h3q-.2 3.75-2.75 6.375T24 13Zm0-9Zm-1.5 18v-6h3v6Zm3 19h14.8l-1.1-5.5H25.5Zm0-8.5h13.1L37.5 27h-12Zm10.8-14.55-4.25-4.25 2.1-2.1 4.3 4.2ZM36 7V4h6v3Z"/>
    </svg>
}