import React from "react";
import Link from "next/link";

const Card = ({data}) => {
  console.log(data);
  //console.log(data.title);
  let image = data.images.length ? data.images[0] : "/img/card-top.jpg"

  return (
    <>
    <div>
        <img className="w-full" src={image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.title}</div>
            <p className="text-gray-700 text-base">
            {data.description.substr(0, 60)}...
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
    </div>
    </>
  );
};


export default Card;