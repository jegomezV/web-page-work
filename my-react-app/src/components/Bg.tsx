interface BgProps {
  children: React.ReactNode;
}

export const Bg: React.FC<BgProps> = ({ children }): JSX.Element => {
  return (
    <div className="relative h-screen w-screen bg-slate-950">
      <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="fixed bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      {children}
      
    </div>
  )
}