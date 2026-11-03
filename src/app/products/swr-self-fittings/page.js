import PageBanner from '@/components/global/PageBanner'
import SwrSelfFitCatalog from '@/components/products/swr-self-fittings/SwrSelfFitCatalog'
import SwrSelfIntro from '@/components/products/swr-self-fittings/SwrSelfIntro'
import React from 'react'

const page = () => {
    return (
        <>
        <PageBanner
            title="SWR Self Fit"
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "SWR Self Fit" },
            ]}
          />
        <SwrSelfIntro/>
        <SwrSelfFitCatalog/>
        </>
    )
}

export default page
