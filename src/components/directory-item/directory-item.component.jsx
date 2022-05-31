import React from 'react';
import './directory-item.styles.jsx';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
