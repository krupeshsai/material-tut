import React from 'react'
import {Typography} from "@material-ui/core"
import {Button} from '@material-ui/core';
import { Container } from '@material-ui/core';
import AdbOutlinedIcon from '@material-ui/icons/AdbOutlined';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

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
      disableElevation
    
      endIcon={<KeyboardArrowRightIcon/>}>Submit</Button>

      {/* icons */}
      <br />
      <AdbOutlinedIcon />
      <AdbOutlinedIcon color = "secondary" fontSize="large"/>

    </Container>
  )
}
