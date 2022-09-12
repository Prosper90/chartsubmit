import { action, makeObservable, observable } from "mobx";


export default class Storedata {
      Chartdata = [];
      timeFrame = '1m';


    constructor() {
        makeObservable(this, {
          Chartdata: observable,
          timeFrame: observable,
          addhistory: action,
          addwebsocket: action
        })
    }


addhistory(data) {
    //console.log(data);
    this.Chartdata = [...data];
}


addwebsocket(data) {
    console.log("mobx store called");
    this.Chartdata.push(data);
}


changeTimeframe(data) {
    this.timeFrame = data;
}


}

export const chartStore = new Storedata();