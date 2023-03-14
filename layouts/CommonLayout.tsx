import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CommonCTX, CommonLT, Message } from "../utils/types";
import Lottie from "react-lottie";
import * as animationData from "../public/json/Loader_main.json";
import styles from "../styles/Home.module.css";

import {
  MaterialDesignContent,
  SnackbarProvider,
  useSnackbar,
} from "notistack";

import Slide from "@mui/material/Slide";
import { styled } from "@mui/material";

export const CommonContext = createContext<CommonCTX>({
  isLoading: false,
  setIsLoading: () => {},
  notification: {
    message: "",
    type: undefined,
  },
  setNotification: () => {},
});
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-info": {
    backgroundColor: "#61F3F3",
    color: "#003768",
  },
  "&.notistack-MuiContent-success": {
    backgroundColor: "#0A5554",
    color: "#D8FBDE",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "#7A0916",
    color: "#FFE9D5",
  },
}));
function CommonLayout({ children }: CommonLT) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notification, setNotification] = useState<Message>({
    message: "",
    type: undefined,
  });

  return (
    <CommonContext.Provider
      value={{ isLoading, setIsLoading, notification, setNotification }}
    >
      <SnackbarProvider
        maxSnack={3}
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
        }}
        TransitionComponent={(props) => <Slide {...props} direction="right" />}
      >
        {isLoading && (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}>
              <Lottie
                options={defaultOptions}
                speed={1}
                isClickToPauseDisabled
                height="100px"
                width="100px"
              />
            </div>
          </div>
        )}
        <NotifyStack />
        {children}
      </SnackbarProvider>
    </CommonContext.Provider>
  );
}
const NotifyStack = () => {
  const { notification, setNotification } = useContext(CommonContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const CallBack = useCallback(() => {
    if (notification.message) {
      enqueueSnackbar(notification.message, {
        variant: notification.type,
        autoHideDuration: 5000,
        preventDuplicate: true,
        onClose: (e, r, key) => {
          if (key === `${notification.message + notification.type}`)
            setNotification({ message: "", type: undefined });
        },
        key: `${notification.message + notification.type}`,
        anchorOrigin: { vertical: "bottom", horizontal: "left" },
      });
    }
  }, [notification]);
  return <>{CallBack()}</>;
};

export default CommonLayout;
