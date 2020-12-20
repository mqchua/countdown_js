import React, {useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';

function Counter() {

    const [seconds, setSeconds] = useState(1)
    const [minutes, setMinutes] = useState(1)
    const [hours, setHours] = useState(1)
    const [days, setDays] = useState(0)
  
    function updateTime() {
      if (hours == 0 && minutes == 0 && seconds == 0) {
        
      }
      else {
        if (minutes == 0 && seconds == 0) {
            setHours(hours => hours - 1);
            setMinutes(59);
            setSeconds(59);
        } else if (seconds == 0) {
            setMinutes(minutes => minutes - 1);
            setSeconds(59);
        } else{
          setSeconds(seconds => seconds - 1);
        }
      }
    }

    useEffect(() => {
      // use set timeout and be confident because updateTime will cause rerender
      // rerender mean re call this effect => then it will be similar to how setinterval works
      // but with easy to understand logic
      const token = setTimeout(updateTime, 1000)
  
      return () => clearTimeout(token);
      
    })

    function minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n;
    }

    const hoursRounded = minTwoDigits(hours);
    const minutesRounded = minTwoDigits(minutes);
    const secondsRounded = minTwoDigits(seconds);
    const daysRounded = minTwoDigits(days);


    return (<div>

        <Grid container spacing={0} >
            time: {hoursRounded}:{minutesRounded}:{secondsRounded}
        </Grid>

    </div>);
  }

  export default Counter;