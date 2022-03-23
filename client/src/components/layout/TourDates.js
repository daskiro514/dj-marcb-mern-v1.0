import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import tourImage from '../../img/tourImage.jpg'

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

const TourDates = () => {

  return (
    <div className='tour-dates'>
      <Navbar color={'white'} />
      <div className='top-image'>
        <div className='container-fluid'>
          <div className='row'>
            <img src={tourImage} alt='SETIMAGE' className='img-fluid' />
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
      <Footer />
    </div>
  )
}

export default TourDates