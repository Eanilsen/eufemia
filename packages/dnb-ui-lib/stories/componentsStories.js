/**
 * Storybook Story
 *
 */

import React from 'react'
import { Wrapper, Box } from './helpers'

// UI Components
import {
  Button,
  Tabs,
  Input,
  Icon,
  IconPrimary,
  Modal,
  Dropdown
} from '../src/components'

const stories = []
export default stories

stories.push([
  'Buttons',
  () => (
    <Wrapper>
      <Box>
        <Button text="Primary" icon="add" />
      </Box>
      <Box>
        <Button text="Secondary" variant="secondary" icon="add" />
      </Box>
      <Box>
        <Button text="Signal" variant="signal" icon="add" />
      </Box>
      <Box>
        <Button
          text="Tertiary"
          variant="tertiary"
          icon_position="left"
          icon="add"
        />
      </Box>
    </Wrapper>
  )
])

stories.push([
  'Anchor',
  () => (
    <Wrapper>
      <Box>
        <a href="http://dnb.no">
          <IconPrimary icon="chevron_left" /> Anchor
        </a>
      </Box>
      <Box>
        <a href="http://dnb.no">
          Anchor <IconPrimary icon="chevron_right" />
        </a>
      </Box>
      <Box>
        <a href="http://dnb.no">
          Default Anchor - Adipiscing per egestas duis feugiat dignissim
          quam cras eget non est ante purus taciti volutpat mi phasellus
          rhoncus ridiculus diam at proin fusce bibendum netus dapibus
          natoque varius eros litora
        </a>
      </Box>
      <Box>
        <a href="http://dnb.no" className="dnb-with-animation">
          Anchor with Animation <IconPrimary icon="chevron_right" />
        </a>
      </Box>
      <Box>
        <a href="http://dnb.no" className="dnb-with-animation">
          Anchor with Animation - Adipiscing per egestas duis feugiat
          dignissim quam cras eget non est ante purus taciti volutpat mi
          phasellus rhoncus ridiculus diam at proin fusce bibendum netus
          dapibus natoque varius eros litora
        </a>
      </Box>
      <Box>
        <a
          href="http://dnb.no"
          className="dnb-with-animation"
          style={{ whiteSpace: 'normal' }}
        >
          Anchor with Animation and no `white-space: pre;` - Adipiscing per
          egestas duis feugiat dignissim quam cras eget non est ante purus
          taciti volutpat mi phasellus rhoncus ridiculus diam at proin
          fusce bibendum netus dapibus natoque varius eros litora
        </a>
      </Box>
    </Wrapper>
  )
])

const tablistDataWithContent = [
  { title: 'First', key: 'first', content: <h2>First</h2> },
  { title: 'Second', key: 'second', content: () => <h2>Second</h2> }
]

stories.push([
  'Tabs',
  () => (
    <Wrapper>
      <Box>
        <Tabs data={tabsData}>{exampleTabsContent}</Tabs>
      </Box>
      <Box>
        <Tabs data={tablistDataWithContent} />
      </Box>
      <Box>
        <Tabs
          selected_key="second"
          data={{
            first: { title: 'First', content: () => <h2>First</h2> },
            second: { title: 'Second', content: () => <h2>Second</h2> }
          }}
        />
      </Box>
      <Box>
        <Tabs>
          <Tabs.Content title="First">
            <h2>First</h2>
          </Tabs.Content>
          <Tabs.Content title="Second" selected>
            <h2>Second</h2>
          </Tabs.Content>
        </Tabs>
      </Box>
    </Wrapper>
  )
])

stories.push([
  'Inputs',
  () => (
    <Wrapper>
      <Box>
        <Input label="Label:">Input ...</Input>
      </Box>
      <Box>
        <Input placeholder="Placeholder ..." />
      </Box>
      <Box>
        <Input
          label="Input with Status:"
          status="Message to the user"
          value="Input value with status"
        />
      </Box>
    </Wrapper>
  )
])

