import React from 'react'

function Discover() {
  return (
    <div className="flex h-screen">
      <div className="flex m-auto bg-accent w-2/5 h-5/6 rounded-3xl">
        <div className="m-auto p-4">
          <h4 className="text-4xl font-bold font-sans max-w-xs text-center mb-4">What are you craving for?</h4>
          <form method="get" action="https://api.yelp.com/v3/businesses/search" className="max-w-xs">
            <input type="text" name="term" className="font-sans rounded-full w-full px-4 py-1" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Discover