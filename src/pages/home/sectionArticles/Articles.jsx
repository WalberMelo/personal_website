import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import articlesData from "./articlesData.json";

export default function Articles() {
  return (
    <main>
      <Grid container spacing={1} sx={{ mb: 2 }}>
        {articlesData.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 450 }}>
              <CardMedia
                component="img"
                alt={article.title}
                height="200"
                x
                image={article.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  color="inherit"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                  href={article.link}
                >
                  Learn More
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
