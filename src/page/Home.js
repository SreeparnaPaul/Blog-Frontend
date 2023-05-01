import React, { lazy,Suspense } from 'react'
const CategoryCardForHome = lazy(()=>import('../components/Category/CategoryCardForHome')) 
const SliderPage = lazy(()=>import("../components/SliderPage"))
function Home() {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      <SliderPage/>
      <CategoryCardForHome />
      </Suspense>
    </div>
  )
}

export default Home
