import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        p: 1,
        color:'goldenrod',
      }}
    >
      <Container maxWidth="ss">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="goldenrod" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="goldenrod">
             Discover comfort and style with our exquisite furniture collection.
             Elevate your home with quality craftsmanship, timeless designs, and curated pieces that reflect your unique taste.
              Welcome to a world of sophistication and comfort.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="goldenrod" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="goldenrod">   
            Address:
            3rd Floor, Court House, Mumbai- 400 002, Maharashtra, India
            </Typography>
            <Typography variant="body2" color="goldenrod">
              Email: furniland@gmail.com
            </Typography>
            <Typography variant="body2" color="goldenrod">
              Phone: +91 9456723105
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="goldenrod" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="goldenrod" align="center">
            {"Copyright © "}
            <Link color="inherit" href="http://localhost:3000/">
              FurniLand
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}