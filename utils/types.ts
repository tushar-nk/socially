export type SignInEnum = {
  username: string;
  password: string;
};
export type SignUpEnum = {
  username: string;
  email: string;
  fullname: string;
  password: string;
  terms: boolean;
};
export type SignUpAPIEnum = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  terms: boolean;
};

export type Message = {
  message: string;
  type: "default" | "error" | "success" | "warning" | "info" | undefined;
  isOpen?: boolean;
};
export type CommonCTX = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  notification: Message;
  setNotification: React.Dispatch<React.SetStateAction<Message>>;
};
export type CommonLT = {
  children: React.ReactNode;
};
