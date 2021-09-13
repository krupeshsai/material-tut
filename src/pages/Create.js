import React, { useState } from 'react'
import {Typography} from "@material-ui/core"
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  field : {
    marginTop: 20,
    marginBottom:20

  }
})

export default function Create() {

  const classes = useStyles()
  const [title,setTitle] = useState("");
  const [details , setDetails] =useState("")
  const [titleError,setTitleError] = useState(false);
  const [detailsError , setDetailsError] =useState(false)


  const handleClick = (e) => {
    e.preventDefault()

    if(title && details){
      console.log(title)
      console.log(details)
    }

    setTitleError(false)
    setDetailsError(false)

    if(title === ''){
      setTitleError(true)
    }
    if(details === ''){
      setDetailsError(true)
    }
  }

  
  return (
    <Container>
      <Typography 
      variant ="h6"
       color = "textSecondary" 
       component = "h2"
      gutterBottom>Create a New Note</Typography>

      <form noValidate autoComplete="off" onSubmit ={handleClick}>
        <TextField
        onChange ={(e)=>{setTitle(e.target.value)}}
        className={classes.field} 
        label="Note title"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={titleError}
        ></TextField>

        <TextField
         onChange ={(e)=>{setDetails(e.target.value)}}
        className={classes.field} 
        label="Details"
        variant="outlined"
        color="secondary"
        fullWidth
        multiline
        rows={4}
        required
        error={detailsError}
        ></TextField>

        <Button 
        type="submit" 
        color="secondary" 
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}>
        Submit
      </Button>
      </form>

    </Container>
  )
}
