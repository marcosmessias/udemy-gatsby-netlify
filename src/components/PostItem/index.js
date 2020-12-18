import React from 'react';
import propTypes from 'prop-types';

import * as Style from './styled';

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <Style.PostItemLink
    to={slug ? slug : ''}
    cover
    direction="right"
    bg="#16202c"
    duration={0.6}
  >
    <Style.PostItemWrapper>
      <Style.PostItemTag background={background}>{category}</Style.PostItemTag>
      <Style.PostItemInfo>
        <Style.PostItemDate>
          {date} * {timeToRead} min de leitura
        </Style.PostItemDate>
        <Style.PostItemTitle>{title}</Style.PostItemTitle>
        <Style.PostItemDescription>{description}</Style.PostItemDescription>
      </Style.PostItemInfo>
    </Style.PostItemWrapper>
  </Style.PostItemLink>
);

PostItem.propTypes = {
  slug: propTypes.string.isRequired,
  background: propTypes.string,
  category: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  timeToRead: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default PostItem;
