import React from 'react'
import { data } from '../players'
import Player from './Player'

const PlayerList = () => {
  return (
    <div>
        {data.map(el=><Player data={el}/>)}
    </div>
  )
}

export default PlayerList