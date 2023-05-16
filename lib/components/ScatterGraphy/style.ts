import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
`;

export const Dot = styled.span<{
  isHovered: boolean;
  size: number;
  duration: number;
  color: string;
  shape: 'square' | 'circle';
  coord: number[];
  randomCoord: number[];
}>`
  position: absolute;

  ${({ randomCoord }) =>
    randomCoord &&
    css`
      top: ${randomCoord[1]}px;
      left: ${randomCoord[0]}px;
    `}

  display: inline-block;
  background-color: ${({ color }) => color};
  transition: ${({ duration }) => `ease ${duration}ms ${duration}ms`};
  border-radius: ${({ shape }) => (shape === 'circle' ? '100%' : null)};

  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `}
  ${({ isHovered, coord }) =>
    isHovered &&
    css`
      top: ${coord[1]}px;
      left: ${coord[0]}px;
    `};
`;
