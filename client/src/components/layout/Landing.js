import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import homeSlider1 from '../../img/homeSlider1.jpg'
import homeSlider2 from '../../img/homeSlider2.jpg'
import homeSlider3 from '../../img/homeSlider3.jpg'
import album1 from '../../img/album1.jpg'
import album2 from '../../img/album2.jpg'
import album3 from '../../img/album3.jpg'
import album4 from '../../img/album4.jpg'
import Footer from './Footer'

const eventList = [
  {
    date: '24',
    month: 'Mar',
    day: 'Thu',
    content: 'DAVID GUETTA & MORTEN present FUTURE RAVE @ Story, Miami (US)',
    tickets: 3
  },
  {
    date: '26',
    month: 'Mar',
    day: 'Sat',
    content: 'Liv Nightclub, Miami (US)',
    tickets: 3
  },
  {
    date: '27',
    month: 'Mar',
    day: 'Sun',
    content: 'Ultra Music Festival, Miami (US)',
    tickets: 0
  },
  {
    date: '02',
    month: 'Apr',
    day: 'Thu',
    content: 'Encore Beach Club, Las Vegas (US)',
    tickets: 3
  },
  {
    date: '09',
    month: 'Apr',
    day: 'Sat',
    content: 'Encore Beach Club, Las Vegas (US)',
    tickets: 3
  },
  {
    date: '16',
    month: 'Apr',
    day: 'Sun',
    content: 'Encore Beach Club, Las Vegas (US)',
    tickets: 3
  }
]

const Landing = () => {

  return (
    <div className='landing'>
      <div className='header'>
        Header
      </div>
      <div className='home-slider'>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}
          swipeable={true}
          emulateTouch={true}
        >
          <div>
            <img alt='SETIMAGE' src={homeSlider1} style={{ maxHeight: '100vh' }} />
            <div className="legend">
              <div className='lg-h1 custom-pink font-weight-bold'>WWYD?</div>
              <div className='lg-h2 custom-pink'>JOEL CORRY x DAVID GUETTA x BRYSON TILLER</div>
              <div className='d-flex justify-content-center'>
                <div className='lg-h3 bg-custom-pink text-white px-3'>LISTEN NOW!</div>
              </div>
            </div>
          </div>
          <div>
            <img alt='SETIMAGE' src={homeSlider2} style={{ maxHeight: '100vh' }} />
            <div className="legend">
              <div className='lg-h1'>redruM</div>
              <div className='lg-h2'>SORANA & DAVID GUETTA</div>
              <div className='d-flex justify-content-center'>
                <div className='lg-h3 bg-white text-dark px-3'>OUT NOW!</div>
              </div>
            </div>
          </div>
          <div>
            <img alt='SETIMAGE' src={homeSlider3} style={{ maxHeight: '100vh' }} />
            <div className="legend">
              <div className='lg-h1'>LOUVRE ABU DHABI</div>
              <div className='lg-h2'>LET'S CELEBRATE 2022</div>
              <div className='d-flex justify-content-center'>
                <div className='lg-h3 bg-white text-dark px-3'>FULL SET AVAILABLE!</div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className='latest-albums bg-light py-5'>
        <div className='container-fluid p-5'>
          <div className='h1'>Latest Albums / Singles</div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-md-6 p-4'>
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
                <div className='col-md-6 p-4'>
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
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-md-6 p-4'>
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
                <div className='col-md-6 p-4'>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='event-lists'>
        <div className='container-fluid my-5 p-5'>
          {eventList.map((item, index) =>
            <div key={index} className='event-list cursor-pointer'>
              <div className='row align-items-center'>
                <div className='col-lg-2'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className='mr-4 h1 font-weight-bold' style={{ fontSize: '60px' }}>{item.date}</div>
                    <div className='h5 mr-4'>
                      <div>{item.month}</div>
                      <div>{item.day}</div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-7'>
                  <div className='h5 font-weight-bold'>
                    {item.content}
                  </div>
                </div>
                <div className='col-lg-3 text-right font-weight-bold py-2'>
                  {item.tickets > 0
                    ?
                    <><i className='fa fa-angle-double-right mr-2'></i>buy tickets</>
                    :
                    <>sold out!</>
                  }
                </div>
              </div>
              <hr />
            </div>
          )}
          <div className='mt-5 text-center'>
            <button className='bg-black p-3 px-5 text-white'>view all</button>
          </div>
        </div>
      </div>
      <div className='latest-blog bg-light py-5'>
        <div className='container-fluid p-5'>
          <div className='h1 mb-4'>Latest Albums / Singles</div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 my-3'>
              <div className='shadow bg-white h-450'>
                <div class="video-container">
                  <iframe title='settitle' src="https://www.youtube.com/embed/ft4jcPSLJfY" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='p-4 '>
                  <div className='h4'>David Guetta, Bebe Rexha & J Balvin - Say My Name (Official Video)</div>
                  <div className='h6 text-secondary'>20 November 2018</div>
                  <div>...</div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 my-3'>
              <div className='shadow bg-white h-450'>
                <div class="video-container">
                  <iframe title='settitle' src="https://www.youtube.com/embed/joTHLj2VZZ0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='p-4 '>
                  <div className='h4'>Full Set at Capital's Jingle Bell Ball 2018</div>
                  <div className='h6 text-secondary'>9 December 2018</div>
                  <div>...</div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 my-3'>
              <div className='shadow bg-white h-450'>
                <div class="video-container">
                  <iframe title='settitle' src="https://www.youtube.com/embed/1Wuxhz905Xg" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='p-4 '>
                  <div className='h4'>BEHIND THE SCENES OF DAVID GUETTA'S CAREER [2018 FG Interview]</div>
                  <div className='h6 text-secondary'>17 December 2018</div>
                  <div>...</div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 my-3'>
              <div className='shadow bg-white h-450'>
                <div class="video-container">
                  <iframe title='settitle' src="https://www.youtube.com/embed/UFUXdov7WkE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='p-4 '>
                  <div className='h4'>David Guetta - Megamashup by Djs From Mars</div>
                  <div className='h6 text-secondary'>31 December 2018</div>
                  <div>...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
