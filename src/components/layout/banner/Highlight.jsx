import {
  Mosque,
  Phone,
  Person,
  AccessTime,
  Computer,
} from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const features = [
  { icon: <Mosque />, title: "Expert Tutors", subtitle: "Highly qualified, verified, and experienced tutors for all subjects and curriculums (CBSE, ICSE, IGCSE, State Board, etc.)." },
  { icon: <Phone />, title: "Dedicated Support", subtitle: "24/7 assistance for queries, scheduling, and academic concerns." },
  { icon: <AccessTime />, title: "Online & Offline Classes", subtitle: "Home tuition and live interactive online sessions to ensure seamless learning.", highlight: true  },
  { icon: <Person />, title: "One-on-One Attention", subtitle: "Individualized focus to strengthen weak areas and enhance academic performance." },
  { icon: <Computer />, title: "Safe & Verified Tutors", subtitle: "Background-verified tutors with agreements and identity verification." },
  { icon: <Person />, title: "Real-Time Progress Tracking", subtitle: "Regular feedback, assessments, and updates for parents."},
  { icon: <AccessTime />, title: "Flexible Scheduling", subtitle: "Convenient class timings as per students’ and parents’ availability." },
  { icon: <Computer />, title: "Virtual Classroom", subtitle: "Seamless Experience" },
];

export default function Highlight() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "63vh",
        bgcolor: "white",
        py: 8,
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2, textAlign: "center" }}>
        <Typography variant="subtitle1" color="primary" fontWeight="medium">
          What We're Offering to the Parents
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="text.primary"
          sx={{ mb: 4 }}
        >
          Our Highlights
        </Typography>
        <Swiper
          modules={[Navigation,Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={5} 
          pagination={{ clickable: true }}
          loop={true} 
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, 
          }}
          style={{ paddingBottom: "40px" }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <FeatureCard {...feature} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Selected Feature Description */}
        {/* <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" color="text.primary">
            One to One Teaching
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, subtitle, highlight }) {
  return (
    <Paper
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      p: 3,
      boxShadow: 3,
      bgcolor: highlight ? "#1A1A2E" : "white",
      color: highlight ? "white" : "text.primary",
      borderRadius: "12px",
      gap:"10px",
      width: "180px",  // Set a fixed width
      height: "280px", // Set a fixed height
    }}
  >
    <Box
      sx={{
        color: highlight ? "yellow" : "primary.main",
        mb: 2,
        fontSize: 40,
      }}
    >
      {icon}
    </Box>
    <Typography variant="h6" fontWeight="bold" sx={{ minHeight: "50px" }}>
      {title}
    </Typography>
    <Typography
      variant="body2"
      color={highlight ? "white" : "text.secondary"}
      sx={{ flexGrow: 1, textAlign: "center", maxWidth: "90%" }}
    >
      {subtitle}
    </Typography>
  </Paper>
  );
}
