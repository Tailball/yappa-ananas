import React from 'react'

import Award from '../buildingblocks/Award';

class Home extends React.Component {

  render() {
    return (
      <section id="home">
        <div className="home-center">
          <div className="home-center-cta">
            <h1>Niet uw <span className="underline">typische</span><br/>ananas!</h1>
            <button className="home-center-cta">Aanpak</button>
          </div>
          
          <div className="home-center-awards">
            <Award awardtitle="Customer Intimacy Award 2017" />
            <Award awardtitle="Exact Pineapple Accountant 2017" />
          </div>

        </div>
      </section>
    )
  }
}

export default Home;