/**
 * Component Test
 *
 */

import React from 'react'
import {
  mount,
  fakeProps,
  axeComponent,
  toJson,
  loadScss
} from '../../../core/jest/jestSetup'
import Component from '../FormLabel'
import Input from '../../input/Input'

// just to make sure we re-run the test in watch mode due to changes in theese files
import _form_label from '../style/_form-label.scss' // eslint-disable-line
import dnb_form_label from '../style/dnb-form-label.scss' // eslint-disable-line
import dnb_form_label_theme_ui from '../style/themes/dnb-form-label-theme-ui.scss' // eslint-disable-line

const props = fakeProps(require.resolve('../FormLabel'), {
  optional: true
})

describe('FormLabel component', () => {
  const Comp = mount(<Component {...props} />)

  it('have to match snapshot', () => {
    expect(toJson(Comp)).toMatchSnapshot()
  })

  it('should forward unlisted attributes like "aria-hidden"', () => {
    const Comp = mount(<Component {...props} for_id="input" aria-hidden />)
    expect(Comp.find('label[aria-hidden]').exists()).toBe(true)
    expect(
      Comp.find('label[aria-hidden]')
        .instance()
        .getAttribute('aria-hidden')
    ).toBe('true')
  })

  it('should validate with ARIA rules', async () => {
    expect(await axeComponent(Comp)).toHaveNoViolations()
  })

  it('should validate with ARIA rules as a label with a input', async () => {
    const LabelComp = mount(<Component {...props} for_id="input" />)
    const InputComp = mount(<Input id="input" value="some value" />)
    expect(await axeComponent(LabelComp, InputComp)).toHaveNoViolations()
  })
})

describe('FormLabel scss', () => {
  it('have to match snapshot', () => {
    const scss = loadScss(require.resolve('../style/dnb-form-label.scss'))
    expect(scss).toMatchSnapshot()
  })
  it('have to match default theme snapshot', () => {
    const scss = loadScss(
      require.resolve('../style/themes/dnb-form-label-theme-ui.scss')
    )
    expect(scss).toMatchSnapshot()
  })
})