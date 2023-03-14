import React, { useState } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import CommonLayout from "../../layouts/CommonLayout";

interface Props {
  children: React.ReactNode;
}
function QueryProvider({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <CommonLayout>
        {/* The rest of your application */}
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        {children}
      </CommonLayout>
    </QueryClientProvider>
  );
}

export default QueryProvider;
