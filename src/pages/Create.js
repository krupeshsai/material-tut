import React from 'react'
import {Typography} from "@material-ui/core"
import {Button} from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import { Container } from '@material-ui/core';

export default function Create() {
  return (
    <Container>
      <Typography 
      variant ="h6"
       color = "textSecondary" 
       component = "h2"
      gutterBottom>Create a New Note</Typography>
      <Button 
      onClick= {()=>console.log("You clicked me")}
      type ="submit" 
      color ="secondary"
      variant="outlined"
      disableElevation>Submit</Button>

      {/* <ButtonGroup color ="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  )
}
