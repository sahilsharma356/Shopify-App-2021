import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    media: {
        maxWidth: '100%',
        maxHeight: '100%'
    },

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: '5%'
    },
    gridList: {
        maxHeight: '100%',
        maxWidth: '100%',
    },
    gridListTile: {
        // backgroundColor: "black",
        marginTop: "10%"
    },
    footer: {
        maxHeight: '100%',
        maxWidth: '100%'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


const ImageList = ({images}) => {
    // {console.log("logging image list")}
    // {console.log(images)}
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList cellHeight={375} spacing={15} className={classes.gridList} cols={3}>
                {images && images.map((tile) => (
                        <GridListTile className={classes.gridList} key={tile.id}>  
                            <img src={tile.source}/>
                            <GridListTileBar
                                className = {classes.gridListTile}
                                title={tile.title}
                                subtitle={
                                    <>
                                        <span>{tile.authorFirstName + " " + tile.authorLastName + ",  "}</span>
                                        <span>{moment(tile.createdAt.toDate()).calendar()}</span>
                                    </>
                                }
                            />
                        </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default ImageList