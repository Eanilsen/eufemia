/**
 * Screenshot Test
 * This file will not run on "test:staged" because we dont require any related files
 */

import {
  testPageScreenshot,
  setupPageScreenshot
} from '../../../core/jest/jestSetupScreenshots'

describe('Logo screenshot', () => {
  setupPageScreenshot({ url: '/uilib/components/logo' })
  it('have to match the default "Logo"', async () => {
    const screenshot = await testPageScreenshot({
      selector: '[data-dnb-test="logo-default"]'
    })
    expect(screenshot).toMatchImageSnapshot()
  })
  it('have to match the auto sized "Logo"', async () => {
    const screenshot = await testPageScreenshot({
      selector: '[data-dnb-test="logo-auto-size"]'
    })
    expect(screenshot).toMatchImageSnapshot()
  })
  it('have to match the inherited sized "Logo"', async () => {
    const screenshot = await testPageScreenshot({
      selector: '[data-dnb-test="logo-inherit-size"]'
    })
    expect(screenshot).toMatchImageSnapshot()
  })
})
