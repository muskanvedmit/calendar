import React, { useEffect, useState } from 'react';
import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getDeveloper, getTimesheetDataById } from './masterDeveloper';
import { Grid, Modal, Box, Typography, Autocomplete, TextField, InputLabel, Divider, IconButton } from '@mui/material';
import CustomToolbar from './CustomeToolbar';
import CloseIcon from '@mui/icons-material/Close';

const localizer = momentLocalizer(moment);

function Calendar123() {
  const [developers, setDevelopers] = useState([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [timesheetData, setTimesheetData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [previousSelectedDeveloper, setPreviousSelectedDeveloper] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDeveloper();
        const developerList = response.data.master_developer;
        setDevelopers(developerList);
        if (developerList.length > 0) {
          setSelectedDeveloper(developerList[0]);
          setPreviousSelectedDeveloper(developerList[0]);
        }
      } catch (error) {
        console.error("Error fetching developer data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        if (selectedDeveloper) {
          const response = await getTimesheetDataById(selectedDeveloper.Id);
          setTimesheetData(response.data.time_sheet_data);
        }
      } catch (error) {
        console.error("Error fetching timesheet data:", error);
      }
    };

    fetchData1();
  }, [selectedDeveloper]);

  const handleDeveloperChange = (event, newValue) => {
    setSelectedDeveloper(newValue);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSearchFieldFocusOut = () => {
    if (!selectedDeveloper && previousSelectedDeveloper) {
      setSelectedDeveloper(previousSelectedDeveloper);
    }
  };

  const filteredTimesheetData = timesheetData.filter(data => data.hours > 0);

  const calendarEvents = filteredTimesheetData.map(data => ({
    title: `Hours: ${data.hours}`,
    start: new Date(data.date),
    end: moment(data.date).add(data.hours, 'hours').toDate(),
    projectName: `Project ${data.project_name}`,
    actualHours: data.actual_hours
  }));

  return (
    <div className="app-container">
      <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <InputLabel sx={{ textAlign: {xs:'center',sm:'start'} }} style={{fontSize:30, fontWeight:800, color:'black' }}>Developer Summary
        </InputLabel>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Autocomplete
          clearIcon={null}
          value={selectedDeveloper}
          onChange={handleDeveloperChange}
          options={developers}
          getOptionLabel={(option) => option.Name}
          ListboxProps={{
            style: {
              maxHeight: 200,
              overflow: 'auto',
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              variant="outlined"
              onBlur={handleSearchFieldFocusOut} // Call handleSearchFieldFocusOut on focus out
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider style={{borderColor:'black', borderBottomWidth: 2}} />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 780,marginTop: 10,marginBottom: 10 }}
          onSelectEvent={handleEventClick}
          components={{ toolbar: CustomToolbar }}
        />
        </Grid>
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          width: {xs:350 ,sm:450},
          height: {sm:220 ,md : 250},
          bgcolor: 'background.paper',
          borderRadius: '5px',
          boxShadow: 24,
          p: 2,
         
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          {selectedEvent && (
            <>
            <Box sx={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid black'}}>
              <Typography style={{fontWeight:'bold'}} id="modal-modal-title" variant="h6" component="h2">
                Event Details
              </Typography>
              <IconButton onClick={handleCloseModal}>
              <CloseIcon/>
              </IconButton>
            </Box>
            <Box sx={{mt :4}}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} mt={1}>
                <Typography variant="body1" fontWeight="bold">
                  Project Name:
                </Typography>
                <Typography variant="body1">
                  {selectedEvent.projectName}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="body1" fontWeight="bold">
                  Hours:
                </Typography>
                <Typography variant="body1">
                  {selectedEvent.title.replace('Hours: ', '')}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body1" fontWeight="bold">
                  Actual Hours:
                </Typography>
                <Typography variant="body1">
                  {selectedEvent.actualHours}
                </Typography>
              </Box>
            </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Calendar123;
