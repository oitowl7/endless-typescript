
/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
import { css, } from '@emotion/react';
import { breakpoints } from '../../styles/breakpoints';


export const Footer = forwardRef<HTMLDivElement>(
  function Footer() {
    const footerStyle = css`
      height: 60px;
      background-color: #1f1f1f;
      width: 100%;
      margin-top: 30px;
      align-items: center;
      justify-content: end;
      display: flex;
        
      @media screen and (max-width: ${breakpoints.medium}px) {
        justify-content: center;
      }
    `;

    const footerTextStyle = css`
      color: #3fceaf;
      float: right;
      margin-right: 20px;
      font-weight: 800;
      font-family: 'Lato', sans-serif;  

      @media screen and (max-width: ${breakpoints.medium}px) {
      margin-right: 0px;
      }
    `;

    return(
      <div css={footerStyle}>
        <span css={footerTextStyle}>&copy; Endless 2021</span>
      </div>
    )
  }
)