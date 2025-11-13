import { Dashboard } from "./components/Dashboard"
import { MenuAside } from "./components/MenuAside"
import { MenuHeader } from "./components/MenuHeader"

export function App() {
  return (
  <div className="flex w-screen h-screen ">
    <MenuAside/>
    <main className="pl-2.5 flex flex-col text-white min-w-0 items-center bg-linear-to-b from-[#0F172A] via-[#15142B] to-[#1A102C] ">
        <MenuHeader/>
        <Dashboard/>
    </main>
  </div>
  )
}
