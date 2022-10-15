import React from 'react'
import Button from '../components/Button'

type Props = {}

function Hero({}: Props) {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="font-sans font-bold text-center text-5xl pb-10">[NAME OF APP]</h1>
        <Button text="DISCOVER RESTAURANTS NOW" linkto="" primary={true} />
      </div>
    </div>
  )
}

export default Hero