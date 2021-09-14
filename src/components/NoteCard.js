import { Card, IconButton, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";


const NoteCard = ({prop, remove}) => {
    return (
        <div>
        <Card elevation={3}>
            <CardHeader
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