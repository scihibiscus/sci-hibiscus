import React from 'react'

interface HeroProps {
  text: string;
  heading: string;
}

const RentBuyHero = ({
  content,
  ref,
  lenis,
}: {
  content: HeroProps;
}) => {
  return (
    <div>RentBuyHero</div>
  )
}

export default RentBuyHero