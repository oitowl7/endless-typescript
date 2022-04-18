/** @jsxImportSource @emotion/react */
import React, { ReactNode, HTMLAttributes, useState, useEffect, forwardRef } from 'react';
import { css, } from '@emotion/react';
import { breakpoints } from '../../styles/breakpoints';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const TextGrid = forwardRef<HTMLDivElement, Props>(
  function TextGrid(
    {
      children, //impliment to add children to be able to be inserted. not implimented for this exercise
    }, ref
  ) {
    type VersionContent = {
      id: number;
      fkStepId: number;
      title: string;
      body: string;
      effectiveDate: string;
    };

    type DataEntry = {
      id: number;
      stepWeight: number;
      initialTitle: string;
      versionContent: VersionContent[];
      stepNumber: number;
    };

    const [data, setData] = useState(Array<DataEntry>());

    const wrapperStyle = css`
      font-family: 'Lato', sans-serif;
      margin: 20px 15%;
      justify-content: center;
      
      @media screen and (max-width: ${breakpoints.large}px) {
        margin: 10px 5%;
      }
      
    `;
    
    const headerStyle = css`
      font-size: 48px;
      margin: auto;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    
      @media screen and (max-width: ${breakpoints.medium}px) {
        font-size: 20px;
        font-weight: 800;
        margin-top: 20px;
      }
    `;

    const gridStyle = css`
      display: flex;
      text-align: center;
      justify-content: center; 
      flex-wrap: wrap;
    `;

    const gridItemStyle = css`
      margin: 0 10px;
      width: ${data.length < 2 ? "40%" : data.length % 3 === 0 ? "26%": "20%"};

      @media screen and (max-width: ${breakpoints.small}px) {
        width: 100%;
      }
    `;

    const gridItemHeaderStyle = css`
      font-size: 48px;
      font-weight: 900;
      margin-bottom: 5px;
    `;

    const gridItemDividerStyle = css`
      width: 60px;
      background-color: #5cf7d6;
      border: none;
      height: 4px;
      margin-top: 2px;
    `;

    const gridItemTitleStyle = css`
      font-weight: 900;
    `;

    useEffect(() => {
      const getAndSetData = async () => {
        const response = await fetch(`https://singlestone-endless-api.herokuapp.com/steps/`);
        const json = await response.json();

        let editedData = [...json];
        
        editedData.sort((a, b) => {
          if(a.stepNumber < b.stepNumber)
            return -1;
          else 
            return 1;
        })
  
        editedData.map((d, i) => {
          return({
            id: d.id,
            stepNumber: d.stepNumber,
            versionContent: d.versionContent.sort((a: VersionContent, b: VersionContent) => {
              if(a.effectiveDate > b.effectiveDate)
                return -1;
              else 
                return 1;
            })
          })
        });
  
        setData(editedData);
      }

      getAndSetData();
    }, []);

    return(
      <div css={wrapperStyle} >
        <div css={headerStyle}><div>How It Works</div></div>
        <div css={gridStyle}>
          {data && data.map((d, index) => {
            return(
              <div css={gridItemStyle} key={d.id}>
                <span css={gridItemHeaderStyle}>{d.stepNumber < 10 ? `0${d.stepNumber}` : d.stepNumber}</span>
                <hr css={gridItemDividerStyle}></hr>
                <span css={gridItemTitleStyle}><strong>{d.versionContent[0].title.toUpperCase()}</strong></span><br />
                <span className="how-it-works-item-body">{d.versionContent[0].body}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)