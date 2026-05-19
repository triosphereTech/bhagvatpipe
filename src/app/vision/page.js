import PageBanner from '@/components/global/PageBanner'
import VisionPage from '@/components/vision/VisionPage'
import React from 'react'

function page() {
  return (
    <>
    <PageBanner
        title="Vision"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Vision" },
        ]}
      />
      <VisionPage/>
    </>
  )
}

export default page
