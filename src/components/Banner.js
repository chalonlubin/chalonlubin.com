import React from 'react'

const Banner = ({message, color="bg-purple-300"}) => {
  return (
    <div className={`${color} py-3 text-black text-center`}>
      {message}
            {/* <p>Hover icons you aren't familiar with for more detail.</p> */}
          </div>
  )
}

export default Banner