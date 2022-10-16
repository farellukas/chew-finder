import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    text: string,
    linkto: string,
    primary: boolean,
    handleClick?: any
}

function Button({text, linkto, primary, handleClick}: Props) {
  return (
    <Link to={linkto}>
      <button className={`py-6 px-8 ${primary ? 'bg-white text-primary' : 'bg-primarylightest text-black'} font-bold rounded-3xl font-sans text-4xl`} onClick={handleClick}>
        {text}
      </button>
    </Link>
  )
}

export default Button