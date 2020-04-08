import { Link } from "gatsby"
import React from "react"


import Grid from "@material-ui/core/Grid"
import Image from "../components/image"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
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
        <Grid item sm={6} key={coach.id}>
          <Link to={`${coach.page}`}>
            <Card className={classes.root}>
              <CardActionArea>
      
                  <Image />
               
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center" }}
                  >
                    {coach.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
