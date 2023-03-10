import React from "react";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import Button from "@mui/material/Button";
import BaseCard from "../../components/Cards/BaseCard";
import { SignUpAPIEnum, SignUpEnum } from "../../utils/types";
import { Box } from "@mui/system";
import LinkC from "../../components/Links/LinkC";
import SVGIcon from "../../components/Buttons/Icon";
import { useMutation } from "react-query";
import { Auth } from "../../utils/services/apiRequest";
import { SignUpConst } from "../../utils/constant";

function SignUpF() {
  const { mutate, isLoading } = useMutation((user: SignUpAPIEnum) =>
    Auth.SignUp(user)
  );
  const submit = async (values: SignUpEnum) => {
    try {
      const data: SignUpAPIEnum = {
        ...values,
        firstName: values.fullname.split(" ")[0],
        lastName: values.fullname.split(" ")[1],
      };
      mutate(data);
      console.log(data);
    } catch (error) {}
  };
  return (
    <Formik initialValues={SignUpConst} onSubmit={submit}>
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <BaseCard title="">
            <Stack spacing={3}>
              <Typography variant="caption" textAlign="center">
                Strat with
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button>
                  <SVGIcon src="/svg/google.svg" height={20} width={20} />
                </Button>
                <Button>
                  <SVGIcon src="/svg/github.svg" height={20} width={20} />
                </Button>
              </Box>
              <Divider>
                <Typography variant="caption">
                  or create account with email
                </Typography>
              </Divider>
              <TextField
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                label="Email"
                placeholder="Where should we send our love !"
                variant="outlined"
              />
              <TextField
                id="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                label="User Name"
                placeholder="Describe yourself in one word :)"
                variant="outlined"
              />
              <TextField
                id="fullname"
                name="fullname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
                label="Full Name"
                placeholder="What should we call you?"
                variant="outlined"
              />
              <FormGroup>
                <TextField
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  label="Password"
                  type="password"
                  placeholder="Your secret keeper."
                  variant="outlined"
                />
                <FormControlLabel
                  control={<Checkbox checked={values.terms} />}
                  name="terms"
                  onChange={handleChange}
                  label={
                    <Typography color="grey.dark" variant="body2">
                      Terms and Conditions
                    </Typography>
                  }
                />
              </FormGroup>
            </Stack>
            <br />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading}
              sx={{ mt: 2, width: "100%" }}
            >
              {isLoading ? "...Creating account" : "Let's start"}
            </Button>
            <Divider sx={{ my: 4 }}></Divider>
            <Box display="flex" gap={0.5}>
              <Typography color="grey.dark" alignSelf="center" variant="body2">
                Are you family member ?
              </Typography>
              <LinkC
                href="/auth/signin"
                label="Login here"
                labelProps={{ color: "primary.dark", variant: "subtitle2" }}
              />
            </Box>
          </BaseCard>{" "}
        </Form>
      )}
    </Formik>
  );
}

export default SignUpF;
