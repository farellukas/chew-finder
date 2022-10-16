import React from 'react'
import Button from '../components/Button'

type Props = {
  coords: Array<number>,
  setCoords: Function
}

function Hero({ coords, setCoords }:Props) {
  const handleClick = () => {
    const savePosition = (position:any) => {
      setCoords([position.coords.latitude, position.coords.longitude])
    } 
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(savePosition)
    }
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="font-sans font-bold text-center text-6xl pb-10">CHEW FINDER</h1>
        <Button text="DISCOVER RESTAURANTS NOW" linkto="/discover" primary={true} handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Hero