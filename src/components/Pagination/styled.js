import styled from 'styled-components';

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid #39444d;
  color: var(--texts);
  display: flex;
  padding: 1rem 3rem;
  justify-content: space-between;

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`;
