import React, { useEffect, useState } from 'react';
import "./chartcontent.css";
import { chartStore } from '../storedata/Storedata';

export default function Timeframe(props) {




  useEffect(() => {
    
  }, [props.pickTimeframe])

  return (
    <div className='timeframe-container'>

        <div className='pairName'>WBTC/BTC</div>

        <div className='contain-time'>

          <div className={ chartStore.timeFrame !== '1m' ? 'eachtime' : 'eachtime-active' } onClick={ () => props.pickTimeframe('1m') } >1m</div>
          <div className={ chartStore.timeFrame !== '3m' ?'eachtime' : 'eachtime-active' } onClick={ () => props.pickTimeframe('3m') } >3m</div>
          <div className={ chartStore.timeFrame !== '5m' ?'eachtime' : 'eachtime-active' } onClick={ () => props.pickTimeframe('5m') } >5m</div>
          <div className={ chartStore.timeFrame !== '15m' ?'eachtime' : 'eachtime-active' } onClick={ () => props.pickTimeframe('15m') } >15m</div>
          <div className={ chartStore.timeFrame !== '30m' ?'eachtime' : 'eachtime-active' } onClick={ () => props.pickTimeframe('30m') } >30m</div>
          <div className={ chartStore.timeFrame !== '1h' ?'eachtime' : 'eachtime-active' } onClick={ () => props.pickTimeframe('1h') } >1h</div>
          <div className={ chartStore.timeFrame !== '2h' ?'eachtime' : 'eachtime-active' } onClick={ () => props.pickTimeframe('2h') } >2h</div>

        </div>
    </div>
  )
}
