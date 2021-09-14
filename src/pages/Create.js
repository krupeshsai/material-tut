import React, { useState } from 'react'
import {FormControlLabel, Radio, Typography} from "@material-ui/core"
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useHistory } from 'react-router';

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
  const [category , setCategory] = useState("todo")
  const history = useHistory();


  const handleClick = (e) => {
    e.preventDefault()

    if(title && details) {
      fetch("  http://localhost:7000/notes" , {
        method : "Post",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({title,details, category})
      }).then(()=> {
        console.log("new note added")
        history.push("/")
      })
    
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


      <FormControl>
      <FormLabel>Note Category</FormLabel>
      <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
        <FormControlLabel value="money" control={<Radio/>} label= "Money"/>
        <FormControlLabel value="todo" control={<Radio/>} label= "To Do"/>
        <FormControlLabel value="work" control={<Radio/>} label= "Work"/>
        <FormControlLabel value="reminders" control={<Radio/>} label= "Reminders"/>
      </RadioGroup>
      
    

        <Button className={classes.field} 
        type="submit" 
        color="secondary" 
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}>
        Submit
      </Button>
      </FormControl>
      </form>

     


    </Container>
  )
}
