import React from 'react'

const HiglightedSpan = ({text}: {text: string}) => {
  return (
    <span style={{padding: "0.25rem 0.5rem", backgroundColor: "var(--gold)", display: "block", border}}>{text}</span>
  )
}

export default HiglightedSpan