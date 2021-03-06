import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      position: "relative",
      height: "100%",
      width: drawerWidth,
      marginTop: 150,
    }
  })
);

function SideBar(){
  const classes = useStyles();
  return (
    <div>
        <Drawer open={true} variant="permanent">
            <List className={classes.drawer}>
              {['今日やること', 'リスト1', 'リスト2', 'リスト3'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon><ListAltIcon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            <IconButton edge="start" aria-label="comments">
              <AddIcon />
            </IconButton>
            <TextField id="standard-basic" label="新しいリスト" />
            </List>
        </Drawer>
    </div>
  );
}

export default SideBar;