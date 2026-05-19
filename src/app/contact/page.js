import ContactFormSection from '@/components/contact/ContactFormSection'
import ContactHero from '@/components/contact/ContactHero'
import PageBanner from '@/components/global/PageBanner'
import React from 'react'

function page() {
  return (
    <>
    <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />
        <ContactHero/>
        <ContactFormSection/>
    </>
  )
}

export default page
