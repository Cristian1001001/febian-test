import React from 'react';
import {css} from "@emotion/css";

export const Card = props => {
  return(
    <div className={css`
      display: flex;
      flex-direction: column;
      background-color: #95dada;
      border: 1px solid grey;
      border-radius: 5px;
      padding: 25px;
      cursor: pointer;
      -moz-osx-font-smoothing: grayscale;
      backface-visibility: hidden;
      transform: translateZ(0);
      transition: transform 0.25s ease-out;
      &:hover {
        transform: scale(1.05);
      }
    `}>
      <p>{props.user}</p>
    </div>
  )
}