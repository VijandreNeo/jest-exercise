read this: https://www.browserstack.com/guide/unit-testing-for-nodejs-using-jest
here are the jest docs in case you need them: https://jestjs.io/docs/api
exercise for this afternoon:
write a node module that exports a fizzbuzz function
the fizzbuzz function will:
accept a positive integer as it’s sole parameter
return "fizz" if the parameter is divisible by 3
return "buzz" if the parameter is divisible by 5
return "fizzbuzz" if the parameter is divisible by 3 and 5
return "" if the parameter is not divisible by either 3or 5
write unit tests using Jest to test all the functionality/test cases above
NOTE: You may encounter issues importing ESM modules to your Jest tests. See https://jestjs.io/docs/ecmascript-modules on how to fix.