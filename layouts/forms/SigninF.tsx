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
import { Form, Formik } from "formik";
import React, { useCallback, useContext } from "react";
import Button from "@mui/material/Button";
import BaseCard from "../../components/Cards/BaseCard";
import { SignInEnum } from "../../utils/types";
import { Box } from "@mui/system";
import LinkC from "../../components/Links/LinkC";
import SVGIcon from "../../components/Buttons/Icon";
import { useMutation } from "react-query";
import { Auth } from "../../utils/services/apiRequest";
import { SignInConst } from "../../utils/constant";
import { CommonContext } from "../CommonLayout";
import { useRouter } from "next/router";

function SigninF() {
  const { setIsLoading, setNotification } = useContext(CommonContext);
  const router = useRouter();
  const { mutate, isLoading } = useMutation((auth: SignInEnum) =>
    Auth.SignIn(auth)
  );
  const callBack = useCallback(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  return (
    <Formik
      initialValues={SignInConst}
      onSubmit={(values) =>
        mutate(values, {
          onError: (error: any) => {
            setNotification({
              message: error?.message,
              type: "error",
            });
          },
          onSuccess: (success) => {
            router.push("/");
          },
        })
      }
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
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
              <TextField
                id="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                label="Email or Username"
                variant="outlined"
              />
              <FormGroup>
                <TextField
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
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
              type="submit"
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
          </BaseCard>
        </Form>
      )}
    </Formik>
  );
}

export default SigninF;
