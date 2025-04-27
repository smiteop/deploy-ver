// import Image from "next/image";
import { Favorite } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Grid,
} from "@mui/material";
import bannercard from "../../../assets/bannercard.png"
import bannercard2 from "../../../assets/bannercard2.png"
import bannerbg from "../../../assets/bannerbg.png"

export default function HeroBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${bannerbg})`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        pt: { xs: 2, md: 4, lg: 5 },
        pb: { xs: 6, md: 8, lg: 10 },
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        <Grid container spacing={4} alignItems="center" textAlign={"start"}>
          {/* Left Column - Text Content */}
          <Grid item xs={12} lg={6}>
            <Typography variant="h3" fontWeight="bold" color="#2d2a3a">
              Premium Online & Offline Home Tutoring with Exceptional Support
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, maxWidth: 400 }}
            >
              Unlock your child's potential with expert tutors, engaging lessons, and personalized progress tracking for lasting success
            </Typography>

          </Grid>

          {/* Right Column - Course Cards */}
          <Grid item xs={12} lg={6}>
  <Grid container spacing={3}>
    {/* Course Card 1 - Lower position */}
    <Grid item xs={12} sm={6} sx={{ mt: 6 }}>
      <CourseCard
        image={bannercard}
        title="Online Personal Tutor"
        subtitle="Expert-led personalized sessions to help students excel in their academics"
        price="$199"
      />
    </Grid>

    {/* Course Card 2 - Slightly above */}
    <Grid item xs={12} sm={6} sx={{ mt: 0 }}>
      <CourseCard
        image={bannercard2}
        title="Personal Home Tutor"
        subtitle="A smart, qualified tutor visits your home to improve learning skills and foster self-learning."
        price="$199"
      />
    </Grid>
  </Grid>
</Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// Course Card Component
function CourseCard({ image, title, subtitle, price }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        height: 400,
        marginBlock: 13,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <img
          src={image}
          alt={title}
          width={350}
          height={200}
          style={{ width: "100%", borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -10,
            right: 10,
            bgcolor: "error.main",
            color: "white",
            p: 1,
            borderRadius: "50%",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {price}
        </Box>
      </Box>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

