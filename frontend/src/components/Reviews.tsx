import React from 'react'

type Props = {
    rating: string
}

function Reviews({rating}: Props) {
  let imgSource;

  switch (Number(rating)) {
    case 0:
      imgSource = '/assets/yelp-stars/regular_0.png'
      break
    case 1:
      imgSource = '/assets/yelp-stars/regular_1.png'
      break
    case 1.5:
      imgSource = '/assets/yelp-stars/regular_1_half.png'
      break
    case 2:
      imgSource = '/assets/yelp-stars/regular_2.png'
      break
    case 2.5:
      imgSource = '/assets/yelp-stars/regular_2_half.png'
      break
    case 3:
      imgSource = '/assets/yelp-stars/regular_3.png'
      break
    case 3.5:
      imgSource = '/assets/yelp-stars/regular_3_half.png'
      break
    case 4:
      imgSource = '/assets/yelp-stars/regular_4.png'
      break
    case 4.5:
      imgSource = '/assets/yelp-stars/regular_4_half.png'
      break
    case 5:
      imgSource = '/assets/yelp-stars/regular_5.png'
      break
  }

  return (
    <img src={imgSource} className="select-none" alt={`${rating} rating`} />
  )
}

export default Reviews