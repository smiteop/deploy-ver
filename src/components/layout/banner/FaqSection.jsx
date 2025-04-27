import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ButtonBase,
  Container,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Flag, AttachMoney, ShoppingBag } from "@mui/icons-material";

const tabData = [
  { label: "Parents", icon: <Flag />, value: "Parents" },
  { label: "Getting Started", icon: <AttachMoney />, value: "Getting Started" },
  { label: "Tutor", icon: <ShoppingBag />, value: "Tutor" },
];

const faqsData = {
  Parents: [
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
  "Getting Started": [
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
    {
      question: "How do I track my child's progress?",
      answer:
        "We provide regular progress reports, feedback sessions, and assessments to keep you updated on your child’s learning journey.",
    },
  ],
  Tutor: [
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
  ],
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Parents");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false); // Track if all questions are visible

  const handleAccordionChange = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleShowMoreToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* Tab Buttons */}
      <Box display="flex" gap={2} mb={4} justifyContent="center" flexWrap="wrap">
        {tabData.map((tab) => (
          <ButtonBase
            key={tab.value}
            onClick={() => setActiveCategory(tab.value)}
            sx={{
              flexDirection: "column",
              py: 2,
              px: 3,
              borderRadius: 2,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              backgroundColor: activeCategory === tab.value ? "#ff4d4f" : "#fff",
              color: activeCategory === tab.value ? "#fff" : "#000",
            }}
          >
            {tab.icon}
            <Typography variant="subtitle2" fontWeight={500} mt={1}>
              {tab.label}
            </Typography>
          </ButtonBase>
        ))}
      </Box>

      {/* Accordion Section */}
      <Box>
        {faqsData[activeCategory]
          .slice(0, showAll ? faqsData[activeCategory].length : 6)
          .map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedIndex === index}
              onChange={() => handleAccordionChange(index)}
              sx={{
                borderRadius: 2,
                boxShadow: "0px 3px 10px rgba(0,0,0,0.05)",
                mb: 2,
                "&::before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 3, py: 2 }}>
                <Typography fontWeight={600} fontSize="1rem">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 2 }}>
                <Typography color="text.secondary" fontSize="0.95rem">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        {/* Show More / Show Less Button */}
        <Button onClick={handleShowMoreToggle} sx={{ mt: 2, textTransform: "none" }}>
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </Box>
    </Container>
  );
}
