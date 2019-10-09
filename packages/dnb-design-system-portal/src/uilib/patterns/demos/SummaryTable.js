/**
 * ATTENTION: This file is auto generated by using "makeDemosFactory".
 * Do not change the content!
 *
 * "Patterns" Demo setup
 * Ready for imporing in page
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ItemWrapper from '../../../shared/parts/uilib/ItemWrapper'
import DemoComponent, {
  Example as CodeComponent
} from 'dnb-ui-lib/src/patterns/summary-table/Example'
import Description from 'dnb-ui-lib/src/patterns/summary-table/description.md'
import Details from 'dnb-ui-lib/src/patterns/summary-table/details.md'
import ExampleCode from 'raw-loader!../examples/SummaryTable.txt'

export default class SummaryTableDemo extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    Description: PropTypes.func,
    Details: PropTypes.func,
    DemoComponent: PropTypes.func,
    CodeComponent: PropTypes.func,
    hideTabs: PropTypes.bool
  }
  static defaultProps = {
    title: 'SummaryTable',
    id: 'summary-table',
    ExampleCode,
    Description,
    Details,
    DemoComponent,
    CodeComponent,
    callback: CodeComponent.AdditionalCallback || null,
    hideTabs: false
  }
  render() {
    return (
      <ItemWrapper {...SummaryTableDemo.defaultProps} {...this.props} />
    )
  }
}