// Module imports
import marked from 'marked'
import React from 'react'





export default class extends React.Component {
  render () {
    return (
      <div className="spell">
        <h4>
          {this.props.name}
          <small>Level {this.props.level} {this.props.school}</small>
        </h4>
        <dl className="deets">
          <dt>Concentration:</dt>
          <dd>{this.props.concentration ? 'Yes' : 'No'}</dd>

          <dt>Casting Time:</dt>
          <dd>{this.props.castingTime}</dd>

          <dt>Range:</dt>
          <dd>{this.props.range}</dd>

          <dt>Components:</dt>
          <dd>{this.props.components}</dd>

          <dt>Duration:</dt>
          <dd>{this.props.duration}</dd>
        </dl>
        <div dangerouslySetInnerHTML={{__html: marked(this.props.description)}} />
      </div>
    )
  }
}
