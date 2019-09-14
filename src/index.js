import React from 'react';
import ReactDOM from 'react-dom';

import RegisterButton from './components/RegisterButton';

const App = () => (
  <div>
    <RegisterButton name="1234" label="RegisterURL" url="http://google.com" />
    <RegisterButton name="5678" label="RegisterID" />
  </div>
)


ReactDOM.render(<App />, document.getElementById('root'));

