/**
 * ATTENTION: This file is auto generated by using "prepareTemplates".
 * Do not change the content!
 *
 */

/**
 * Library Index template to autogenerate all the components and patterns
 * Used by "prepareTemplates"
 */

import { registerElement } from '../shared/component-helper'

// import all the aviable components
import Button from './button/Button'
import Checkbox from './checkbox/Checkbox'
import DatePicker from './date-picker/DatePicker'
import Dropdown from './dropdown/Dropdown'
import FormLabel from './form-label/FormLabel'
import FormRow from './form-row/FormRow'
import FormSet from './form-set/FormSet'
import FormStatus from './form-status/FormStatus'
import GlobalError from './global-error/GlobalError'
import GlobalStatus from './global-status/GlobalStatus'
import Icon from './icon/Icon'
import IconPrimary from './icon-primary/IconPrimary'
import Input from './input/Input'
import InputMasked from './input-masked/InputMasked'
import LineTitle from './line-title/LineTitle'
import Logo from './logo/Logo'
import Modal from './modal/Modal'
import Notification from './notification/Notification'
import Number from './number/Number'
import ProgressIndicator from './progress-indicator/ProgressIndicator'
import Radio from './radio/Radio'
import Section from './section/Section'
import Slider from './slider/Slider'
import Space from './space/Space'
import StepIndicator from './step-indicator/StepIndicator'
import Switch from './switch/Switch'
import Tabs from './tabs/Tabs'
import Textarea from './textarea/Textarea'
import ToggleButton from './toggle-button/ToggleButton'

// define / export all the aviable components
export {
  Button,
  Checkbox,
  DatePicker,
  Dropdown,
  FormLabel,
  FormRow,
  FormSet,
  FormStatus,
  GlobalError,
  GlobalStatus,
  Icon,
  IconPrimary,
  Input,
  InputMasked,
  LineTitle,
  Logo,
  Modal,
  Notification,
  Number,
  ProgressIndicator,
  Radio,
  Section,
  Slider,
  Space,
  StepIndicator,
  Switch,
  Tabs,
  Textarea,
  ToggleButton
}

export const getComponents = () => {
  return {
    Button,
    Checkbox,
    DatePicker,
    Dropdown,
    FormLabel,
    FormRow,
    FormSet,
    FormStatus,
    GlobalError,
    GlobalStatus,
    Icon,
    IconPrimary,
    Input,
    InputMasked,
    LineTitle,
    Logo,
    Modal,
    Notification,
    Number,
    ProgressIndicator,
    Radio,
    Section,
    Slider,
    Space,
    StepIndicator,
    Switch,
    Tabs,
    Textarea,
    ToggleButton
  }
}

let webComponentsAreEnabled = false
export const enableWebComponents = () => {
  if (webComponentsAreEnabled) return false
  webComponentsAreEnabled = true
  const components = getComponents()
  // register this component to work with custom element
  for (const c in components) {
    if (components[c] && components[c].tagName) {
      registerElement(
        components[c].tagName,
        components[c],
        components[c].defaultProps
      )
    }
  }
}

export default {
  enableWebComponents
}
