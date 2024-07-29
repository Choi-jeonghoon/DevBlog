import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { TPostHeadProps } from '../../types/PostHeadType'

export default function PostHead({
  thumbnail,
  title,
  category,
  date,
}: TPostHeadProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Information>
        <Category>
          {category.map(item => (
            <div key={item}>#{item}</div>
          ))}
        </Category>
        <div>{date}</div>
      </Information>

      <Thumbnail image={thumbnail} alt={title} />
    </Wrapper>
  )
}

export const query = graphql`
  query PostPage($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      date
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  aspect-ratio: 16 / 9;
  padding: 50px;
  border-radius: 20px;

  @media (max-width: 1024px) {
    padding: 30px;
    gap: 15px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    gap: 10px;
    border-radius: 10px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  max-height: 2.4em;
  overflow: hidden;
  font-size: 30px;
  font-weight: 700;
  // color: #ffffff;

  color: ${({ theme }) => theme.color};
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2em;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 15px;
  font-weight: 300;
  color: ${({ theme }) => theme.color};

  @media (max-width: 1024px) {
    padding-bottom: 10px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    padding-bottom: 8px;
    font-size: 11px;
  }
`

const Category = styled.div`
  display: flex;
  gap: 7px;
`

const Thumbnail = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.9) 130%
    );
  }
`
