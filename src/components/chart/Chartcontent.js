import React, { useEffect, useRef, useState } from 'react';
import { Chart } from './Chart';
import Timeframe from './Timeframe';
import "./chartcontent.css";
import { chartStore } from '../storedata/Storedata';







export default function Chartcontent() {


  let socket = new WebSocket(`wss://stream.binance.com:9443/ws/wbtcbtc@kline_${chartStore.timeFrame}`);
  const [activetime, setActiveTime] = useState('1m');
  const [loader, setLoader] = useState(false);
  







  const structuredata = (event) => {
    const objectpush = {time: event.E/1000, open: event.k.o, high: event.k.h, low: event.k.l, close: event.k.c }
    chartStore.addwebsocket(objectpush);
  }


  const getfromapi = async () => {
      
    await fetch(`https://api.binance.com/api/v3/klines?symbol=WBTCBTC&interval=${chartStore.timeFrame}&limit=1000`)
    .then(res => res.json())
    .then( data => {

     const cdata = data.map((each) => {
    
          return  {time: each[0]/1000, open: parseFloat(each[1]), high: parseFloat(each[2]), low: parseFloat(each[3]), close: parseFloat(each[4]) }
      });
      //setIncoming(cdata);
      console.log(chartStore.timeFrame);
      chartStore.addhistory(cdata);
      setLoader(true);
    });
    
  }



  const pickTimeframe = (datatime) => {
    console.log(datatime, "called oooooooo");
    setActiveTime(datatime);
    chartStore.changeTimeframe(datatime);
  }


  

  useEffect(() => {

    //call to get old history
    getfromapi();



    //websocket onopen event listener
    socket.onopen = () => {
        console.log("connected websocket main component");
    };

   
    //on each change push the data from the websocket to the observable store
    socket.onmessage = (event) => {
      console.log("HI");
      console.log("Something is wrong")
      //console.log(event.data);
      structuredata(JSON.parse(event.data));
    };

   
    


  }, [loader, activetime]);
  
  
  


    const colors = {
        backgroundColor : 'white',
        lineColor : '#2962FF',
        textColor : 'black',
        areaTopColor : '#2962FF',
        areaBottomColor : 'rgba(41, 98, 255, 0.28)',
    }



  return (
    <div className='chart-content-container'>


       
       {chartStore.Chartdata.length !== 0 ?
          <>
           <Timeframe className='charty' pickTimeframe={pickTimeframe} />

            <Chart 
            colors={colors} 
            data={chartStore.Chartdata} 
            className='chart-container' 
            />
          </>
           :

           <div>Loading...</div>      
       }


    </div>
  )
}
