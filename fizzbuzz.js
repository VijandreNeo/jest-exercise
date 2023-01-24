export default function fizzbuzz(number, ...args) {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error('Integer must be positive')
  }

  if (args > 0) {
    throw new Error('Function only accepts 1 number argument')
  }

  let returnVal = ''

  if (number % 3 === 0) {
    returnVal = 'fizz'
  }

  if (number % 5 === 0) {
    returnVal += 'buzz'
  }

  return returnVal
}