const svg = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.5 16.992H17.5C15.329 16.9253 13.2054 17.6344 11.51 18.992"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 17.008L14.184 8.641"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.605 2.133L11.236 1.203"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.605 2.133C6.728 4.066 3.56 7.618 4.984 11.211L5.168 11.676C5.21677 11.7996 5.31273 11.8987 5.43468 11.9514C5.55663 12.0041 5.69456 12.0061 5.818 11.957L7.484 11.3C7.60731 11.2513 7.70622 11.1556 7.759 11.034L8.238 9.925L9.346 10.405C9.46781 10.4578 9.6056 10.4599 9.729 10.411L18.64 6.874C18.7633 6.8253 18.8622 6.72962 18.915 6.608L19.394 5.5L20.5 5.98C20.6223 6.03056 20.7597 6.03056 20.882 5.98L22.549 5.319C22.6723 5.27022 22.7712 5.17443 22.8239 5.05271C22.8766 4.93099 22.8788 4.79332 22.83 4.67L22.645 4.205C21.223 0.616 16.482 0.2 11.605 2.133Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.5 23.008C22.411 22.9713 21.5367 22.097 21.5 21.008C21.5 22.1126 20.6046 23.008 19.5 23.008C18.3954 23.008 17.5 22.1126 17.5 21.008C17.5 22.1126 16.6046 23.008 15.5 23.008C14.3954 23.008 13.5 22.1126 13.5 21.008C13.4633 22.097 12.589 22.9713 11.5 23.008C10.411 22.9713 9.53674 22.097 9.5 21.008C9.46326 22.097 8.58899 22.9713 7.5 23.008C6.41101 22.9713 5.53674 22.097 5.5 21.008C5.46326 22.097 4.58899 22.9713 3.5 23.008C2.41101 22.9713 1.53674 22.097 1.5 21.008C1.45654 21.6905 1.08343 22.3091 0.5 22.666"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
stories.push([
  'Icons',
  () => (
    <Wrapper>
      <Box>
        <h1>
          My H1 with an Icon <Icon icon={svg} size="auto" />
        </h1>
        <h4>
          My H4 with the same Icon <Icon icon={svg} size="auto" />
        </h4>
      </Box>
      <Box>
        <IconPrimary icon="add" size="medium" />
      </Box>
      <Box>
        <Button icon="add" />
      </Box>
      <Box>
        <Button title="Click Me" on_click={showMe}>
          <IconPrimary icon="add" size="medium" />
        </Button>
      </Box>
      <Box>
        <Button
          title="Click Me"
          on_click={showMe}
          variant="tertiary"
          icon="add"
        />
      </Box>
    </Wrapper>
  )
])

stories.push([
  'Modal',
  () => (
    <Wrapper>
      <Modal
        modal_trigger_text="Open Modal"
        title="Title for accessibility"
      >
        <h2>Some content</h2>
        <Input>Focus me with Tab key</Input>
      </Modal>
    </Wrapper>
  )
])

stories.push([
  'Dropdown',
  () => (
    <Wrapper>
      <Box>
        <Dropdown data={data} selected_item={2} />
      </Box>
    </Wrapper>
  )
])

const exampleTabsContent = {
  first: () => <h2>First</h2>,
  second: () => <Input>Focus me with next Tab key</Input>,
  third: () => (
    <p>
      Eros semper blandit tellus mollis primis quisque platea sollicitudin
      ipsum
    </p>
  ),
  fourth: () => <h2>Fourth</h2>
}
const tabsData = [
  { title: 'First', key: 'first' },
  { title: 'Second', key: 'second' },
  { title: 'Third', key: 'third', disabled: true },
  { title: 'Fourth', key: 'fourth' }
]

const showMe = e => {
  console.log('showMe', e)
}

const data = [
  {
    selected_value: 'Brukskonto - Kari Nordmann',
    // outside_value: '1234.56.78901',
    content: 'Brukskonto - Kari Nordmann'
  },
  {
    content: ['1234.56.78902', 'Sparekonto - Ole Nordmann']
  },
  {
    selected_value:
      'Feriekonto - Kari Nordmann med et kjempelangt etternavnsen',
    // outside_value: '1134.56.78962',
    content: [
      '1134.56.78962',
      'Feriekonto - Kari Nordmann med et kjempelangt etternavnsen'
    ]
  },
  {
    selected_value: 'Oppussing - Ole Nordmann',
    // outside_value: '1534.96.48901',
    content: ['1534.96.48901', 'Oppussing - Ole Nordmann']
  }
]