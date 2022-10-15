import React from 'react'

type Props = {
    text: string,
    linkto: string,
}

function Button({text, linkto}: Props) {
  return (
    <button>
        {text}
    </button>
  )
}

export default Button