export default function fizzbuzz(number) {
  if (number < 0) {
    throw new RangeError('Number must be positive')
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

console.log(fizzbuzz(10))
