'use client'
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function GameDetails() {



  const [setData, setsetData] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  let {id} = useParams()

  function getDetails(id){
    axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , 
      {
        headers :
         {
        'x-rapidapi-key': '7433ded128msh63c76a0c0f469f6p1ec4b9jsn27469fb69876',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      }
    )
    .then(({data})=>{
      setisLoading(false)
      setsetData(data)
    })
    .catch((error)=>{
      setisLoading(false)
    })
  }

  useEffect(()=>{
    getDetails(id)
  },[id])

  if(isLoading){
        return <div className="min-h-96 flex items-center justify-center my-12">
            <span className="loader"></span>
        </div>
    }



  return <>

    <h1 className='ms-28 mt-4 text-4xl text-white'>Details Game</h1>
    <div className='container  flex justify-between items-start mx-auto my-5'>
      {/*Photo*/}
      <div className='w-1/3 me-6'>
          <img src={setData?.thumbnail} className='mt-3' alt="Photo Gaming" loading='lazy' />
      </div>


      {/*Details  */}
      <div className='w-3/4 text-white'>
          <h1 className='text-4xl'>Title : {setData?.title}</h1>
          <h1 className='mt-3'>Category : <span className='ms-2 bg-[#0dcaf0] text-black text-sm py-1 px-2 rounded-lg font-light'>{setData?.genre}</span></h1>
          <h1 className='my-3'>platform : <span className='ms-2 bg-[#0dcaf0] text-black text-sm py-1 px-2 rounded-lg font-light'>{setData?.platform}</span></h1>
          <h1>Status : <span className='ms-2 bg-[#0dcaf0] text-black text-sm py-1 px-2 rounded-lg font-light'>{setData?.status}</span></h1>
          <h1 className='my-3'>{setData?.description}</h1>
          <Link href={'https://www.freetogame.com/open/darkorbit'}>
          <button className='mt-4 border-1 py-2 px-4 border-[#ffc107] rounded-lg hover:bg-[#ffc107] text-xl cursor-pointer'>Show Game</button>
          </Link>
      </div>
      

    </div>

  </>
}
