import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SelectLabels = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 ,}}>
        <InputLabel id="demo-simple-select-autowidth-label">คำนำหน้า</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          label="คำนำหน้า"
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={10}>นาย</MenuItem>
          <MenuItem value={21}>นาง</MenuItem>
          <MenuItem value={22}>นางสาว</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}