
/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, forwardRef } from 'react';
import logo_endless from '../../assets/images/logo_endless.svg';
import { css, } from '@emotion/react';
import { breakpoints } from '../../styles/breakpoints';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  imageUrl?: string;
  linkUrl?: string;
  maxHeight?: number;
}

export const Header = forwardRef<HTMLDivElement, Props>(
  function Header(
    {
      imageUrl,
      linkUrl,
      maxHeight = 20,
    }, ref
  ) {
    const wrapperStyle = css`
      background-color: #1f1f1f;
      width: 100%
      display: flex;
      @media screen and (max-width: ${breakpoints.medium}px) {
        text-align: center;
      }
    `;

    const imageStyle = css`
      max-height: inherit;
      filter: invert(77%) sepia(39%) saturate(681%) hue-rotate(110deg) brightness(88%) contrast(85%);
      margin: 10px;
      max-height: ${maxHeight}px;
      padding-left: 15%;
      @media (max-width: ${breakpoints.medium}px) {
        max-height: ${maxHeight + 10}px;
        padding-left: 0;
      }
    `;

    return(
      <div css={wrapperStyle} >
        { linkUrl ? 
          <a href={linkUrl} target="_blank" rel="noreferrer">
            <img src={imageUrl || logo_endless} alt="logo" css={imageStyle} className="ImageBody-logo filter-teal"/>
          </a>
        :
          <img src={imageUrl || logo_endless} alt="logo" css={imageStyle} className="ImageBody-logo filter-teal"/>
        }
      </div>
    )
  }
)