
/** @jsxImportSource @emotion/react */
import React, { ReactNode, HTMLAttributes, forwardRef } from 'react';
import { css } from '@emotion/react';
import { breakpoints } from '../../styles/breakpoints';

import logo from '../../assets/images/couch_2x.jpg';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ImageBody = forwardRef<HTMLDivElement, Props>(
  function ImageBody(
    {
      children, //probably needs additional styling considerations to be made to accurately add children
    }, ref
  ) {
    const wrapperStyle = css`
      position: relative
    `;

    const backgroundImage = css`
      width: 100%;
      z-index: -1;
    `;

    const bodyTextStyle = css`
      font-family: 'Lato', sans-serif;
      color: white;
      position: absolute;
      top: calc( 1.55vw * 12);
      left: 10%;
      @media screen and (max-width: ${breakpoints.medium}px) {
        top: calc( 1.85vw * 3);
      }
      @media screen and (max-width: ${breakpoints.small}px) {
        position: static;
        margin: 10px 5px;
        color: #000;
        text-align: center;
      }
    `;

    const headerSmallStyle = css`
      font-size: 32px;
      font-weight: 600;
      @media screen and (max-width: ${breakpoints.large}px) {
        font-size: 19px;
      }
    `;

    const headerLargeStyle = css`
      font-size: 56px;
      font-weight: 400;
      @media screen and (max-width: ${breakpoints.large}px) {
        font-size: 32px;
      }
    `;

    const textStandardStyle = css`
      font-size: 24px;
      max-width: 50%;
      font-weight: 600;
      margin: 10px 0px 25px 0px;
      @media screen and (max-width: ${breakpoints.large}px) {
        font-size: 16px;
      }
      @media screen and (max-width: ${breakpoints.small}px) {
        max-width: 100%;
        font-weight: 400;
      }
    `;

    const buttonLinkStyle = css`
      text-decoration: none;
    `;

    const buttonStyle = css`
      color: #FFF;
      background-color: #3fceaf;
      padding: 10px 30px;
      border-radius: 25px;
      border: none;
      overflow: hidden;
      box-shadow: none;
      transition: 0.5s;

      &:hover {
        cursor: pointer;
        color: #3fceaf;
        background-color: #FFF;
      }
    `;

    return(
      <div css={wrapperStyle} >
        <img src={logo} css={backgroundImage} alt="logo"/>
          <div css={bodyTextStyle}>
            {
              children ? 
                children 
              :
                <React.Fragment>
                  <div css={headerSmallStyle}>
                    <span className="">New Games & Accessories</span>
                  </div>
                  <div css={headerLargeStyle}>
                    <span>Monthly packages.</span><br/>
                  </div>
                  <div css={headerLargeStyle}>
                    <span>Excitement delivered daily.</span><br/>
                  </div>
                  <div css={textStandardStyle}>
                    <span>What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month.</span>
                  </div>
                  <a href="https://www.youtube.com/watch?v=IKqV7DB8Iwg&t=58s" target="_blank" className="get-started-button" css={buttonLinkStyle} rel="noreferrer">          
                    <button css={buttonStyle}><span>GET STARTED</span></button>
                  </a>
              </React.Fragment>
            }
          </div>
      </div>
    )
  }
)