import { useState, useEffect, useMemo } from 'react'
import { CursorEffects } from '../cursor-effects'
import { Outlet } from 'react-router-dom'
import { Toaster } from '../ui'

type TMainLayoutProps = {}

const MainLayout = ({}: TMainLayoutProps) => {
  const [width, setWidth] = useState<number>(0)

  // TODO: Determine how to disable CursorEffects when
  // it's on touch only devices.
  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    setWidth(window.innerWidth)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = useMemo(() => width <= 768, [width])

  return (
    <main className="w-full font-poppins">
      {!isMobile && <CursorEffects />}
      <Outlet />
      <Toaster />
    </main>
  )
}

export { MainLayout }
