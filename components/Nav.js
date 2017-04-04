// Module imports
import Link from 'next/link'
import React from 'react'




// Constants
const links = [
  {
    name: 'Home',
    path: '/'
  }
]





export default class extends React.Component {
  render () {
    return (
      <nav>
        <ul className="site">
          {links.map((link, index) => {
            let classes = ''

//            if (global.location && global.location.pathname === link.path) {
//              console.log(global.location.pathname)
//              classes = 'active'
//            }

            return (
              <li key={index}>
                <Link href={link.path}>
                  <a className={classes}>{link.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}
