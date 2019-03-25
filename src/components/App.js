import React from 'react';

import Home from './sections/Home';
import Page2 from './sections/Page2';
import PageXtra from './sections/PageXtra';
import Footer from './sections/Footer';
import NavBar from './nav/NavBar';
import NavMenu from './nav/NavMenu';

class App extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <Home />
                <Page2 />
                <PageXtra color="black" pagenumber="3" />
                <PageXtra color="darkgrey" pagenumber="4" />
                <Footer />
                <NavMenu />
            
            </React.Fragment>
        );
    }
}

export default App;