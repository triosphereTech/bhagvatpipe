import AboutManifesto from '@/components/about/AboutManifesto'
import AboutStory from '@/components/about/AboutStory'
import AboutHero from '@/components/about/hero'
import PageBanner from '@/components/global/PageBanner'
import React from 'react'
import WaterAwareness from './WaterAwareness'
import CertificationsSection from '@/components/about/CertificationsSection'
import IndiaPresence from '@/components/about/IndiaPresence'
import AboutCTA from '@/components/about/AboutCTA'

function page() {
  return (
    <>
<PageBanner
  title="About Us"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "About Us" },
  ]}
/>
<AboutHero/>
<AboutStory/>
<AboutManifesto/>
<WaterAwareness/>
<CertificationsSection/>
<IndiaPresence/>
<AboutCTA/>
    </>
  )
}

export default page
