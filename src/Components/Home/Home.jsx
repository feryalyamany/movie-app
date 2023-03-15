

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MediaContext } from '../../Context/MediaContext';


export default function Home() {

  
let {trendingMovies, trendingTv, trendingPerson}= useContext(MediaContext);

  return ( 
    <>
    <div className="container py-4">
     <div className="row gy-2">
       <div className="col-md-4 col-12">
         <hr className='w-25'/>
         <h2 className='h4'>Trending <br/> movies <br/> to watch now</h2>
         <p className='text-muted mt-3'>most watched movies by days</p>
         <hr/>
       </div>
       
        
        {trendingMovies.slice(0,10).map((item)=>{
        return   <div className="col-md-2 ">
          <Link to={`/itemdetails/${item.id}/${item.media_type}`} className='text-decoration-none text-white'>
           <div className="poster position-relative">
           <img src={`https://image.tmdb.org/t/p/w500`+item.poster_path} className=" w-100"/>
           <h3 className='mt-2 h6'>{item.title} {item.name}</h3>
           <div className="rate position-absolute">{item.vote_average?.toFixed(1)}</div>
           </div>
           </Link>
           </div>
        })}
          
        
        
       
     </div>
    </div>

    <div className="container py-4">
     <div className="row gy-2">
       <div className="col-md-4 col-12 ">
         <hr className='w-25'/>
         <h2 className='h4'>Trending <br/> Tv shows <br/> to watch now</h2>
         <p className='text-muted mt-3'>most watched movies by days</p>
         <hr/>
       </div>
       
        
        {trendingTv.slice(0,10).map((item)=>{
        return   <div className="col-md-2 ">
           <Link to={`itemdetails/${item.id}/${item.media_type}`} className='text-decoration-none text-white'>
           <div className="poster position-relative">
           <img src={`https://image.tmdb.org/t/p/w500`+item.poster_path} className=" img-fluid w-100"/>
           <h3 className='mt-2 h6'>{item.title} {item.name}</h3>
           {/* <div className="rate position-absolute">{item.vote_average?.toFixed(1)}</div> */}
           </div>
           </Link>
           </div>
        })}
          
        
        
       
     </div>
    </div>

    <div className="container pt-3">
     <div className="row gy-2">
       <div className="col-md-4 col-12 ">
         <hr className='w-25'/>
         <h2 className='h4'>Trending <br/> Person <br/> to watch now</h2>
         <p className='text-muted mt-3'>most watched movies by days</p>
         <hr/>
       </div>
       
        
        {trendingPerson.filter((item)=> item.profile_path !== null).slice(0,10).map((item)=>{
        return   <div className="col-md-2 ">
           <Link to={`itemdetails/${item.id}/${item.media_type}`} className='text-decoration-none text-white'>
           <div className="poster position-relative">
           <img src={`https://image.tmdb.org/t/p/w500`+item.profile_path} className=" img-fluid w-100"/>
           <h3 className='mt-2 h6'>{item.title} {item.name}</h3>
           {/* <div className="rate position-absolute">{item.known_for[0].vote_average?.toFixed(1)}</div> */}
           </div>
           </Link>
           </div>
        })}
          
        
        
       
     </div>
    </div>
  
    </>
  )
}
