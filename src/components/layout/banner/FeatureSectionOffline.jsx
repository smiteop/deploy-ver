
import Grid from "@mui/material/Grid";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { Brain, Shield, Globe, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Brain size={32} color="#f44a45" />,
    title: "Face-to-Face Classes",
    description:
      "Our expert tutors visit your home to provide one-on-one, personalized support tailored to your child’s needs with direct interaction, and continuous feedback.",
  },
  {
    icon: <Shield size={32} color="#f44a45" />,
    title: "Hassle-Free Transportation",
    description:
      "No need to travel—learning happens right at your doorstep. Save time, reduce stress, and ensure your child’s safety with convenient home tutoring.",
  },
  {
    icon: <Globe size={32} color="#f44a45" />,
    title: "Undivided Attention",
    description:
      "Individual home tuitions ensure that the tutor's complete focus is on one student, allowing for instant doubt clarification, better interaction, and a deeper understanding of the subject.",
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
          to Tutor at your home
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#1a1a2e"
          mt={1}
          mb={2}
        >
          Online Coaching Lessons For Remote Learning <br />
          to 1 on 1 Offline Home Tuition
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

      {/* Features Grid with reduced spacers */}
      <Grid container spacing={4} justifyContent="center">
        {/* Left Spacer */}
        <Grid item xs={false} sm={false} md={0.5} />

        {features.map((feature, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={2.75}
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
