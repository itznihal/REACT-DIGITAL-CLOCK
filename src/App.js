import React, { useState } from "react";

const App = () => {
let time = new Date().toLocaleTimeString();

const [currTime , setCurrTime] = useState(time);
// Here time is initial Data
// currTime is set Data
// setCurr Time is Updated Data
// and overhere time --> currTime and
// if we pass sertCurrTime then it pass to currTme


const updateTime = () =>{

  time = new Date().toLocaleTimeString();
  setCurrTime(time);


};
setInterval(updateTime , 1000);


return(
<>
<div id="heading">
<h1 id="h22">{currTime}</h1>
</div>
</>);

}

export default App;
