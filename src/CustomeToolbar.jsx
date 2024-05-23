import React from 'react';
import { IconButton, Box, Button, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TodayIcon from '@mui/icons-material/Today';

const CustomToolbar = (props) => {
  const goToBack = () => {
    props.onNavigate('PREV');
  };

  const goToNext = () => {
    props.onNavigate('NEXT');
  };

  const goToToday = () => {
    props.onNavigate('TODAY');
  };

  const goToDayView = () => {
    props.onView('day');
  };

  const goToWeekView = () => {
    props.onView('week');
  };

  const goToMonthView = () => {
    props.onView('month');
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={1}>
      <Box>
        <IconButton onClick={goToBack}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={goToToday}>
          <TodayIcon />
         {/* <Typography variant="h6" > 
          {props.label}
        </Typography> */}
        </IconButton>
        <IconButton onClick={goToNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box>
        <Button onClick={goToDayView}>Day</Button>
        <Button onClick={goToWeekView}>Week</Button>
        <Button onClick={goToMonthView}>Month</Button>
      </Box>
    </Box>
  );
};

export default CustomToolbar;
