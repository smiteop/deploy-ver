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

const courses = [
  {
    title: "Spa Relaxation Massage Certificate Course",
    description:
      "Wouldn't you just love to know how to do this incredible form of massage? Well, you can!",
    price: 199,
    lessons: 20,
    students: 14,
    instructor: "John Doe",
    image: bannercard,
  },
  {
    title: "Complete Listing Optimization Training",
    description:
      "Are you looking for a Google My Business (GMB) course that shows you how to optimize listings?",
    price: 19,
    lessons: 10,
    students: 16,
    instructor: "Jane Smith",
    image: bannercard,
  },
  {
    title: "Graphic Design Masterclass - Learn GREAT Design",
    description:
      "Learn the basics of Adobe Photoshop, Illustrator, and InDesign with real-world projects.",
    price: 99,
    lessons: 20,
    students: 1,
    instructor: "Alex Johnson",
    image: bannercard,
  },
];

function CourseCard({
  title,
  description,
  price,
  lessons,
  students,
  instructor,
  image,
}) {
  return (
    <Card
      sx={{
        width: "450px",
        height: "345px",
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
          height="200"
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
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="#1a1a2e">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1} mb={2}>
          {description}
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          color="text.secondary"
          fontSize={14}
        >
          <Typography>📚 {lessons} Lessons</Typography>
          <Typography>👥 {students} Students</Typography>
        </Box>
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
      <Grid container spacing={4} justifyContent="center">
        {courses.map((course, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
