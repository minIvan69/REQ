import { NextPage } from "next";
import React, { useState } from "react";
import { Cards, Layout } from "../src/components";

const ApplicationsPage: NextPage = () => {
  return (
    <Layout>
      <Cards />
    </Layout>
  );
};

export default ApplicationsPage;
