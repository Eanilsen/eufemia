/**
 * Helper Tests
 *
 */

// import React from 'react'
import '../../../core/jest/jestSetup'
import {
  spacePatterns,
  translateSpace,
  splitTypes,
  sumTypes,
  createTypeModifyers,
  findType,
  findNearestTypes,
  isValidSpaceProp,
  createStyleObject,
  createSpacingClasses
} from '../SpacingHelper'

describe('spacePatterns', () => {
  it('should be an object with valid keys', () => {
    expect(spacePatterns).toHaveProperty('small')
    expect(spacePatterns.small).toBe(1)
  })
})

describe('isValidSpaceProp', () => {
  it('should confirm our valid spacing types', () => {
    expect(isValidSpaceProp('right')).toBe(true)
    expect(isValidSpaceProp('left')).toBe(true)
    expect(isValidSpaceProp('top')).toBe(true)
    expect(isValidSpaceProp('bottom')).toBe(true)
    expect(isValidSpaceProp('x')).toBe(false)
  })
})

describe('translateSpace', () => {
  it('should translate and calc types', () => {
    expect(translateSpace('large')).toBe(2)
    expect(translateSpace('xx-large-x2')).toBe(7)
    expect(translateSpace('medium-x2')).toBe(3)
  })
})

describe('splitTypes', () => {
  it('should split types correcttly', () => {
    expect(splitTypes('large medium')).toEqual(['large', 'medium'])
    expect(splitTypes(['large', 'medium'])).toEqual(['large', 'medium'])
    expect(splitTypes(2)).toEqual([2])
    expect(splitTypes(true)).toEqual(['small'])
    expect(splitTypes(null)).toBeNull()
  })
})

describe('sumTypes', () => {
  it('should calc types with correct sum', () => {
    expect(sumTypes('large x-small')).toEqual(2.5)
  })
})

describe('createTypeModifyers', () => {
  it('should return an array with modifyers', () => {
    expect(createTypeModifyers('0.5 1 2')).toEqual([
      'x-small',
      'small',
      'large'
    ])
    expect(createTypeModifyers('2 0.5')).toEqual(['large', 'x-small'])
  })
})

describe('findNearestTypes', () => {
  it('should find the nearest type in correct order', () => {
    expect(findNearestTypes(2.5)).toEqual(['large', 'x-small'])
    expect(findNearestTypes(5)).toEqual(['xx-large', 'medium'])
    expect(findNearestTypes(8)).toEqual(['xx-large-x2', 'small'])
  })
})

describe('findType', () => {
  it('should find from a value the equivalent type', () => {
    expect(findType(2)).toBe('large')
    expect(findType(3.5)).toBe('xx-large')
  })
})

describe('createSpacingClasses', () => {
  it('should return correct spacing classes', () => {
    expect(createSpacingClasses({ right: 'large x-small' })).toEqual([
      'dnb-space__right--large',
      'dnb-space__right--x-small'
    ])
  })
  it('should return a class with zero classes', () => {
    expect(createSpacingClasses({ right: false })).toEqual([
      'dnb-space__right--zero'
    ])
    expect(createSpacingClasses({ right: 0 })).toEqual([
      'dnb-space__right--zero'
    ])
    expect(createSpacingClasses({ right: null })).toEqual([])
  })
})

describe('createStyleObject', () => {
  it('should create a valid style object', () => {
    expect(createStyleObject({ top: 'medium large' })).toEqual({
      marginTop: '3.5rem'
    })
  })
})
