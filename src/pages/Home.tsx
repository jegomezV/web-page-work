import React from 'react';
import { Nav } from '../components/Nav';
/* import { PrincipalVideo } from '../components/media/PrincipalVideo'; */
import { Parallax } from 'react-scroll-parallax'
import { PrincipalVideo } from '../components/media/PrincipalVideo';
import { ButtonStart } from '../components/buttons/ButtonStart';
import { Footer } from '../components/Footer';
import { CardAnimatedBorderGradient } from '../components/CardAnimatedBorderGradient';
import { CardSpotlight } from '../components/CardSpotlight ';
import { ThemeButton } from '../components/buttons/ThemeButton';

export const Home: React.FC = (): JSX.Element => {
  return (
    <>
      {/* Main container for the application */}
      <div className='relative w-screen h-full'>

        {/* Header section containing the navigation and introductory content */}
        <header >
          <Parallax speed={-36.4} >
            <PrincipalVideo />
          </Parallax>
          <div className='fixed z-10 top-0 w-full'>
            <Nav />
          </div>

        </header>
        <ThemeButton />
        <ButtonStart />

        <main className='relative w-[80%] mx-auto'>
          <Parallax scale={[1, 1]} translateX={[10, -8]}>
            <CardSpotlight configs=''>
              <section className='relative w-full mx-auto rounded-full z-30 grid grid-cols-1 gap-3'>
                <article className='flex mx-auto w-full justify-center text-center items-center flex-wrap m-4'>
                  <div className="group relative w-full h-full text-neutral-950">
                    <h1 className='text-center text-6xl mb-7 text-white'>Where is the</h1>
                    <div className="overflow-hidden">
                      <div className="-translate-y-2 -translate-x-14 mx-auto skew-y-0 text-6xl text-center text-white transition duration-500 group-hover:-translate-y-[118%] group-hover:skew-y-12">&rarr; Art</div>
                      <div className="relative text-white translate-y-[250%] text-right text-5xl skew-y-12 transition duration-500 group-hover:-translate-y-8 group-hover:-translate-x-60 group-hover:skew-y-0"> &rarr; Beauty</div>
                    </div>
                  </div>
                </article>
              </section>
            </CardSpotlight>
          </Parallax>

          <Parallax speed={30}>
            <section className='h-screen mx-auto m-10 rounded w-full grid grid-cols-2 gap-3'>
              <CardAnimatedBorderGradient configs="row-span-3">
                1
              </CardAnimatedBorderGradient >
              <CardAnimatedBorderGradient configs="row-span-2">
                2
              </CardAnimatedBorderGradient>
              <CardAnimatedBorderGradient configs="">
                3
              </CardAnimatedBorderGradient>
              <CardAnimatedBorderGradient configs="row-start-4 row-span-2 col-span-2">
                4
              </CardAnimatedBorderGradient>
            </section>
          </Parallax>

          <Parallax speed={5}>
            <section className='h-screen mx-auto m-10 rounded w-full grid grid-cols-2 gap-3'>
              <CardAnimatedBorderGradient configs="row-span-3">
                1
              </CardAnimatedBorderGradient >
              <CardAnimatedBorderGradient configs="row-span-2">
                2
              </CardAnimatedBorderGradient>
              <CardAnimatedBorderGradient configs="">
                3
              </CardAnimatedBorderGradient>
              <CardAnimatedBorderGradient configs="row-start-4 row-span-2 col-span-2">
                4
              </CardAnimatedBorderGradient>
            </section>
          </Parallax>
        </main>

        {/* Footer section */}
        <Footer />
      </div>
    </>
  );
};
