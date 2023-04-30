import React, { lazy,Suspense } from 'react'
const SliderPage = lazy(()=>import("../components/SliderPage"))
function Home() {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      <SliderPage/>
      </Suspense>
    </div>
  )
}

export default Home
