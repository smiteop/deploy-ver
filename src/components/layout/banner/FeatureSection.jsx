import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { Brain, Shield, Globe, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Brain size={32} color="#f44a45" />,
    title: "Whiteboard",
    description:
      "Drawing tools, text annotations, and file sharing, making complex concepts easy to understand, engaging and enhances the learning experience by allowing real-time collaboration between students and tutors.",
  },
  {
    icon: <Shield size={32} color="#f44a45" />,
    title: "Online Test Series",
    description:
      "Designed to help students assess their understanding and improve exam readiness. With topic-wise tests, full-length mock exams, instant feedback, students can track progress and boost confidence.",
  },
  {
    icon: <Globe size={32} color="#f44a45" />,
    title: "Live Class Recording",
    description:
      "This Feature allows students to revisit their live 1-on-1 sessions anytime. This ensures better understanding, revision flexibility, and the ability to learn at their own pace, enhancing retention and performance.",
  },
  {
    icon: <BookOpen size={32} color="#f44a45" />,
    title: "Expert-Curated Curriculum",
    description:
      "Our tutors follow a structured, expert-curated curriculum designed to align with school standards and boost academic performance with clarity and consistency.",
  },
];

export default function FeaturesSectionOffline() {
  return (
    <Box sx={{ width: "100%", bgcolor: "white", py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="body2" fontWeight="bold" color="#f44a45">
          EDUCATION FOR EVERYONE
        </Typography>
        <Typography variant="body2" fontWeight="bold">
        to Learn Anytime, Anywhere
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#1a1a2e"
          mt={1}
          mb={2}
        >
          Online Coaching Lessons For Remote Learning <br />
          to Live 1 on 1 Online Tuition 
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth={600}
          mx="auto"
        >
          Personalized learning with Live 1-on-1 Online Tuitions, where expert
          tutors guide you in real-time, anytime, anywhere. Get tailored
          lessons, flexible scheduling, and focused attention to boost academic
          success.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* Left Spacer */}
        <Grid item xs={false} sm={false} md={0.5} />

        {features.slice(0, 3).map((feature, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={3.5}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                px: 4,
                py: 4,
                textAlign: "center",
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
                height: "100%",
              }}
            >
              <Box
                sx={{
                  mx: "auto",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  height: 64,
                  bgcolor: "grey.100",
                  borderRadius: "50%",
                  "&:hover": { bgcolor: "rgba(244, 74, 69, 0.1)" },
                }}
              >
                <IconButton>{feature.icon}</IconButton>
              </Box>
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#1a1a2e"
                  gutterBottom
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {feature.description}
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  variant="body2"
                  fontWeight="bold"
                  color="#f44a45"
                >
                  Know more
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Right Spacer */}
        <Grid item xs={false} sm={false} md={0.5} />
      </Grid>
    </Box>
  );
}
