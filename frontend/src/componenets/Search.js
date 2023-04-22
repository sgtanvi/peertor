import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

function Search() {

  const classOptions = ['MATH 39', 'CS146', 'LING21']
  return (
    <div style={{position:"flex", margin:"20px"}}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={classOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Class" />}
      />
    </div>
  );
}

export default Search;