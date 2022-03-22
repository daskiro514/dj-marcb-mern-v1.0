import React from 'react'

const Footer = () => {

  return (
    <div className='footer bg-black py-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 p-4 text-white text-center'>
            <div className='h1 font-weight-bold'>David Guetta</div>
            <div>Copyright © 2018 What A Music / Powered by SoBuzzee</div>
            <div className='mt-3'>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-twitter h4 text-secondary'></i>
              </div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-facebook h4 text-secondary'></i>
              </div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-instagram h4 text-secondary'></i>
              </div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-youtube h4 text-secondary'></i>
              </div>
              <div className='mx-2 d-inline-block'>
                <i className='fa fa-spotify h4 text-secondary'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer