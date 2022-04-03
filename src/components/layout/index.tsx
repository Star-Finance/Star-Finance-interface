import React, { ReactNode } from 'react'

export default function index(props: {
    header: ReactNode,
    children: ReactNode
}) {
  return (
    <div>
      { props.header }
    </div>
  )
}
