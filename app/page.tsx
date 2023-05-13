'use client'

import Image from 'next/image'
import { Aside } from "@/components/aside"
import { useEffect, useState } from 'react'
import { animationMap, animateCache } from '@/config/animate'

export default function IndexPage() {
  const [animation, setAnimation] = useState("Clock");

  useEffect(() => {
    animationMap[animation]();

    return () => {
      cancelAnimationFrame(animateCache.animateId);
    };
  }, [animation]);

  return (
    <div className="relative flex">
      <Aside>
        <div className="border rounded cursor-pointer shadow transition overflow-hidden hover:border-blue-400" onClick={() => setAnimation("Clock")}>
          <Image width={500} height={500} src="/shots/clock.jpg" alt="clock" />
          <div className="px-4 py-2 border-t-2">Animation / Clock</div>
        </div>

        {/* <div className="border rounded cursor-pointer shadow transition overflow-hidden" onClick={() => setAnimation("SelectSort")}>
          <div className="px-4 py-2 border-t-2">Animation / SelectSort</div>
        </div> */}
      </Aside>
      <div className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <canvas id="Canvas">
            Your browser sucks.
          </canvas>
        </section>
      </div>
    </div>
  )
}
