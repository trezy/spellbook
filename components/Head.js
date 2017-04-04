import NextHead from 'next/head'
import React from 'react'

export default class extends React.Component {
  render () {
    return (
      <NextHead>
        <title>{this.props.title} | Trezy.io</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/static/compiled/lib.css" rel="stylesheet" />
        <link href="/static/compiled/app.css" rel="stylesheet" />
      </NextHead>
    )
  }
}
