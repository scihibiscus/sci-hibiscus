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
  ref?: RefObject<HTMLDivElement | null>;
  lenis?: Lenis | null;
}) => {
  return (
    <div>RentBuyHero</div>
  )
}

export default RentBuyHero