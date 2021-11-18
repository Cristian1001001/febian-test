import React from 'react';
import {Card} from '../components/card'
import { css } from '@emotion/css'

export const ItemsPage = props => {
  return (
    <div>
      <div className={css`
      width: 85vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
    `}>
        {props.users.map((user, index )=> (
          <Card key={index} user={user} />
        ))}
      </div>
    </div>
  )
}
