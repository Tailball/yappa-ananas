import React from 'react'

class PageXtra extends React.Component {

  render() {
    return (
      <section id="PageXtra" style={{backgroundColor: this.props.color}}>
        <h1>placeholder for page {this.props.pagenumber}</h1>
      </section>
    )
  }
}

export default PageXtra;