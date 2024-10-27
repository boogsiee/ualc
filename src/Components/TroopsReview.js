import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Troupe from './Troupe';
        
const TroopsReview = () => {
        const [age, setAge] = React.useState('');
        const [open, setOpen] = React.useState(false);
    
        const handleChange = (event) => {
        setAge(event.target.value);
        };
    
        const handleClose = () => {
        setOpen(false);
        };
    
        const handleOpen = () => {
        setOpen(true);
        };
    
  return (
    <div>
        <div className='select troop'>
            <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
            Choose a troop for recording
            </Button>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-controlled-open-select-label">Troop</InputLabel>
                <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Alpha</MenuItem>
                <MenuItem value={2}>Bravo</MenuItem>
                <MenuItem value={3}>Charlie</MenuItem>
                </Select>
            </FormControl>
      </div>
      <Troupe/>
    </div>
  )
}

export default TroopsReview