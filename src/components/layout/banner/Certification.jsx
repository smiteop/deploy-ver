"use client";
import {
  Grid,
  Typography,
  Button,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PersonOutline } from "@mui/icons-material";

export default function Certification() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" sx={{ py: 8, height: "600px" }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Decorative elements */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "5%", md: "15%" },
            top: "20%",
            width: { xs: 60, md: 80 },
            height: { xs: 60, md: 80 },
            borderRadius: "50%",
            backgroundColor: "#ff7f7f",
            zIndex: -1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            right: { xs: "10%", md: "20%" },
            top: "30%",
            width: { xs: 80, md: 100 },
            height: { xs: 80, md: 100 },
            borderRadius: "50%",
            backgroundColor: "#ffeb3b",
            opacity: 0.8,
            zIndex: -1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            right: { xs: "15%", md: "25%" },
            top: "15%",
            width: { xs: 30, md: 40 },
            height: { xs: 30, md: 40 },
            borderRadius: "50%",
            border: "2px solid #ff5252",
            zIndex: -1,
          }}
        />

        {/* Main content */}
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              color: "#ff5252",
              fontWeight: 500,
              mb: 2,
            }}
          >
            AFFORDABLE CERTIFICATION
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Get Your Quality Skills Certificate
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Through Online Exam
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              mx: "auto",
              mb: 4,
              px: 2,
            }}
          >
            Students friendly pricing for the certificate programs helps
            individuals to get their skill certificate easier than ever!
          </Typography>

          <Button
            variant="contained"
            startIcon={<PersonOutline />}
            sx={{
              bgcolor: "#ff5252",
              px: 3,
              py: 1.5,
              borderRadius: 1,
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#e03e3e",
              },
            }}
          >
            Get Started Now
          </Button>
        </Grid>

        {/* Testimonials section */}
        <Grid item xs={12} sx={{ mt: 12 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Parent Testimonials
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
