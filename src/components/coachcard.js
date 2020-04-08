import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function CoachCard() {
  const classes = useStyles()

  const coachesInfo = [
    {
      id: 1,
      name: "Coach Ashley",
      page: "/page-3/",
    },
    {
      id: 2,
      name: "Coach Kevin",
      page: "/page-2/"
    },
  ]
    
  

  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      {coachesInfo.map((coach, index) => (
        <Grid item sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/imgs/puma-ball.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {coach.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Click below to access the YouTube tutorials
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" color="primary">
                <Link to={`${coach.page}`}>Enter</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
