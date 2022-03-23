import React from 'react'
import Header from './Header'
import album1 from '../../img/album1.jpg'
import album2 from '../../img/album2.jpg'
import album3 from '../../img/album3.jpg'
import album4 from '../../img/album4.jpg'
import Footer from './Footer'

const Discography = () => {

  return (
    <div className='discography'>
      <Header />
      <div className='bg-light'>
        <div className='container-fluid p-5'>
          <div className='h6 text-secondary'>David Guetta / Discography</div>
          <div className='h1'>Discography</div>
        </div>
      </div>
      <div className='latest-albums'>
        <div className='container-fluid p-5'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 p-4'>
              <div className='img-overlay'>
                <img alt='SETIMAGE' src={album1} className='img-fluid' />
                <div className='overlay-fade'></div>
                <p className='text-overlay ml-3'>
                  David Guetta
                  <br />
                  <span className='font-weight-bold h4'>What Would You Do?</span>
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 p-4'>
              <div className='img-overlay'>
                <img alt='SETIMAGE' src={album2} className='img-fluid' />
                <div className='overlay-fade'></div>
                <p className='text-overlay ml-3'>
                  David Guetta
                  <br />
                  <span className='font-weight-bold h4'>What Would You Do?</span>
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 p-4'>
              <div className='img-overlay'>
                <img alt='SETIMAGE' src={album3} className='img-fluid' />
                <div className='overlay-fade'></div>
                <p className='text-overlay ml-3'>
                  David Guetta
                  <br />
                  <span className='font-weight-bold h4'>What Would You Do?</span>
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 p-4'>
              <div className='img-overlay'>
                <img alt='SETIMAGE' src={album4} className='img-fluid' />
                <div className='overlay-fade'></div>
                <p className='text-overlay ml-3'>
                  David Guetta
                  <br />
                  <span className='font-weight-bold h4'>What Would You Do?</span>
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 p-4'>
              <div className='img-overlay'>
                <img alt='SETIMAGE' src={album3} className='img-fluid' />
                <div className='overlay-fade'></div>
                <p className='text-overlay ml-3'>
                  David Guetta
                  <br />
                  <span className='font-weight-bold h4'>What Would You Do?</span>
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 p-4'>
              <div className='img-overlay'>
                <img alt='SETIMAGE' src={album1} className='img-fluid' />
                <div className='overlay-fade'></div>
                <p className='text-overlay ml-3'>
                  David Guetta
                  <br />
                  <span className='font-weight-bold h4'>What Would You Do?</span>
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 p-4'>
              <div className='img-overlay'>
                <img alt='SETIMAGE' src={album4} className='img-fluid' />
                <div className='overlay-fade'></div>
                <p className='text-overlay ml-3'>
                  David Guetta
                  <br />
                  <span className='font-weight-bold h4'>What Would You Do?</span>
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 p-4'>
              <div className='img-overlay'>
                <img alt='SETIMAGE' src={album2} className='img-fluid' />
                <div className='overlay-fade'></div>
                <p className='text-overlay ml-3'>
                  David Guetta
                  <br />
                  <span className='font-weight-bold h4'>What Would You Do?</span>
                </p>
              </div>
            </div>
          </div>
          <div className='mt-5 text-center'>
            <button className='bg-black p-3 px-5 text-white'>Show More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Discography