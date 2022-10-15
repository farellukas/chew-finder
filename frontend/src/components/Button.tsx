import React from 'react'

type Props = {
    text: string,
    linkto: string,
    primary: boolean,
}

function Button({text, linkto, primary}: Props) {
  return (
    <button className={`py-6 px-8 ${primary ? 'bg-white text-primary' : 'bg-primarylightest'} font-bold rounded-3xl font-sans text-3xl`}>
      {text}
    </button>
  )
}

export default Button