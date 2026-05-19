import PageBanner from '@/components/global/PageBanner'
import MissionPage from '@/components/mission/MissionPage'
import React from 'react'

function page() {
  return (
    <>
    <PageBanner
        title="Mission"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Mission" },
        ]}
        />
        <MissionPage/>
    </>
  )
}

export default page
