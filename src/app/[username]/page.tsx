import React from 'react'

interface PageProps {
  params: {
    username: string;
  };
}

const page = ({params}: PageProps) => {
  let a = params.username
  return (
    <div>portfolio! {a}</div>
  )
}

export default page