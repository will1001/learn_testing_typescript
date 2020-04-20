import React, { ReactElement } from 'react'

interface Props {
    Title: string;
}

export default function index ({ Title }: Props): ReactElement {
  return (
    <div>
      <h1>{Title}</h1>
    </div>
  )
}
