import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Grid,
  Paper,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  rememberMe: Yup.boolean(),
});

const registerSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain an uppercase letter, a lowercase letter, a number, and a special character"
    )
    .required("Password is required"),
});

const loginInitialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const registerInitialValues = {
  fullName: "",
  email: "",
  password: "",
};

export default function Forms() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  return (
    <Grid container spacing={4} sx={{ p: 4, maxWidth: "1200px", mx: "auto" }}>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={0}
          sx={{ p: 4, border: "1px solid #f0f0f0", borderRadius: 2 }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 3, fontWeight: "bold", color: "#1a1a2c" }}
          >
            Login
          </Typography>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => console.log("Login form values:", values)}
          >
            {({ values, handleChange, errors, touched, isSubmitting }) => (
              <Form>
                <TextField
                  fullWidth
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={values.rememberMe}
                        onChange={handleChange}
                      />
                    }
                    label="Remember me"
                  />
                  <Link href="#">Lost your password?</Link>
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ py: 1.5, bgcolor: "#ff4d4f" }}
                >
                  {isSubmitting ? "Logging in..." : "Log In"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={0}
          sx={{ p: 4, border: "1px solid #f0f0f0", borderRadius: 2 }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 3, fontWeight: "bold", color: "#1a1a2c" }}
          >
            Register
          </Typography>
          <Formik
            initialValues={registerInitialValues}
            validationSchema={registerSchema}
            onSubmit={(values) => console.log("Register form values:", values)}
          >
            {({ values, handleChange, errors, touched, isSubmitting }) => (
              <Form>
                <TextField
                  fullWidth
                  name="fullName"
                  placeholder="Full Name"
                  value={values.fullName}
                  onChange={handleChange}
                  error={touched.fullName && !!errors.fullName}
                  helperText={touched.fullName && errors.fullName}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  name="password"
                  type={showRegisterPassword ? "text" : "password"}
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowRegisterPassword(!showRegisterPassword)
                          }
                        >
                          {showRegisterPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 1 }}
                />
                <FormHelperText sx={{ mb: 3 }}>
                  Password should be at least 8 characters long with uppercase,
                  lowercase, number, and special character.
                </FormHelperText>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ py: 1.5, bgcolor: "#ff4d4f" }}
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
}
