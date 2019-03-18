import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { IoIosArrowDown } from 'react-icons/io';
import { Container } from 'reactstrap';

import './styles/Main.css';
import './styles/NavWrapper.css';

// Custom Elements
import MenuItem from './components/MenuItem';
import Introduction from './components/Introduction';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>

        {/* Navbar */}
        <div className="main-nav">
          <MenuItem/>
          <Introduction/>
          <Container className="wrapper--flex-center-space">
            <IoIosArrowDown
              size="68px"
              color="#e11414ff"
            />
          </Container>
        </div>

      </Provider>
    );
  }
}

export default App;
