import React from 'react'

export default function Avatar ({userId,username,online}){
    const colors = ['bg-red-255','bg-yellow-255','bg-blue-255','bg-pink-255','bg-orange-255','bg-teal-255'];
    const userIdBase10 = parseInt(userId.substring(10),16);
    const colorIndex =userIdBase10% colors.length;
    const color = colors[colorIndex];
  return (
    <div className={"w-8 h-8 relative rounded-full flex items-center "+color}>
        <div className="text-center w-full opacity-70">{username[0]}</div>
        {online && (
            <div  className="absolute w-3 h-3 bg-green-400 bottom-0 right-0 rounded-full border border-white">
            </div>
        )}
        {!online && (
            <div className="absolute w-3 h-3 bg-gray-400 bottom-0 right-0 rounded-full border border-white"></div>
        )}   
    </div>
  )
}
