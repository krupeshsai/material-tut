import { Avatar, Card, IconButton, makeStyles, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { yellow, green, pink, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar:{
        backgroundColor:(prop)=>{
            if (prop.category === 'work') {
                return yellow[700]
              }
              if (prop.category === 'money') {
                return green[500]
              }
              if (prop.category === 'todos') {
                return pink[500]
              }
              return blue[500]
        }
    }
})

const NoteCard = ({prop, remove}) => {

    const classes = useStyles(prop)

    return (
        <div>
        <Card elevation={3}>
            <CardHeader 
            avatar={<Avatar className={classes.avatar}>{prop.category[0].toUpperCase()} </Avatar>}
                action={
                    <IconButton onClick={() => remove(prop.id) }>
                        <DeleteOutlined/>
                    </IconButton>
                }
                title={prop.title}
                subheader={prop.category}
            />

            <CardContent>
                <Typography variant = "body2" color = "textSecondary">
                    {prop.details}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
}
 
export default NoteCard;