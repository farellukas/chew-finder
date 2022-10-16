import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  term: string,
  setTerm: Function,
  coords: Array<number>,
  setCoords: Function
}

function Discover({ term, setTerm, coords, setCoords }:Props) {
  const navigate = useNavigate();

  // get user's location
  if (coords.length !== 2) {
    const savePosition = (position:any) => {
      setCoords([position.coords.latitude, position.coords.longitude])
    } 
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(savePosition)
    }
  }

  const handleSubmit = (event:any) => {
    event.preventDefault()
    navigate('/results')
  }

  const handleChange = (event:any) => {
    setTerm(event.target.value)
  }

  return (
    <div className="flex h-screen">
      <div className="flex m-auto bg-accent w-2/5 h-5/6 rounded-3xl">
        <div className="m-auto p-4">
          <h4 className="text-4xl font-bold font-sans max-w-xs text-center mb-4">What are you craving for?</h4>
          <form onSubmit={handleSubmit} className="max-w-xs">
            <input type="text" name="term" className="font-sans rounded-full w-full px-4 py-1" onChange={handleChange} value={term} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Discover