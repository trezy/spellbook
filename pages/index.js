// Module imports
import Link from 'next/link'
import React from 'react'





// Component imports
import Page from '../components/Page'
import SpellList from '../components/SpellList'





// Data imports
import cantrips from '../data/spells/cantrips.json'
import classes from '../data/classes.json'
import magicSchools from '../data/magic-schools.json'





export default class extends React.Component {

  /***************************************************************************\
    Private Methods
  \***************************************************************************/

  _checkboxFilter (event) {
    let target = event.target
    let filter = target.getAttribute('data-filter')
    let checked = target.checked
    let filters = this.state.classFilters

    filters = this._updateFilterArray(filters, filter, checked)

    this.setState({
      classFilters: filters,
    })
  }

  _handleMagicSchoolFilter (event) {
    let target = event.target
    let filter = target.getAttribute('data-filter')
    let checked = target.checked
    let filters = this.state.magicSchoolFilters

    filters = this._updateFilterArray(filters, filter, checked)

    this.setState({
      magicSchoolFilters: filters,
    })
  }

  _updateFilterArray (filterArray, filter, shouldAdd) {
    if (shouldAdd) {
      filterArray.push(filter)

    } else {
      let filterIndex = filterArray.indexOf(filter)

      if (filterIndex !== -1) {
        filterArray.splice(filterIndex, 1)
      }
    }

    return filterArray
  }





  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  constructor (props) {
    super(props)

    this._checkboxFilter = this._checkboxFilter.bind(this)
    this._handleMagicSchoolFilter = this._handleMagicSchoolFilter.bind(this)

    this.state = {
      classFilters: [],
      magicSchoolFilters: [],
      maxLevelFilter: 9,
      minLevelFilter: 0,
      textFilter: '',
    }
  }

  render () {
    return (
      <Page title={this.title}>
        <header className="page-header">
          <h2>Book</h2>
        </header>

        <div className="filters">
          <header>
            <h3>Filters</h3>
          </header>

          <input
            id="text-filter"
            onChange={event => this.setState({ textFilter: event.target.value })}
            placeholder="Search..."
            type="search" />

          <div className="">
            <input
              id="min-level-filter"
              onChange={event => this.setState({ minLevelFilter: event.target.value })}
              placeholder="Minimum Level..."
              type="number"
              value={this.state.minLevelFilter} />

            <input
              id="max-level-filter"
              onChange={event => this.setState({ maxLevelFilter: event.target.value })}
              placeholder="Maximum Level..."
              type="number"
              value={this.state.maxLevelFilter} />
          </div>

          <ul>
            {classes.map(item => {
              return (
                <li key={item.slug}>
                  <input data-filter={item.slug} hidden id={item.slug} onChange={this._checkboxFilter} type="checkbox" /> <label htmlFor={item.slug}>{item.name}</label>
                </li>
              )
            })}
          </ul>

          <ul>
            {magicSchools.map(item => {
              return (
                <li key={item.slug}>
                  <input data-filter={item.slug} hidden id={item.slug} onChange={this._handleMagicSchoolFilter} type="checkbox" /> <label htmlFor={item.slug}>{item.name}</label>
                </li>
              )
            })}
          </ul>
        </div>

        <h3>Spells</h3>

        <SpellList
          classFilters={this.state.classFilters}
          magicSchoolFilters={this.state.magicSchoolFilters}
          maxLevelFilter={this.state.maxLevelFilter}
          minLevelFilter={this.state.minLevelFilter}
          textFilter={this.state.textFilter} />
      </Page>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get title () {
    return 'Spell Search'
  }
}
