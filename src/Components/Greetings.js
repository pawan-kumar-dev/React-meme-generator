import React, { memo } from "react";
const Greeting = () => {
     const hour = new Date().getHours();
     let timeDay;
     if (hour < 12) {
          timeDay = `Morning`;
     } else if (hour > 12 && hour < 18) {
          timeDay = `Afternoon`;
     } else {
          timeDay = `Night`;
     }
     return <h1>Welcome, It's {timeDay} Time</h1>;
};
export default memo(Greeting);
