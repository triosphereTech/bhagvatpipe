import PageBanner from '@/components/global/PageBanner'
import CPVCPlainFittingCatalog from '@/components/products/cpvc-plain-fittings/CPVCPlainFittingCatalog'
import CPVCPlainFittingIntro from '@/components/products/cpvc-plain-fittings/CPVCPlainFittingIntro'
import React from 'react'

function page() {
  return (
    <>
    <PageBanner
        title="C-PVC Plain Fittings Pipe"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "C-PVC Plain Fittings" },
        ]}
      />
      <CPVCPlainFittingIntro/>
      <CPVCPlainFittingCatalog/>
    </>
  )
}

export default page
