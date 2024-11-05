"use client";
import { IconProps } from "@/ui/Icon/Icon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "@/Components/Login";

type Button = {
  label: string;
  icon: IconProps["icon"];
  id: string;
  selected: boolean;
};
const queryClient = new QueryClient();

const Page = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
};

export default Page;
