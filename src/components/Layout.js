import { Drawer, makeStyles, Typography } from "@material-ui/core";
import { List , ListItem , ListItemIcon , ListItemText} from "@material-ui/core"
import { AppBar, Toolbar } from "@material-ui/core"
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import { format } from "date-fns";
const drawerWidth = 240;

const useStyle = makeStyles((theme)=> {
    return{

        page:{
            background : "#f9f9f9",
            width:"100%",
            padding: theme.spacing(3)
    
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
        },
        title: {
            padding: theme.spacing(2),
          },
          appBar:{
            width: `calc(100% - ${drawerWidth}px)`
          },
          toolBar: theme.mixins.toolbar,
          date:{
              flexGrow: 1
          }
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
        {/* AppBar */}
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
                <Typography className={classes.date}>{format(new Date() , "do MMMM Y")}</Typography>
                <Typography>Sammy</Typography>
            </Toolbar>
        </AppBar>

        <Drawer 
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}}>
            <div>
                <Typography variant="h5" className={classes.title}>
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


        <div className={classes.page}>
        <div className={classes.toolBar}></div>
        {children}
        </div>
       
        </div>
    )
}
 
export default Layout;