import PageBanner from '@/components/global/PageBanner'
import SwrRingFitCatalog from '@/components/products/swr-ring-fittings/SwrRingFitCatalog'
import SwrRingIntro from '@/components/products/swr-ring-fittings/swrringintro'
import React from 'react'

function page() {
  return (
    <>
    <PageBanner
        title="SWR Ring Fit"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "SWR Ring Fit" },
        ]}
      />
    <SwrRingIntro/>
    <SwrRingFitCatalog/>
    </>
  )
}

export default page
