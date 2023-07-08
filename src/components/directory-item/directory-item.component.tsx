import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';
import { FC, useCallback } from 'react';

type Category = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
}

type DirectoryItem = {
  category: Category
}

const DirectoryItem: FC<DirectoryItem> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = useCallback(() => navigate(route), [route]);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
