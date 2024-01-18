import React from 'react'

const Page = async({params}) => {
    const keyword=params.keyword

    const res= await fetch(`https://api.themoviedb.org/3/movie/?api_key=ef3a61d6af334661565f59ee00f9baed&query=${keyword}&language=en-US&include_adult=false`)

    const data=await res.json()
    console.log(keyword)
  return (
    <div>{
        
        }</div>
  )
}

export default Page