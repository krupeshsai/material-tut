import { Drawer, makeStyles, Typography } from "@material-ui/core";
import { List , ListItem , ListItemIcon , ListItemText} from "@material-ui/core"

import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";

const drawerWidth = 240;

const useStyle = makeStyles({
    page:{
        background : "#f9f9f9",
        width:"100%"
    },
    drawer:{
        width: drawerWidth
    },
    drawerPaper : {
        width: drawerWidth
    },
    root:{
        display : "flex"
    },
    active:{
        background:"#f4f4"
    }
})

const Layout = ({ children }) => {

    const menuItems =[
        {
            text: "My Notes",
            icon: <SubjectOutlined color="secondary" />,
            path: "/"
        },
        {
            text:"Create Notes",
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: "/create"
        }


    ]

    const classes = useStyle()
    const history = useHistory()
    const location = useLocation()

    return (
        <div className= {classes.root}>
        <Drawer 
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}}>
            <div>
                <Typography variant="h5">
                    Super Notes
                </Typography>  
            </div>

            {/* list / links */}

            <List>
                {menuItems.map(menu => (
                    <ListItem 
                    key = {menu.text} 
                    button
                    onClick= {()=> history.push(menu.path)}
                    className={location.pathname === menu.path ? classes.active : null}>
                        <ListItemIcon> {menu.icon}</ListItemIcon>
                        <ListItemText primary={menu.text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>


        <div className={classes.page}>{children}</div>
        </div>
    )
}
 
export default Layout;