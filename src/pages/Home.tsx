import React from 'react';
import { Nav } from '../components/Nav';
/* import { PrincipalVideo } from '../components/media/PrincipalVideo'; */
import { Parallax } from 'react-scroll-parallax'
import { PrincipalVideo } from '../components/media/PrincipalVideo';
import { ButtonStart } from '../components/buttons/ButtonStart';
/* import { Footer } from '../components/Footer'; */
/* import { CardAnimatedBorderGradient } from '../components/CardAnimatedBorderGradient'; */
import { CardSpotlight } from '../components/CardSpotlight ';
import { ThemeButton } from '../components/buttons/ThemeButton';

// IGMS
import firstPhoto from '../../public/Home/imgs/firstPhotoO.webp'
import secondPhoto from '../../public/Home/imgs/secondPhotoO.webp'
import thirdPhoto from '../../public/Home/imgs/thirdPhotoO.webp'

export const Home: React.FC = (): JSX.Element => {
  return (
    <>
      {/* Main container for the application */}
      <div className='relative w-screen h-full'>

        {/* Header section containing the navigation and introductory content */}
        <header >
          <Parallax speed={-20.4} >
            <PrincipalVideo />
          </Parallax>
          <div className='fixed z-10 top-0 w-full'>
            <Nav />
          </div>

        </header>
        <ThemeButton />
        <ButtonStart />

        <main className='relative w-[80%] mx-auto'>
          <Parallax scale={[0.9, 1.1]} translateX={[10, -7]}>
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
            <section className='relative h-full mx-auto m-10 rounded w-full grid grid-cols-2 gap-3'>
              <div className='absolute w-full grid grid-cols-2'>
                <Parallax speed={-1} translateX={[10, -8]}>
                  <div className='relative flex justify-end items-end'>
                    <img className='w-96 translate-x-5 border-[1px] translate-y-20 z-20' src={firstPhoto} alt="Descripción de la imagen" />
                  </div>
                </Parallax>
                
                <Parallax speed={-1} translateX={[-10, 6]}>
                  <div className='relative file:flex justify-start items-end'>
                    <img className='w-96 border-2' src={secondPhoto} alt="Descripción de la imagen" />
                  </div>
                </Parallax>

                <Parallax speed={-1} translateX={[-10, 8]}>
                  <div className='relative flex justify-end items-start'>
                    <img className='w-96 border-[1px] translate-x-60 -translate-y-40' src={thirdPhoto} alt="Descripción de la imagen" />
                  </div>
                </Parallax>

              </div>
            </section>
          </Parallax>

        </main>

        {/* Footer section */}
        {/* <Footer /> */}
      </div>
    </>
  );
};
