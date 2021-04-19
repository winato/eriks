import React from 'react'
import { StyledBadge, BadgeImg } from './styled';
import badge from '../../assets/badge.png';

export default function Badges({ badges }) {
  const formattedBadges = badges.split('|');

  return (
    <StyledBadge>
      {
        formattedBadges.map((badgeData) => (
          <BadgeImg src={badge} key={badgeData} alt='badge'/>
        ))
      }
    </StyledBadge>
  )
}
