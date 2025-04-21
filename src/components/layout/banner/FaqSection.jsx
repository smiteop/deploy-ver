import { useState, useEffect } from "react";
import {
  Container,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import {
  Flag,
  AttachMoney,
  ShoppingBag,
  MenuBook,
  HelpOutline,
  ExpandMore,
} from "@mui/icons-material";

const faqData = {
  parents: [
    {
      question: "What is 1-to-1 Home Tutors?",
      answer:
        "1-to-1 Home Tutors is a premium tutoring service that provides personalized learning experiences through expert tutors, both online and offline at student's home",
    },
    {
      question: "What subjects do you offer?",
      answer:
        "We offer tutoring for all major subjects, including Math, Science, English, Social Studies, and languages, for various curricula (CBSE, ICSE, State Board, etc.).",
    },
    {
      question: "How do you ensure the quality of tutors?",
      answer:
        "All our tutors undergo a rigorous selection process, including interviews, background verification, and subject expertise assessment.",
    },
    {
      question: "What is the duration of a tutoring session?",
      answer:
        "Each session typically lasts for 1 to 1.5 hours, depending on the student’s needs and the subject.",
    },
    {
      question: "How are the classes scheduled?",
      answer:
        "We offer flexible scheduling based on your convenience. Classes can be arranged on weekdays or weekends as per availability.",
    },
    {
      question: "What are the fees for the tutoring services?",
      answer:
        "The fee structure varies based on the subject, grade, and mode of learning (online/offline). Contact us for specific details.",
    },
    {
      question: "How do I make payments?",
      answer:
        "Payments can be made online through secure payment gateways or via bank transfers.",
    },
    {
      question: "How do I track my child's progress?",
      answer:
        "We provide regular progress reports, feedback sessions, and assessments to keep you updated on your child’s learning journey.",
    },
    {
      question: "Can I discontinue services at any time?",
      answer:
        "Yes, you can discontinue by informing us in advance as per our cancellation policy.",
    },
  ],
  "getting-started": [
    {
      question: "How do I enrol my child?",
      answer:
        "Contact us via phone, or WhatsApp, or fill out the registration form on our website, and our team will assist you with the process.",
    },
    {
      question: "How does the tutoring process work?",
      answer:
        "We match your child with a qualified tutor based on their academic needs. The tutor conducts customized one-on-one sessions at home or online.",
    },
    {
      question: "Can I choose a tutor for my child?",
      answer:
        "Yes! We provide a selection of tutors, and you can choose the one that best fits your child's learning needs.",
    },
    {
      question: "Is there a trial class available?",
      answer:
        "Yes, we offer a demo class so you can experience our teaching methodology before making a commitment.",
    },
    {
      question: "What is the duration of a trial session?",
      answer:
        "Each session typically lasts for 45 min to 1 hour, depending on the student’s needs and the subject.",
    },
    {
      question: "What if my child is not satisfied with the tutor?",
      answer:
        "If your child is not comfortable with the assigned tutor, we can provide a replacement after assessing the concerns.",
    },
  ],
  tutor: [
    {
      question: "How do I apply to become a tutor?",
      answer:
        "You can apply by filling out the registration form on our website or app. Once submitted, our team will contact you for verification and interview.",
    },
    {
      question: "What are the eligibility criteria?",
      answer:
        "We prefer graduates/postgraduates with a passion for teaching. Prior teaching experience and strong communication skills are an added advantage.",
    },
    {
      question: "Do I have to attend an interview?",
      answer:
        "Yes, all tutors must go through a screening process, which includes a short interview and document verification.",
    },
    {
      question: "Is there any training provided?",
      answer:
        "Yes, we provide orientation and basic training to help tutors understand our methodology, app usage, and parent expectations.",
    },
    {
      question: "How are tuition assignments given?",
      answer:
        "Tuition requests are matched based on your subject expertise, preferred location (for home tuitions), and availability. You will receive notifications through the app or via call.",
    },
    {
      question: "Do I have to travel for home tuition?",
      answer:
        "Yes, for offline classes. You can select your preferred travel radius during registration to ensure nearby assignments.",
    },
    {
      question: "Can I take online classes only?",
      answer:
        "Absolutely! Tutors can choose to take online-only assignments as per their convenience and teaching setup.",
    },
    {
      question: "How is the payment handled?",
      answer:
        "Tutor payments are processed monthly. You will receive 70% of the tuition fee collected from students. A wallet and payment tracking system is integrated into our tutor app.",
    },
    {
      question: "Will I get regular classes?",
      answer:
        "We receive regular student inquiries. Your chances increase based on subject demand, flexible timings, and performance reviews.",
    },
    {
      question: "How do I track my classes and schedule?",
      answer:
        "All class schedules, student info, and attendance are managed through our app. Tutors must check in/out of classes via the app.",
    },
    {
      question: "What if I face issues with a student or class?",
      answer:
        "You can raise any concerns or requests through the grievance section in the app or directly contact the coordinator assigned to you.",
    },
    {
      question: "Is there an agreement or contract?",
      answer:
        "Yes, tutors are required to sign a basic agreement after selection which outlines roles, responsibilities, and code of conduct.",
    },
    {
      question: "Will I receive an experience certificate?",
      answer:
        "Yes, all tutors who complete a minimum period of active tutoring with us will be eligible for an official experience certificate.",
    },
  ],
};

const categoryIcons = {
  "getting-started": <Flag fontSize="small" />,
  pricing: <AttachMoney fontSize="small" />,
  sales: <ShoppingBag fontSize="small" />,
  usage: <MenuBook fontSize="small" />,
  general: <HelpOutline fontSize="small" />,
};

const categoryLabels = {
  parents: "Parents",
  "getting-started": "Getting Started",
  tutor: "Tutor",
};

export default function FaqSection() {
  const INITIAL_VISIBLE_COUNT = 6;
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    setExpandedIndex(null);
  }, [activeCategory]);

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={5}>
        Frequently Asked Questions
      </Typography>

      <Paper
        elevation={0}
        sx={{
          mb: 4,
          borderRadius: 3,
          p: 1,
          backgroundColor: "#f5f7fa",
          boxShadow: "none !important",
        }}
      >
        <Tabs
          value={activeCategory}
          onChange={(_, newValue) => setActiveCategory(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          sx={{
            boxShadow: "none !important",
            minHeight: "48px",
            ".MuiTabs-indicator": {
              display: "none",
            },
            ".MuiTab-root": {
              fontWeight: 500,
              minHeight: "48px",
              textTransform: "none",
              px: 1, // reduce padding here
              borderRadius: 2,
              backgroundColor: "transparent",
              transition: "none",
              "&.Mui-selected": {
                backgroundColor: "transparent",
                boxShadow: "none",
                outline: "1px",
              },
              "&:focus": {
                outline: "1px",
                boxShadow: "none",
              },
            },
          }}
        >
          {Object.keys(faqData).map((category) => (
            <Tab
              key={category}
              value={category}
              disableRipple
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, pl: 0.5, pr: 0.5 }}>
                  {categoryIcons[category]} {categoryLabels[category]}
                </Box>
              }
            />
          ))}
        </Tabs>
      </Paper>

      <Box>
        {faqData[activeCategory].slice(0, visibleCount).map((faq, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <Accordion
              key={index}
              expanded={isExpanded}
              onChange={() => setExpandedIndex(isExpanded ? null : index)}
              disableGutters
              square
              sx={{
                mb: 2,
                border: "none !important",
                borderRadius: "0px !important",
                boxShadow: "none !important",
                backgroundColor: "#ffffff",
                "&::before": {
                  display: "none !important",
                },
                "&.Mui-expanded": {
                  margin: 0,
                  boxShadow: "none !important",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  px: 2,
                  py: 1.5,
                  backgroundColor: "#fff !important",
                  "&.Mui-expanded": {
                    minHeight: "auto",
                    backgroundColor: "#fff !important",
                  },
                  "& .MuiAccordionSummary-content": {
                    margin: 0,
                  },
                }}
              >
                <Typography fontWeight={600}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 2,
                  pb: 2,
                  border: "none !important",
                  boxShadow: "none !important",
                }}
              >
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}

        {visibleCount < faqData[activeCategory].length && (
          <Box textAlign="center" mt={2}>
            <Typography
              variant="body2"
              component="button"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + 6, faqData[activeCategory].length)
                )
              }
              sx={{
                color: "primary.main",
                cursor: "pointer",
                border: "none",
                background: "none",
                fontWeight: 500,
                padding: "12px 24px",
                borderRadius: "8px",
                boxShadow: "none",
                outline: "none",
                "&:hover": {
                  background: "rgba(0, 0, 0, 0.04)",
                  boxShadow: "none",
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              Show More
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
