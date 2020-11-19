import { Switch, Route } from 'react-router-dom'
import './default.scss'
import 'antd/dist/antd.css'

//pages
import Homepage from './pages/Homepage'
import DataCapture from './pages/DataCapture'

const App = props => {
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
