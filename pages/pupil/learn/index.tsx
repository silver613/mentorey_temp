import React, { useState, useEffect } from "react";
import Guide from "./components/guide";
import Coaches from "./components/coaches";
import { NextPageWithLayout } from "pages/_app";
import InsideLayout from "~/layouts/InsideLayout";
import { ReactElement } from "react";
const LearnPage: NextPageWithLayout = () => {
  return (
    <>
      <Guide />
      <Coaches />
    </>
  );
};

LearnPage.getLayout = function getLayout(page: ReactElement) {
  return <InsideLayout>{page}</InsideLayout>;
};

export default LearnPage;
