/**
 * Web DatePicker Component
 *
 */

import {
  subMonths,
  addMonths,
  isWithinRange,
  isAfter,
  isBefore,
  isSameDay,
  subDays,
  isToday,
  isWeekend,
  isSameMonth,
  addDays,
  startOfWeek,
  getDay,
  startOfMonth,
  getDaysInMonth
} from 'date-fns'

// Is used as DatePickerCalc
export const makeDayObject = (
  date,
  { startDate, endDate, hoverDate, minDate, maxDate, month }
) => {
  const range = getRange(startDate, endDate, hoverDate)
  return {
    date,
    isToday: isToday(date),
    isWeekend: isWeekend(date),
    isLastMonth: isSameMonth(subMonths(date, 1), month),
    isNextMonth: isSameMonth(addMonths(date, 1), month),
    isStartDate: isStartDate(date, range),
    isEndDate: isEndDate(date, range),
    isWithinSelection: isWithinSelection(date, startDate, endDate),
    isPreview: isPreview(date, startDate, endDate, hoverDate),
    isDisabled: isDisabled(date, minDate, maxDate)
  }
}

// return an array of objects with dates and extra info
export const getCalendar = (month, weekStartsOn = 0) => {
  if (calendarCache[month]) {
    return calendarCache[month]
  }
  // Get day of the week of the first day of month, eg => 3
  // Add 7 days 7 to make sure it's not negative when subtracting weekStartsOn and wraps around
  const firstDay = (7 + getDay(startOfMonth(month)) - weekStartsOn) % 7
  const thisMonth = getMonth(month)
  const lastMonth = getMonth(
    subMonths(month, 1),
    getDaysInMonth(subMonths(month, 1)) - firstDay
  )
  // use this variant if it is OK with empty slots at the bottom
  // let fillCount = 35 - (thisMonth.length + firstDay)
  // if (fillCount < 0) {
  //   fillCount = 42 - (thisMonth.length + firstDay)
  // }
  const fillCount = 42 - (thisMonth.length + firstDay)
  const nextMonth = getMonth(
    addMonths(month, 1),
    0,
    fillCount > -1 ? fillCount : 0
  )
  return (calendarCache[month] = [
    ...lastMonth,
    ...thisMonth,
    ...nextMonth
  ])
}
const calendarCache = {}

// calculates offset from sunday, eg monday is +1
export const dayOffset = dayName => {
  const week = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ]
  return dayName ? week.indexOf(dayName.toLowerCase()) : 0
}

// creates a date range object and automatically swaps startDate and endDate if endDate is before startDate
export const toRange = (startDate, endDate) => {
  if (isBefore(endDate, startDate)) {
    [startDate, endDate] = [endDate, startDate]
  }
  return { startDate, endDate }
}

// returns startDate and endDate if both dates are selected
// otherwise uses the startDate and hoverDate
// unless user hasn't hovered, then use start date twice
const getRange = (startDate, endDate, hoverDate) => {
  if (startDate && endDate) {
    return toRange(startDate, endDate)
  } else if (startDate && hoverDate) {
    return toRange(startDate, hoverDate)
  } else {
    return toRange(startDate, startDate)
  }
}

// returns an array of dates for each day of the current week
// weekStartsOn is a number, use dayOffset to convert from a string
export const getWeek = weekStartsOn => {
  const startDay = startOfWeek(new Date(), { weekStartsOn })
  return Array(7)
    .fill(1)
    .map((value, i) => addDays(startDay, i))
}

// returns an array of dates of the month, optionally skip x number of days
export const getMonth = (month, skip = 0, limit) => {
  const startDay = startOfMonth(month)
  let size = getDaysInMonth(month) - skip
  size = Math.min(Math.max(parseInt(size), 0), limit > -1 ? limit : size)
  size = size < 0 ? 0 : size
  return Array(size)
    .fill(1)
    .map((value, i) => addDays(startDay, i + skip))
}

// date is between selection range
const isWithinSelection = (date, startDate, endDate) => {
  const range = toRange(startDate, endDate)
  return startDate && endDate
    ? isWithinRange(date, range.startDate, range.endDate)
    : false
}

// date is before minDate or after maxDate
const isDisabled = (date, minDate, maxDate) => {
  // isBefore and isAfter return false if comparison date is undefined, which is useful here in case minDate and maxDate aren't supplied
  return (
    (minDate && isBefore(date, subDays(minDate, 1))) ||
    (maxDate && isAfter(date, maxDate))
  )
}

// date selected is start date
const isStartDate = (date, range) => {
  return range.startDate && isSameDay(date, range.startDate)
}

// date selected is end date
const isEndDate = (date, range) => {
  return range.endDate && isSameDay(date, range.endDate)
}

// date is between startDate (exclusive) and hoverDate (inclusive)
const isPreview = (date, startDate, endDate, hoverDate) => {
  const previewRange = toRange(startDate, hoverDate)
  return (
    startDate &&
    !endDate &&
    // To exlude "isPreview" from startDate/endDate, we have to enable theese two lines
    // !isStartDate(date, previewRange) &&
    // !isEndDate(date, previewRange) &&
    isWithinRange(date, previewRange.startDate, previewRange.endDate)
  )
}