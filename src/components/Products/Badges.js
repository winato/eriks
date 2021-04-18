import React from 'react'
import { StyledBadge } from './styled';

export default function Badges({ badges }) {
  const formattedBadges = badges.split('|');

  return (
    <StyledBadge>
      {
        formattedBadges.map((badge) => (
          <img src={badge} key={badge} alt='badge'/>
        ))
      }
    </StyledBadge>
  )
}
