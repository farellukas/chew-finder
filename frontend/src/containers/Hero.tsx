import React from 'react'
import Button from '../components/Button'

function Hero() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="font-sans font-bold text-center text-6xl pb-10">[NAME OF APP]</h1>
        <Button text="DISCOVER RESTAURANTS NOW" linkto="/discover" primary={true} />
      </div>
    </div>
  )
}

export default Hero