/**
 * Main App
 *
 */

import React, { Component } from 'react'
import StickyMenuBar from '../shared/menu/StickyMenuBar'
import MainMenu from '../shared/menu/MainMenu'
import Body from 'dnb-ui-lib/src/components/body'

// UI Style
import 'dnb-ui-lib/src/style'
import 'dnb-ui-lib/src/patterns/style'

// react component
export default class App extends Component {
  render() {
    return (
      <Body>
        <StickyMenuBar />
        <MainMenu />
      </Body>
    )
  }
}
