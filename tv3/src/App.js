import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import './default.scss'
import 'antd/dist/antd.css'

//pages
import Homepage from './pages/Homepage'
import DataCapture from './pages/DataCapture'

//actions
import { downloadData } from './store/Admin/admin.actions'

const App = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(downloadData())
  })

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={
          () => <Homepage />
        } />

        <Route path='/data' render={
          () => <DataCapture />
        } />
      </Switch>
    </div>
  );
}

export default App;
