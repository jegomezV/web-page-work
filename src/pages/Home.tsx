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
          <Parallax>
            <CardSpotlight configs=''>
              <section className='relative w-full min-h-screen mx-auto m-10 rounded-xl z-30 grid grid-cols-1 gap-3'>
                <article className='flex mx-auto p-10 justify-center text-center items-center flex-wrap m-4'>
                  <h1 className='text-center italic text-6xl mb-10'>Where is the ? Art/Beauty</h1>
                  <h2 className='text-xl font-bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac massa dignissim, posuere ex id, commodo urna. Integer varius diam dui, ac pretium ipsum condimentum a. Proin laoreet efficitur velit ac finibus. In aliquet felis quis arcu posuere, vel pulvinar odio dignissim. Maecenas convallis pharetra placerat. Vestibulum in luctus est, eget pretium quam. Curabitur at dui in quam posuere aliquet eu sit amet diam. Curabitur accumsan interdum blandit. Cras sapien ipsum, congue id egestas vel, aliquam in turpis.
                  </h2>
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
