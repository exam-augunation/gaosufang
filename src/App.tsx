import 'antd/dist/antd.css';
import * as React from 'react';
// import '/common/style.moudle.css'
// import '@/common/style.moudle.css'
import Router from './router'

class App extends React.Component {
  constructor(props: Readonly<{}>){
    super(props)
  }
  public render() {
    return (
      <div className="App">
         <Router/>
      </div>
    );
  }
}
export default App
