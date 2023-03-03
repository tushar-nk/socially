import {
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Button from "@mui/material/Button";
import BaseCard from "../../components/Cards/BaseCard";
import { SignInEnum } from "../../utils/enums";
import { Box } from "@mui/system";
import LinkC from "../../components/Links/LinkC";
import SVGIcon from "../../components/Buttons/Icon";
import { useMutation } from "react-query";
import { Auth } from "../../utils/services/apiRequest";
const initialValues: SignInEnum = {
  username: "",
  password: "",
};
function SigninF() {
  const mutation = useMutation((auth: SignInEnum) => Auth.SignIn(auth));
  const submit = async (values: SignInEnum) => {
    try {
      mutation.mutate(values);
    } catch (error) {}
  };
  return (
    <Formik initialValues={initialValues} onSubmit={submit}>
      {({ values, errors }) => (
        <>
          <BaseCard title="">
            <Stack spacing={3}>
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
                  Or sign in with credentials
                </Typography>
              </Divider>
              <TextField id="email-basic" label="Email" variant="outlined" />
              <FormGroup>
                <TextField
                  id="pass-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={
                    <Typography color="grey.dark" variant="body2">
                      Remember me
                    </Typography>
                  }
                />
              </FormGroup>
            </Stack>
            <br />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, width: "100%" }}
            >
              Let's go
            </Button>
            <Divider sx={{ my: 4 }}></Divider>
            <Box display="flex" gap={0.5}>
              <Typography color="grey.dark" alignSelf="center" variant="body2">
                New to socially ?
              </Typography>
              <LinkC
                href="/auth/signup"
                label="Create an account"
                labelProps={{ color: "primary.dark", variant: "subtitle2" }}
              />
            </Box>
          </BaseCard>{" "}
        </>
      )}
    </Formik>
  );
}

export default SigninF;
