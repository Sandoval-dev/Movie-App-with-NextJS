import Movies from '@/components/Movies';
import React from 'react'

const Page = async({searchParams}) => {

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=ef3a61d6af334661565f59ee00f9baed&language=en-US&page=1`,
  {next: {revalidate:1000}})

  const data = await res.json();

  //console.log(data)

  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
      {data?.results?.map((dt,i)=> (
            <Movies key={i} dt={dt}/>
      ))
      }
    </div>
  )
}

export default Page