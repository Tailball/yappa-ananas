import React from 'react';

import Home from './sections/Home';
import Page2 from './sections/Page2';
import PageXtra from './sections/PageXtra';
import Footer from './sections/Footer';
import Nav from './nav/Nav';

class App extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
            
                <Home />
                <Page2 />
                <PageXtra />
                <Footer />
                <Nav />
            
            </React.Fragment>
        );
    }
}

export default App;