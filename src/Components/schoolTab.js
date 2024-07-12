import React, { useState } from 'react';
import './schoolTab.css';
import Students from '../Components/Resources/students.jpeg';
import Button from '../Components/Button';
import { Tabs, Tab, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTab-root': {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#00008B',
    },
  },
});

const SchoolTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="box2t">
      <Box sx={{ width: '100%', marginTop: 4 }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="tabs example" sx={{ marginBottom: 2 }}>
          <Tab label="In School Preparation" />
          <Tab label="Revision" />
          <Tab label="Mock Tests" />
          <Tab label="Feedback" />
          <Tab label="Study Material" />
          <Tab label="Counselling" />
          <Tab label="Career Guidance" />
        </StyledTabs>
        <Paper elevation={3} sx={{ padding: 2, borderRadius: '16px' }}>
          {value === 0 && 
          <Box>
            <div class="container">
              <div class="text-content">
                <h2 class="heading2">In School Preparation</h2>
                <p class="para2">We provide in school preparation without disturbing the schedule of your curriculum</p>
                <div class="button2"><Button/></div>
              </div>
              <div class="image-content">
                <img src={Students} alt="pace" height="263px" width="561px"/>
              </div>
            </div>
          </Box>
          }
          {value === 1 && <Box>
            <div class="container">
              <div class="text-content">
                <h2 class="heading2">Revision</h2>
                <p class="para2">We provide in school preparation without disturbing the schedule of your curriculum</p>
                <div class="button2"><Button/></div>
              </div>
              <div class="image-content">
                <img src={Students} alt="pace" height="263px" width="561px"/>
              </div>
            </div>
          </Box>}
          {value === 2 && <Box>
            <div class="container">
              <div class="text-content">
                <h2 class="heading2">Mock Tests</h2>
                <p class="para2">We provide in school preparation without disturbing the schedule of your curriculum</p>
                <div class="button2"><Button/></div>
              </div>
              <div class="image-content">
                <img src={Students} alt="pace" height="263px" width="561px"/>
              </div>
            </div>
          </Box>}
          {value === 3 && <Box>
            <div class="container">
              <div class="text-content">
                <h2 class="heading2">Feedback</h2>
                <p class="para2">We provide in school preparation without disturbing the schedule of your curriculum</p>
                <div class="button2"><Button/></div>
              </div>
              <div class="image-content">
                <img src={Students} alt="pace" height="263px" width="561px"/>
              </div>
            </div>
          </Box>}
          {value === 4 && <Box>
            <div class="container">
              <div class="text-content">
                <h2 class="heading2">Study Material</h2>
                <p class="para2">We provide in school preparation without disturbing the schedule of your curriculum</p>
                <div class="button2"><Button/></div>
              </div>
              <div class="image-content">
                <img src={Students} alt="pace" height="263px" width="561px"/>
              </div>
            </div>
          </Box>}
          {value === 5 && <Box>
            <div class="container">
              <div class="text-content">
                <h2 class="heading2">Counselling</h2>
                <p class="para2">We provide in school preparation without disturbing the schedule of your curriculum</p>
                <div class="button2"><Button/></div>
              </div>
              <div class="image-content">
                <img src={Students} alt="pace" height="263px" width="561px"/>
              </div>
            </div>
          </Box>}
          {value === 6 && <Box>
            <div class="container">
              <div class="text-content">
                <h2 class="heading2">Career Guidance</h2>
                <p class="para2">We provide in school preparation without disturbing the schedule of your curriculum</p>
                <div class="button2"><Button/></div>
              </div>
              <div class="image-content">
                <img src={Students} alt="pace" height="263px" width="561px"/>
              </div>
            </div>
          </Box>}
        </Paper>
      </Box>
    </div>
  );
};

export default SchoolTab;
