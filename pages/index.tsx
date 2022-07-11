// next
import type { NextPage } from "next";
// material
import { CardHeader, Grid, Card, CardContent } from "@mui/material";
// components
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="To Do" />
            <NewEntry />
            <EntryList status="to-do" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Doing" />
            <EntryList status="in-progress"/>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Done" />
            <EntryList status="done"/>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
