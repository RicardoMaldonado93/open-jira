// react
import { FC, ReactNode } from "react";
// next
import Head from "next/head";
// style
import { Box } from "@mui/material";
// components
import { Navbar, Sidebar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <Sidebar />

      <Box sx={{ padding: "16px 32px" }}>{children}</Box>
    </Box>
  );
};
