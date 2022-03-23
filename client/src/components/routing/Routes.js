import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Credits7 from '../layout/7Credits'
import Alert from '../layout/Alert'
import Discography from '../layout/Discography'
import ImageGallery from '../layout/ImageGallery'
import NotFound from '../layout/NotFound'
import RadioShow from '../layout/RadioShow'
import TourDates from '../layout/TourDates'

const Routes = props => {
  return (
    <section>
      <Alert />
      <Switch>
        <Route exact path='/7-credits' component={Credits7} />
        <Route exact path='/discography' component={Discography} />
        <Route exact path='/tour-dates' component={TourDates} />
        <Route exact path='/radio-show' component={RadioShow} />
        <Route exact path='/image-gallery' component={ImageGallery} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

export default Routes
