import { Link } from "gatsby"
import React from "react"
import YouTube from "react-youtube"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function VideoCard(props) {
  const classes = useStyles()

  const videos = 
   [
      {
        id: 1,
        releasedate: "Week of 3/30",
        title: "Passing",
        linkname: "LDATBX4NOSc",
        owner: "Coach Ashley",
      },
      {
        id: 2,
        releasedate: "Week of 3/30",
        title: "Dribbling",
        linkname: "qP7fmMs4awE",
        owner: "Coach Ashley",
      },
      {
        id: 3,
        releasedate: "Week of 3/30",
        title: "Juggling",
        linkname: "sruX3bPrqi4",
        owner: "Coach Ashley",
      },
      {
        id: 4,
        releasedate: "Week of 4/6",
        title: "Part I",
        linkname: "hCZQUH-eCJg",
        owner: "Coach Ashley",
      },
      {
        id: 5,
        releasedate: "Week of 4/6",
        title: "Part II",
        linkname: "pNGMjZzVf50",
        owner: "Coach Ashley",
      },
      {
        id: 6,
        releasedate: "Week of 4/6",
        title: "Part III",
        linkname: "cuTM5sm8Onc",
        owner: "Coach Ashley",
      },
              {
        id: 7,
        releasedate: "March 26th",
        title: "Remote Training Session 1",
        linkname: "klj15Nrtak4",
        owner: "Coach Kevin",
      },
      {
        id: 8,
        releasedate: "April 1st",
        title: "Remote Training Session 2",
        linkname: "cvBA9rL4dVQ",
        owner: "Coach Kevin",
      },
      {
        id: 9,
        releasedate: "April 4th",
        title: "Remote Training Session 3",
        linkname: "sYgOeQd5xyI",
        owner: "Coach Kevin",
      },
    ]
  

  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      {videos
      .filter((video) => video.owner === props.owner && video.releasedate === props.releasedate)
      .map((video, index) => (
        <Grid item direction="column">
          <h3 style={{ textAlign: "center" }}>{video.title}</h3>
          <YouTube videoId={video.linkname}></YouTube>
        </Grid>
      ))}
    </Grid>
  )
}
