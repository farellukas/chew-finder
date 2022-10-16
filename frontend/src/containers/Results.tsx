import React, { useEffect, useState } from 'react'
import Reviews from '../components/Reviews'

type Props = {
  term: string,
  coords: Array<number>,
}

function Results({ term, coords }:Props) {
  const [results, setResults] = useState([{
    image_url: "",
    rating: "",
    name: "",
    price: "",
    location: {
      address1: "",
    },
    distance: "",
    url: ""
  }])
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetch(`http://localhost:5000/api/search?term=${term}&latitude=${coords[0]}&longitude=${coords[1]}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        setResults(json.businesses)
        setIsLoaded(true)
      })
  }, [term, coords])

  const handleClick = (event:any) => {
    if (currentIndex < results.length - 1) {
      console.log(event.currentTarget.id)
      switch (event.currentTarget.id) {
        case "pass":
          setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1)
          break
        case "smash":
          window.location.replace(results[currentIndex].url)
          break
      }
    }
    else {
      setIsLoaded(false)
      setCurrentIndex(0)
      fetch(`http://localhost:5000/api/search?term=${term}&latitude=${coords[0]}&longitude=${coords[1]}&offset=${offset+20}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        setResults(json.businesses)
        setIsLoaded(true)
      })
      setOffset(prevOffset => prevOffset + 20) 
    }
  }

  return (
    <div className="flex h-screen gap-6 px-6">
      <div onClick={handleClick} id="pass" className="flex w-1/5 rounded-3xl h-5/6 my-auto basis-1/4 border-8 border-red-500 hover:border-transparent hover:bg-red-500 hover:bg-opacity-50 border-opacity-50 fill-red-500 hover:fill-white">
        <svg width="138" height="138" viewBox="0 0 138 138" fill="fill-inherit" xmlns="http://www.w3.org/2000/svg" className="m-auto">
          <path className="fill-inherit" fillOpacity="0.5" d="M94.8592 68.7839L133.968 29.6748C138.768 24.8755 138.768 17.0943 133.968 12.2912L125.276 3.59943C120.477 -1.19981 112.696 -1.19981 107.893 3.59943L68.7839 42.7085L29.6748 3.59943C24.8755 -1.19981 17.0944 -1.19981 12.2912 3.59943L3.59943 12.2912C-1.19981 17.0904 -1.19981 24.8716 3.59943 29.6748L42.7085 68.7839L3.59943 107.893C-1.19981 112.692 -1.19981 120.473 3.59943 125.276L12.2912 133.968C17.0904 138.768 24.8755 138.768 29.6748 133.968L68.7839 94.8592L107.893 133.968C112.692 138.768 120.477 138.768 125.276 133.968L133.968 125.276C138.768 120.477 138.768 112.696 133.968 107.893L94.8592 68.7839Z"/>
        </svg>
      </div>
      <div className="flex m-auto bg-accent w-2/5 h-5/6 rounded-3xl basis-1/2">
        <div className="flex-col gap-4 m-0 w-full max-h-fit p-8">
          {!isLoaded && <h4 className="text-4xl font-bold font-sans max-w-xs text-center m-auto">Loading...</h4>}
          {
            isLoaded && 
            <>
              {results[currentIndex].image_url && <img src={results[currentIndex].image_url} alt="restaurant" className="rounded-xl aspect-3/2 object-cover max-w-full select-none" />}
              <h3 className="text-3xl font-bold font-sans">{results[currentIndex].name}</h3>
              <Reviews rating={results[currentIndex].rating} />
              <h2 className="text-xl font-bold font-sans">{results[currentIndex].price}</h2>
              <h2 className="text-xl font-bold font-sans">{results[currentIndex].location.address1} | {Math.round(Number(results[currentIndex].distance))} mi away</h2>
            </>
          }
        </div>
      </div>
      <div onClick={handleClick} id="smash" className="flex w-1/5 rounded-3xl h-5/6 my-auto basis-1/4 border-8 border-green-500 hover:border-transparent hover:bg-green-500 hover:bg-opacity-50 border-opacity-50 fill-green-500 hover:fill-white">
        <svg width="138" height="103" viewBox="0 0 138 103" fill="fill-inherit" xmlns="http://www.w3.org/2000/svg" className="m-auto">
          <path className="fill-inherit" fillOpacity="0.5" d="M46.7241 100.571L2.01455 55.8616C-0.671516 53.1755 -0.671516 48.8204 2.01455 46.1341L11.7418 36.4065C14.4279 33.7202 18.7833 33.7202 21.4694 36.4065L51.5879 66.5247L116.098 2.01455C118.784 -0.671516 123.14 -0.671516 125.826 2.01455L135.553 11.7421C138.239 14.4282 138.239 18.7833 135.553 21.4697L56.4517 100.571C53.7653 103.257 49.4102 103.257 46.7241 100.571V100.571Z" />
        </svg>
      </div>
    </div>
  )
}

export default Results