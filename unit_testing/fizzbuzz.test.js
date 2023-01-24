import { describe, test, expect } from '@jest/globals'

import fizzbuzz from '../fizzbuzz.js'

describe('testing fizzbuzz function', () => {
  test('numbers divisible by 3', () => {
    const result = fizzbuzz(12)

    expect(result).toMatch('fizz')
  })

  test('numbers divisible by 5', () => {
    const result = fizzbuzz(20)

    expect(result).toMatch('buzz')
  })

  test('numbers divisible by 3 and 5', () => {
    const result = fizzbuzz(15)

    expect(result).toMatch('fizzbuzz')
  })

  test('numbers divisible by neither 3 nor 5', () => {
    const result = fizzbuzz(24)

    expect(result).toMatch('')
  })

  test('passing negative numbers', () => {
    expect(() => fizzbuzz(-1)).toThrow()
  })

  test('passing multiple arguments', () => {
    expect(() => fizzbuzz(3, 5)).toThrow()
  })

  test('passing a decimal value', () => {
    expect(() => fizzbuzz(0.1)).toThrow()
  })

  test('passing non-integer value', () => {
    expect(() => fizzbuzz('hello')).toThrow()
    expect(() => fizzbuzz(NaN)).toThrow()
    expect(() => fizzbuzz(Infinity)).toThrow()
  })
})
