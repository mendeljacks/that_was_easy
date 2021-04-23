import {CircularProgress} from '@material-ui/core';
import {observer} from 'mobx-react-lite';
import './App.css';
import {store} from './store'


export const App = observer(() =>
  <button className='btn' onClick={() => store.on_press()}>
    {
      store.loading ? <CircularProgress color='white' thickness={4} size={120} /> : 'easy'

    }
  </button>
)
