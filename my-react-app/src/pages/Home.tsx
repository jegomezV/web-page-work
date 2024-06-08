import React from 'react';
import { Nav } from '../components/Nav';
/* import { PrincipalVideo } from '../components/media/PrincipalVideo'; */
import { Parallax } from 'react-scroll-parallax'
import { PrincipalVideo } from '../components/media/PrincipalVideo';
import { ButtonStart } from '../components/ButtonStart';
import { Footer } from '../components/Footer';
import { CardAnimatedBorderGradient } from '../components/CardAnimatedBorderGradient';
import { CardSpotlight } from '../components/CardSpotlight ';

export const Home: React.FC = (): JSX.Element => {
  return (
    <>
      {/* Main container for the application */}
      <div className='relative w-screen h-full'>
        <ButtonStart />
        {/* <PrincipalVideo /> */}
        <Parallax speed={-100}>
          <PrincipalVideo />
        </Parallax>

        {/* Header section containing the navigation and introductory content */}
        <header className='fixed z-20 top-0 h-full'>
          <Parallax scaleY={[10, 0]}>
            <Nav/>
          </Parallax>
          
        </header>

        <main className='relative w-[80%] mx-auto'>
        <Parallax>
          <CardSpotlight configs=''>
          <section className='relative w-full min-h-screen mx-auto m-10 rounded-xl z-30 grid grid-cols-1 gap-3'>
            <article className='flex mx-auto p-10 justify-center text-center items-center flex-wrap m-4'>
              <h1 className='text-center italic text-6xl mb-10'>The History.</h1>
              <span className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac massa dignissim, posuere ex id, commodo urna. Integer varius diam dui, ac pretium ipsum condimentum a. Proin laoreet efficitur velit ac finibus. In aliquet felis quis arcu posuere, vel pulvinar odio dignissim. Maecenas convallis pharetra placerat. Vestibulum in luctus est, eget pretium quam. Curabitur at dui in quam posuere aliquet eu sit amet diam. Curabitur accumsan interdum blandit. Cras sapien ipsum, congue id egestas vel, aliquam in turpis.
              </span>
              <span className='text-lg'>
                Vivamus quam justo, porttitor commodo tempus vitae, dignissim eu nulla. Integer tempus est eu mattis pharetra. Maecenas placerat fringilla congue.
                In in sapien in nisl egestas imperdiet nec nec ipsum. Morbi faucibus quis nisl quis porttitor. Nulla ornare condimentum magna, eu elementum ante rhoncus vel.
              </span>
              <span className='text-lg mb-10'>
                Quisque ante lectus, mattis nec rutrum non, sollicitudin sit amet velit. Vivamus mollis enim non justo molestie pharetra. Sed a cursus quam, in iaculis mi. Quisque orci arcu, vehicula ac lobortis in, dictum vitae nunc. Sed diam neque, tempus vitae commodo non, ultricies vel metus. Sed sodales venenatis ex, vel auctor nibh dignissim ac.
              </span>
            </article>
          </section>
          </CardSpotlight>
          </Parallax>

          <Parallax>
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

          <Parallax>
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
