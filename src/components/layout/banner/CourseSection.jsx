import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import bannercard from "../../../assets/bannercard.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const courses = [
  {
    title: "School Tuitions",
    subtitle: "Offline/Online",
    description:
      "Expert tutoring for all major subjects – Math, Science, English, Social Studies, and Languages – across multiple curricula such as CBSE, ICSE, IGCSE, and State Boards.",
    price: 199,

    image: bannercard,
  },
  {
    title: "College Tuitions",
    subtitle: "Offline/Online",
    description:
      "Customized support for UG/PG students in Science, Mathematics, Economics, Accountancy, Languages, Law, Statistics, Psychology, Sociology, Management, and more.",
    price: 19,

    image: bannercard,
  },
  {
    title: "BTech Tuitions",
    subtitle: "Offline/Online",
    description:
      "Specialized technical coaching in core and advanced subjects for Mechanical, Civil, Electrical, Electronics, Computer Science, Artificial Intelligence, Biomedical Engineering, and others.",
    price: 99,

    image: bannercard,
  },
  {
    title: "Competitive Exam Support",
    subtitle: "Offline/Online",
    description:
      "Comprehensive preparation for NEET, JEE, CUET, UGC NET, PSC, UPSC, KSA Foundation, CAT, MAT, CMAT, GATE, and other competitive exams.",
    price: 99,

    image: bannercard,
  },
  {
    title: "Language Support",
    subtitle: "Offline/Online",
    description:
      "Fluency-focused training in Spoken English, Academic English, Hindi, Malayalam, Tamil, and select foreign languages like French and German.",
    price: 99,

    image: bannercard,
  },
  {
    title: "Music Tuitions",
    subtitle: "Offline/Online",
    description:
      "Personalized training in Vocal and Instrumental Music, including Classical, Contemporary, and Western styles. Learn Keyboard, Guitar, Violin, Drums, and more — from beginner to advanced levels",
    price: 99,

    image: bannercard,
  },
  {
    title: "Writing Skills",
    subtitle: "Offline/Online",
    description:
      "Our expert tutors help students master essay writing, story development, grammar, report writing, and exam-based writing skills — tailored for school and college. Improve clarity, structure, and confidence in written communication.",
    price: 99,

    image: bannercard,
  },
];

function CourseCard({
  title,
  subtitle,
  description,
  price,
  image,
}) {
  return (
    <Card
      sx={{
        width: 400,
        height: 330,
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
      }}
    >

      {/* Course Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="170"
          image={image || "/placeholder.svg"}
          alt={title}
        />
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            bgcolor: "rgba(255,255,255,0.8)",
            p: 1,
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <Favorite color="error" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: -15,
            right: 15,
            bgcolor: "#f44a45",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            borderRadius: "50%",
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 2,
          }}
        >
          ${price}
        </Box>
      </Box>

      {/* Course Details */}
      <CardContent sx={{ px: 2, pt: 1.5, pb: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold" color="#1a1a2e">
            {title}
          </Typography>

          {subtitle && (
            <Box
              sx={{
                backgroundColor:
                  subtitle.toLowerCase().includes("online") &&
                    !subtitle.toLowerCase().includes("offline")
                    ? "#d0f2ff"
                    : subtitle.toLowerCase().includes("offline") &&
                      !subtitle.toLowerCase().includes("online")
                      ? "#ffe0e0"
                      : "#f3f3f3",
                color: "#1a1a2e",
                fontSize: "12px",
                px: 1.5,
                py: 0.5,
                borderRadius: "10px",
                textTransform: "capitalize",
                fontWeight: 500,
                minWidth: "80px",
                textAlign: "center",
              }}
            >
              {subtitle}
            </Box>
          )}
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1.5}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minHeight: "80px",
          }}
        >
          {description}
        </Typography>
      </CardContent>


    </Card>
  );
}

export default function CoursesSection() {
  return (
    <Box sx={{ width: "100%", bgcolor: "white", py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="body2" fontWeight="bold" color="error">
          GO AT YOUR OWN PACE
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#1a1a2e"
          mt={1}
          mb={2}
        >
          Top Selling Courses
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth={500}
          mx="auto"
        >
          Explore all of our courses and pick your suitable ones to enroll and
          start learning with us!
        </Typography>
      </Box>

      {/* Course Grid */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: null, // Remove previous button
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "50px" }}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
            <CourseCard {...course} />
          </SwiperSlide>
        ))}

        <div className="swiper-button-next-custom" style={{
          position: "absolute",
          right: 0,
          top: "40%",
          zIndex: 10,
          background: "#fff",
          borderRadius: "50%",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          padding: "10px",
          cursor: "pointer"
        }}></div>
      </Swiper>

    </Box>
  );
}
