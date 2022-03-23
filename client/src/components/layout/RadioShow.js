import React from 'react'
import Navbar from './Navbar'
import radioShowImage1 from '../../img/radioShowImage1.jpg'
import appleMusic from '../../img/appleMusic.svg'
import deezerMusic from '../../img/deezerMusic.svg'
import googleMusic from '../../img/googleMusic.svg'
import amazonMusic from '../../img/amazonMusic.svg'

const RadioShow = () => {

  return (
    <div className='radio-show'>
      <Navbar color='white' />
      <div className='container-fluid'>
        <div className='row'>
          <div className='blur w-100'>
            <div className='bg-radio-show'>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid position-absolute' style={{ zIndex: 50, top: '0px' }}>
        <div className='row'>
          <div className='col-lg-4'>
          </div>
          <div className='col-lg-4 text-center'>
            <div className='w-90'>
              <div>
                <img alt='SETIMAGE' src={radioShowImage1} className='img-fluid' />
              </div>
              <div className='position-relative'>
                <div className='bg-dark text-white p-3'>
                  <div className='h5'>
                    David Guetta - The Podcast
                  </div>
                  <div>Choose music service</div>
                </div>
                <div className='after-radio-title'></div>
              </div>
              <div className='bg-white'>
                <div className='d-flex justify-content-between align-items-center p-3'>
                  <div>
                    <img alt='SETIMAGE' src={appleMusic} className='img-fluid' width='120px' />
                  </div>
                  <div>
                    <button className='btn btn-light border'>Play</button>
                  </div>
                </div>
                <hr style={{margin: '0px'}} />
                <div className='d-flex justify-content-between align-items-center p-3'>
                  <div>
                    <img alt='SETIMAGE' src={deezerMusic} className='img-fluid' width='120px' />
                  </div>
                  <div>
                    <button className='btn btn-light border'>Play</button>
                  </div>
                </div>
                <hr style={{margin: '0px'}} />
                <div className='d-flex justify-content-between align-items-center p-3'>
                  <div>
                    <img alt='SETIMAGE' src={googleMusic} className='img-fluid' width='120px' />
                  </div>
                  <div>
                    <button className='btn btn-light border'>Play</button>
                  </div>
                </div>
                <hr style={{margin: '0px'}} />
                <div className='d-flex justify-content-between align-items-center p-3'>
                  <div>
                    <img alt='SETIMAGE' src={amazonMusic} className='img-fluid' width='120px' />
                  </div>
                  <div>
                    <button className='btn btn-light border'>Play</button>
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <div style={{fontSize: '13px'}}>By using this service, you agree to the use of cookies. Click here to manage your permissions.</div>
                <div className='pt-2' style={{fontSize: '13px'}}>This page may contain affiliate links.</div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RadioShow