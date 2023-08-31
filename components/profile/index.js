import React from "react";

export default function Profile({ headshot, name, position, major, year }) {
  return (
    <div className="mx-auto">
      <img
        src={headshot}
        alt="headshot"
        className="w-40 h-44 shadow-md object-cover"
        style={{}}
      />
      <h3 className="font-roboto font-bold text-md pt-2 pb-0">{name}</h3>
      <h3 className="font-roboto font-light text-red-800 text-md py-0">{position}</h3>
      <h3 className="font-roboto font-light text-md py-0">{major}</h3>
      <h3 className="font-roboto font-light text-md py-0">{year}</h3>
    </div>
  );
}
