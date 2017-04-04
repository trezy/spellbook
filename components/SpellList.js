// Module imports
import Fuse from 'fuse.js'
import React from 'react'





// Component imports
import Spell from './Spell'





// Data imports
import cantrips from '../data/spells/cantrips.json'
import level1 from '../data/spells/level1.json'
import level2 from '../data/spells/level2.json'
import level3 from '../data/spells/level3.json'





export default class extends React.Component {

  /***************************************************************************\
    Private Methods
  \***************************************************************************/

  _filterOnArray (list, field, filters) {
    return list.filter(item => {
      if (!filters.length) {
        return true

      } else {
        for (let i = 0, length = filters.length; i < length; i++) {
          let filter = filters[i]

          if (item['field'].indexOf(filter) !== -1) {
            return true
          }
        }
      }

      return false
    })
  }

  _filterSpellsByClass (spells, classFilters) {
    return spells.filter(spell => {
      if (!classFilters.length) {
        return true

      } else {
        for (let i = 0, length = classFilters.length; i < length; i++) {
          let filter = classFilters[i]

          if (spell.classes.indexOf(filter) !== -1) {
            return true
          }
        }
      }

      return false
    })
  }

  _filterSpellsByLevel (spells, minLevelFilter, maxLevelFilter) {
    return spells.filter(spell => {
      return (spell.level >= minLevelFilter) && (spell.level <= maxLevelFilter)
    })
  }

  _filterSpellsByMagicSchool (spells, magicSchoolFilters) {
    return spells.filter(spell => {
      if (!magicSchoolFilters.length) {
        return true

      } else {
        for (let i = 0, length = magicSchoolFilters.length; i < length; i++) {
          let filter = magicSchoolFilters[i]

          if (spell.school === filter) {
            return true
          }
        }
      }

      return false
    })
  }

  _filterSpellsByText (spells, textFilter) {
    this.fuse.set(spells)

    return this.fuse.search(textFilter)
  }





  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  constructor (props) {
    super(props)

    this.fuse = new Fuse([], {
      keys: [
        'description',
        'name'
      ]
    })
  }

  render () {
    let classFilters = this.props.classFilters
    let magicSchoolFilters = this.props.magicSchoolFilters
    let maxLevelFilter = this.props.maxLevelFilter
    let minLevelFilter = this.props.minLevelFilter
    let textFilter = this.props.textFilter
    let spells = cantrips.concat(level1, level2, level3)

    spells = this._filterSpellsByLevel(spells, minLevelFilter, maxLevelFilter)

    if (magicSchoolFilters) {
      spells = this._filterSpellsByMagicSchool(spells, magicSchoolFilters)
    }

    if (classFilters) {
      spells = this._filterSpellsByClass(spells, classFilters)
    }

    if (textFilter) {
      spells = this._filterSpellsByText(spells, textFilter)
    }

    return (
      <ul>
        {spells.map((spell, index) => {
          return (
            <li key={index}>
              <Spell key={spell.name} {...spell} />
            </li>
          )
        })}
      </ul>
    )
  }
}
