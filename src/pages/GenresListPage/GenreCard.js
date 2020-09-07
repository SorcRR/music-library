import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { genreCardStyles }from './genreCardStyles';

const GenreCard = ({ genre, color, isAddNew = false, openModal }) => {
  const [hovered, setHover] = useState(false);
  const history = useHistory();
  
  const clickAction = () => {
    if (isAddNew) {
      openModal();
    } else {
      history.push(`/tracks/${genre.id}`);
    }
  }

  const toggelHover = () => {
    setHover(!hovered);
  }

  const conatinerHoverStyle = hovered ? genreCardStyles.cardContainerHoverd : {};
  const extraOption = isAddNew ? { border: '1px solid #cccccc' } : { backgroundColor: color };
  const conatinerStyle = { ...genreCardStyles.cardContainer, ...extraOption, ...conatinerHoverStyle }

  return (
    <div
      style={conatinerStyle }
      onMouseEnter={()=>toggelHover()}
      onMouseLeave={()=>toggelHover()}
      onClick={()=>clickAction()}
    >
      { isAddNew ?
        <>
          <div style={genreCardStyles.cardTitle}>Add new genre</div>
          <div style={genreCardStyles.cardCount}>+</div>
        </>
        :
        <>
          <div style={genreCardStyles.cardTitle}>{genre.name}</div>
          <div style={genreCardStyles.cardCountInfo}>has</div>
          <div style={genreCardStyles.cardCount}>{genre.tracks}</div>
          <div style={genreCardStyles.cardCountInfo}>songs</div>
        </>
      }
    </div>
  )
}

export default GenreCard;