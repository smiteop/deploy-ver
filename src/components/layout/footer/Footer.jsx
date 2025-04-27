import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#1e1e4b", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start" textAlign={{ xs: "center", md: "left" }}>
          {/* Company Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
            1 TO 1 Hometutors
            </Typography>
            <Typography variant="body2" color="gray" sx={{ mt: 1, mb: 2 }}>
            1-to-1 Home Tutors was established in 2017 with a vision to transform personalized learning. we connected students 
            with highly qualified tutors for tailored one-on-one sessions. 
            </Typography>
            <Box display="flex" justifyContent={{ xs: "center", md: "start" }}>
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                <IconButton key={index} href="#" sx={{ color: "gray" }}>
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Explore */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Explore
            </Typography>
            <List dense>
              {["Home", "About", "Parents", "Tutors", "Contact"].map((text) => (
                <ListItem key={text} disablePadding>
                  <Typography
                    component="a"
                    href="#"
                    variant="body2"
                    sx={{ color: "gray", textDecoration: "none", "&:hover": { color: "white" } }}
                  >
                    {text}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Resources
            </Typography>
            <List dense>
              {["Sign in", "Tutor Login", "Parent Login", "Blog"].map((text) => (
                <ListItem key={text} disablePadding>
                  <Typography
                    component="a"
                    href="#"
                    variant="body2"
                    sx={{ color: "gray", textDecoration: "none", "&:hover": { color: "white" } }}
                  >
                    {text}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Address */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Address
            </Typography>
            <List dense>
              {[ 
                { icon: <LocationOn sx={{ color: "gray" }} />, text: "Bridge Lane, Opp. Credence Hospital, Ulloor, Trivandrum" },
                { icon: <Phone sx={{ color: "gray" }} />, text: "(+91) 8592939355" },
                { icon: <Email sx={{ color: "gray" }} />, text: "Info@1to1hometutors.com" },
              ].map((item, index) => (
                <ListItem key={index} disablePadding sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ color: "gray", variant: "body2" }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ bgcolor: "gray", my: 4 }} />

        {/* Copyright */}
        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" textAlign="center">
          <Typography variant="body2" color="gray">
          2025 1to1hometutors is Proudly Powered by {' '}
            {/* <Typography component="a" href="#" sx={{ color: "#ff4a6b", textDecoration: "none" }}>
              EnvyTheme
            </Typography> */}
          </Typography>
          <Box display="flex" gap={3} mt={{ xs: 2, md: 0 }}>
            {["Privacy Policy", "Terms & Conditions"].map((text) => (
              <Typography
                key={text}
                component="a"
                href="#"
                variant="body2"
                sx={{ color: "gray", textDecoration: "none", "&:hover": { color: "white" } }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
