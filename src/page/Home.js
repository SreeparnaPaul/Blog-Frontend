import React, { lazy,Suspense } from 'react'
const TrendingBlogForHome = lazy(()=>import('../components/Trending/TrendingBlogForHome')) 
const CategoryCardForHome = lazy(()=>import('../components/Category/CategoryCardForHome')) 
const SliderPage = lazy(()=>import("../components/SliderPage"))

function Home() {
  return (
    <div style={{backgroundColor:"#f1eded"}}>
    <Suspense fallback={<div>Loading...</div>}>
      <SliderPage/>
      <CategoryCardForHome />
      <TrendingBlogForHome /> 
      </Suspense>
    </div>
  )
}

export default Home
