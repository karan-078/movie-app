import React from 'react'
import { useGlobalContext } from '../Context'

const Search = () => {

    const{query,setQuery,error} = useGlobalContext()

  return (
 <section className='search-movie mt-6'>
   <h1 className='  text-center font-semibold text-xl'>Search Your Movie</h1>

   <form action="#" onSubmit={(e)=>{
    e.preventDefault()
   }}></form>

   <div className="serach mt-4">
    <input type="text" 
    placeholder='search-movie'
    value={query}
    onChange={(e)=>setQuery(e.target.value)}
    />
   </div>

   <div className='error'>
    <p>{error.show && error.msg}</p>
   </div>
 </section>
  )
}

export default Search
