import React from 'react'
import {Typography} from "@material-ui/core"
import {Button} from '@material-ui/core';
import { Container } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  btn:{
    fontSize: 10,
    backgroundColor:"green",
    "&:hover" :{
      backgroundColor:"blue"
    }
  },
  title :{
    textDecoration: "underline",
    marginBottom: 20
  }
})


export default function Create() {
  const classes = useStyles()

  return (
    <Container>
      <Typography 
      className={classes.title}
      variant ="h6"
       color = "textSecondary" 
       component = "h2"
      gutterBottom>Create a New Note</Typography>

      <Button 
      className={classes.btn}
      onClick= {()=>console.log("You clicked me")}
      type ="submit" 
      color ="secondary"
      variant="contained"
      disableElevation
      endIcon={<KeyboardArrowRightIcon/>}>Submit</Button>


    </Container>
  )
}
