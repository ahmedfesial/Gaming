'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from 'react'



export default function Hero() {

    const [getData, setgetData] = useState([])

    function getAllGames(){
      axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,
        {
          headers : {
            'x-rapidapi-key': '7433ded128msh63c76a0c0f469f6p1ec4b9jsn27469fb69876',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          }
        }
       )
       .then((response)=>{
        console.log(response);
       })
       .catch((error)=>{
        console.log(error);
       })
    }

    useEffect(()=>{
      getAllGames()
    },[])

  return <>

<div className="container mx-auto flex flex-wrap mt-15 text-white px-2">
  {getData.map((card) => (
    <div
      key={card.id}
      className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-2"
    >
      <Link href={`/GameDetails/${card.id}`}>
        <div className="px-4 border border-[#717477] rounded-lg hover:scale-105 transition-transform duration-300 h-full">
          <img
            src={card.thumbnail}
            alt="Image Game"
            className="w-full mt-4 rounded-md"
            loading="lazy"
          />
          <div className="flex justify-between items-center mt-3">
            <h1>{card.developer}</h1>
            <button className="border bg-[#09c] py-1 px-2 rounded-lg hover:bg-blue-600 cursor-pointer text-sm">
              Free
            </button>
          </div>
          <h1 className="text-[#717477] text-center mt-2 h-[70px] text-sm">
            {card.short_description.split(" ").slice(0, 10).join(" ")}...
          </h1>
          <hr className="text-black mt-2" />
          <div className="flex justify-between items-center my-3">
            <h1 className="bg-[#32383e] px-2 py-1 text-xs rounded-lg">
              {card.genre}
            </h1>
            <h1 className="bg-[#32383e] px-2 py-1 text-xs rounded-lg">
              {card.platform}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>
  </>
}
