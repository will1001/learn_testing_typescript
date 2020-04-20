import React, { ReactElement } from 'react'

interface Props {
    Title: string;
}
const sum = (a: number, b: number): number => a + b

export default function Header ({ Title }: Props): ReactElement {
  return (
    <div>
      <h1>{Title}</h1>
      {sum(1, 2)}
    </div>
  )
}
