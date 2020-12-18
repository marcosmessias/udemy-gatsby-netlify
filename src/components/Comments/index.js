import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

import propTypes from 'prop-types';

import * as Style from './styled';

const Comments = ({ url, title }) => {
  const completeUrl = `https://johndoe.com.br${url}`;
  return (
    <Style.CommentsWrapper>
      <Style.CommentsTitle>Comentários</Style.CommentsTitle>
      <ReactDisqusComments
        shortname="johndoe"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </Style.CommentsWrapper>
  );
};

Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Comments;
