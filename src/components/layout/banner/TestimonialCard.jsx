import React, { useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Nayana",
    title: "Trivandrum",
    text: "Completely changed my child’s attitude towards studies!",
    subtext:
      "My daughter, studying in Grade 9 under the IGCSE syllabus, struggled due to language barriers. We tried several options before a school teacher recommended 1-to-1 Home Tutors. Within 4 months, her tutor helped her understand concepts clearly, and now she’s doing much better. The personalized attention and regular communication from the team are commendable.",
    image: "",
  },
  {
    name: "Ancy Ajeesh",
    title: "Kottayam",
    text: "Exceptional Personalized Tutoring!",
    subtext:
      "The tutors are highly qualified and took time to understand my child’s learning needs. Their flexible approach and one-on-one sessions have made a visible difference in my child’s academic performance and confidence.",
    image: "",
  },
  {
    name: "Prasanna",
    title: "Ernakulam",
    text: "Perfect During the Pandemic",
    subtext:
      "My son Siddhu, in Grade 12, benefited greatly from individual online classes. Dr. Sandeep’s support in Biology and Chemistry was exceptional during this tough time.",
    image: "",
  },
  {
    name: "Jayakumar",
    title: "Abudabi",
    text: "Support That Mattered During COVID",
    subtext:
      "Our granddaughter received amazing support through online classes from 1-to-1 Home Tutors. It really helped her keep up with her studies during the pandemic.",
    image: "",
  },
  {
    name: "Rakesh Bahuleyan",
    title: "Kollam",
    text: "Safe and Trusted for Young Learners",
    subtext:
      "For my son in Grade 1, I chose this centre on a friend’s recommendation. Female tutors ensured a safe and nurturing learning environment, and we didn’t have to worry about transportation. Rates are affordable too!",
    image: "",
  },
];

const MAX_CHAR = 180;

function ReadMore({ text }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > MAX_CHAR;

  return (
    <Typography
      variant="body2"
      sx={{
        color: "#333",
        fontStyle: "italic",
        lineHeight: 1.6,
        mb: 1,
      }}
    >
      {expanded || !isLong ? text : `${text.substring(0, MAX_CHAR)}... `}
      {isLong && (
        <Box
          component="span"
          onClick={() => setExpanded(!expanded)}
          sx={{
            color: "#1976d2",
            fontWeight: 500,
            cursor: "pointer",
            ml: 0.5,
            textDecoration: "underline",
          }}
        >
          {expanded ? "Read less" : "Read more"}
        </Box>
      )}
    </Typography>
  );
}

export default function TestimonialCard() {
  return (
    <div>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#333", mb: 4 }}
      >
        Parent Testimonials
      </Typography>

      <Container
        maxWidth="xl"
        sx={{
          py: 8,
          backgroundColor: "#f0f2f5",
          "& .swiper-pagination": {
            mt: "20px",
            position: "relative",
          },
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          loop
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  height: 480,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{
                      width: 72,
                      height: 72,
                      mx: "auto",
                      mb: 2,
                      fontSize: 24,
                      bgcolor: "#ff6b6b",
                      color: "#fff",
                    }}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>

                  <FormatQuoteIcon
                    sx={{ color: "#ff6b6b", fontSize: 32, mb: 1 }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#333",
                      fontStyle: "italic",
                      mb: 2,
                      fontWeight: "bold",
                    }}
                  >
                    “{testimonial.text}”
                  </Typography>

                  <ReadMore text={testimonial.subtext} />
                </Box>

                <Box mt={2}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "#222" }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#777", fontSize: "0.75rem" }}
                  >
                    {testimonial.title}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
