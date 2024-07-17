import { Navbar } from './_components/navbar'

interface ProtectedLayoutProps {
  children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500 to-blue-500">
      <Navbar />
      {children}
    </div>
  )
}

export default ProtectedLayout
