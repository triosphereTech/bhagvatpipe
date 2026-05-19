import PageBanner from '@/components/global/PageBanner'
import CPVCBrassCatalog from '@/components/products/cpvc-brass-fittings/CPVCBrassCatalog'
import CPVCBrassIntro from '@/components/products/cpvc-brass-fittings/CPVCBrassIntro'
import React from 'react'

function page() {
  return (
    <>
    <PageBanner
        title="C-PVC Brass Fittings"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "C-PVC Brass Fittings" },
        ]}
      />
      <CPVCBrassIntro/>
      <CPVCBrassCatalog/>
    </>
  )
}

export default page
