"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";


// API  Key
export const API_Key = "7433ded128msh63c76a0c0f469f6p1ec4b9jsn27469fb69876";

// Host
export const API_Host = "free-to-play-games-database.p.rapidapi.com";

export default function Home() {
  


  function allGames(){
    return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games` , {
      headers : {
        "x-rapidapi-key": API_Key,
        "x-rapidapi-host": API_Host,  
      } 
    })
  }


  let {data , isLoading , isError , error} = useQuery({
    queryKey : ['allGames'],
    queryFn : allGames , 
    select : (data)=> data.data
  })

  console.log(data);
  

  if (isLoading) {
    return (
      <div className="min-h-96 flex items-center justify-center my-12">
        <span className="loader"></span>
      </div>
    );
  }

  if(isError){
    return (
      <div className="text-center text-2xl text-white mt-40">
        <h1>{error.response?.data?.message}</h1>
      </div>  
    )
  }


  return (
      <div className="container mx-auto flex flex-wrap mt-15 text-white px-2">
        {data?.map((card) => (
          <div key={card.id} className="w-1/2 md:w-1/3 xl:w-1/4 p-2">
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
                    {card.platform.split(' ').slice(0,2).join(' ')}
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>  
  );
}
