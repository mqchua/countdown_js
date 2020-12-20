import React, {useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './styles.js';

function Counter() {

    const classes = useStyles();

    const difference = +new Date(`${2021}-01-02`) - +new Date();

    const [seconds, setSeconds] = useState(Math.floor((difference / 1000) % 60))
    const [minutes, setMinutes] = useState(Math.floor((difference / 1000 / 60) % 60))
    const [hours, setHours] = useState(Math.floor((difference / (1000 * 60 * 60)) % 24))
    const [days, setDays] = useState(Math.floor(difference / (1000 * 60 * 60 * 24)))
  
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


    return (<div className={classes.root}>
 
            <Grid className={classes.grid} container spacing={0} justify="center">
                <Grid item xs={2} className={classes.timeBox}>
                    {daysRounded} <br></br> Days 
                </Grid>

                <Grid item xs={2} className={classes.timeBox}>
                    {hoursRounded} <br></br> Hours
                </Grid>

                <Grid item xs={2} className={classes.timeBox}>
                    {minutesRounded} <br></br> Min
                </Grid>

                <Grid item xs={2} className={classes.timeBox}>
                    {secondsRounded} <br></br> Sec
                </Grid>
            </Grid>

            
    
            {daysRounded}:{hoursRounded}:{minutesRounded}:{secondsRounded}
    </div>);
  }

  export default Counter;