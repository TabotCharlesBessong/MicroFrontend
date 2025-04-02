import React from "react";
import { useTheme } from "@mui/material/styles"; // ✅ Correct usage of theme
import {
  Link,
  Container,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Button,
  Box,
} from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

// Copyright Footer Component
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link component={LinkRouter} to="/" color="inherit">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Landing() {
  const theme = useTheme(); // ✅ Hook must be inside the component

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <React.Fragment>
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            py: 8, // Padding (top & bottom)
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Home Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              sx={{ mb: 4 }}
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <LinkRouter to="/pricing">
                  <Button variant="contained" color="primary">
                    Pricing
                  </Button>
                </LinkRouter>
              </Grid>
              <Grid item>
                <LinkRouter to="/about">
                  <Button variant="outlined" color="primary">
                    Learn More
                  </Button>
                </LinkRouter>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Cards Section */}
        <Container sx={{ pt: 8, pb: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    sx={{ pt: "56.25%" }} // 16:9 Aspect Ratio
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading {card}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ backgroundColor: theme.palette.background.paper, py: 6 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
    </React.Fragment>
  );
}
