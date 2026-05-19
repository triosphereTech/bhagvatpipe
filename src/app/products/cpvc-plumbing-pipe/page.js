import CPVCIntro from "@/components/products/cpvc-plumbing-pipe/CPVCIntro";

import Breadcrumb from "@/components/global/PageBanner";
import React from "react";
import CPVCVariants from "@/components/products/cpvc-plumbing-pipe/CPVCVariants";


const page = () => {
  return (
    <>
      <Breadcrumb
        title="C-PVC Plumbing Pipe"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "C-PVC Plumbing Pipe" },
        ]}
      />

      <CPVCIntro />
      <CPVCVariants/>
    </>
  );
};

export default page;