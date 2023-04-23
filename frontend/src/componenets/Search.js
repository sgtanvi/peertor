import React, { useState } from 'react';
import { Autocomplete, TextField, Card, CardContent, CardHeader, Avatar, Button } from '@mui/material';

function Search() {

  const [tutors, setTutors] = useState([
    { id: 1, name: "John Doe", class: "MATH 39", bio: "This is John's bio", calendlyLink: "https://calendly.com/john-doe" },
    { id: 2, name: "Jane Doe", class: "CS146", bio: "This is Jane's bio", calendlyLink: "https://calendly.com/jane-doe" },
    { id: 3, name: "Bob Smith", class: "LING21", bio: "This is Bob's bio", calendlyLink: "https://calendly.com/bob-smith" },
    { id: 4, name: "Alice Johnson", class: "MATH 39", bio: "This is Alice's bio", calendlyLink: "https://calendly.com/alice-johnson" },
    { id: 5, name: "David Lee", class: "CS146", bio: "This is David's bio", calendlyLink: "https://calendly.com/david-lee" },
    { id: 6, name: "Eva Chen", class: "LING21", bio: "This is Eva's bio", calendlyLink: "https://calendly.com/eva-chen" },
  ]);

  const classOptions = ['MATH 39', 'CS146', 'LING21'];

  const handleClassChange = (event, value) => {
    if (value) {
      const filteredTutors = tutors.filter(tutor => tutor.class === value);
      setTutors(filteredTutors);
    } else {
      setTutors([
        { id: 1, name: "John Doe", class: "MATH 39", bio: "This is John's bio", calendlyLink: "https://calendly.com/john-doe" },
        { id: 2, name: "Jane Doe", class: "CS146", bio: "This is Jane's bio", calendlyLink: "https://calendly.com/jane-doe" },
        { id: 3, name: "Bob Smith", class: "LING21", bio: "This is Bob's bio", calendlyLink: "https://calendly.com/bob-smith" },
        { id: 4, name: "Alice Johnson", class: "MATH 39", bio: "This is Alice's bio", calendlyLink: "https://calendly.com/alice-johnson" },
        { id: 5, name: "David Lee", class: "CS146", bio: "This is David's bio", calendlyLink: "https://calendly.com/david-lee" },
        { id: 6, name: "Eva Chen", class: "LING21", bio: "This is Eva's bio", calendlyLink: "https://calendly.com/eva-chen" },
      ]);
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={classOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Class" />}
        onChange={handleClassChange}
      />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
        {tutors.map((tutor) => (
          <Card key={tutor.id} style={{ margin: "10px" }}>
            <CardHeader
              avatar={
                <Avatar aria-label="tutor" src="/static/images/avatar/1.jpg" />
              }
              title={tutor.name}
              subheader={tutor.class}
            />
            <CardContent>
              {tutor.bio}
            </CardContent>
            <Button variant="contained" color="primary" href={`https://calendly.com/${tutor.name.toLowerCase()}`}>
              Schedule a meeting
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
  
}

export default Search;
