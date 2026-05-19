import PageBanner from '@/components/global/PageBanner'
import ProductCategories from '@/components/products/ProductCategories'
import ProductCTA from '@/components/products/ProductCTA'
import ProductHero from '@/components/products/ProductHero'
import ProductHighlights from '@/components/products/ProductHighlights'
import React from 'react'

function page() {
  return (
    <>
    <PageBanner
  title="Products"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Products" },
  ]}
/>
        <ProductHero/>
        <ProductCategories/>
        <ProductHighlights/>
    </>
  )
}

export default page
