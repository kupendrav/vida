import React from 'react'

const page = ({params}) => {
  let a = params.username
  return (
    <div>portfolio! {a}</div>
  )
}

export default page