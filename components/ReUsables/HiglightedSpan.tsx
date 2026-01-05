import React from 'react'

const HiglightedSpan = ({text}: {text: string}) => {
  return (
    <span style={{padding: "0.3rem 0.6rem", backgroundColor: "var(--gold)", display: "block", borderRadius: "20px", textTransform: "uppercase", fontFamily: "var(--medium-font)", color: "white", fontSize: "var(--small-font-size)", width: "max-content"}}>{text}</span>
  )
}

export default HiglightedSpan