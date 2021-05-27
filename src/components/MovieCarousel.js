import React,{useEffect} from 'react'
import { Carousel, Image } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {trendingMovie} from '../actions/movieActions'
import Loader from './Loader';
import Message from './Message';
const MovieCarousel = () => {
    const dispatch = useDispatch()
    const trendingMovies = useSelector(state=>state.trendingMovies)
    const {tmovies,loading,error} = trendingMovies

    useEffect(()=>{
        dispatch(trendingMovie())
    },[dispatch])
    return (
        <>
        {loading ? (<Loader/>) : error ? (<Message variant='danger'>{error}</Message>):(<Carousel pause='hover' className='bg-dark'>
      {tmovies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <Image src={`${process.env.REACT_APP_IMAGE_URL}/${movie.backdrop_path}`} alt={movie.title} rounded  />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {movie.title}
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>)}
    </>
        
    )
}

export default MovieCarousel
