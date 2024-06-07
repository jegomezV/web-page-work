import { Parallax } from 'react-scroll-parallax'

export const ModuleParallax: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
    <Parallax  translateY={['100px', '-100px']}>
      {children}
    </Parallax>
    </>
  );
}
