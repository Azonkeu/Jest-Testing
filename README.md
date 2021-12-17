# Jest-Testing

In this exercise, we will write a few practical tests for JavaScript functions using the Jest library. You should make sure you follow the [AAA pattern](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80) to make your tests easier for other developers to read and understand. You will also try to use the TDD approach.

*IMPORTANT NOTE*: Read all instructions before you start this exercise.

### Instructions

**Task 1**
- Write a function stringLength(string) that takes any string as an argument and returns its characters count.
- Now write a test for this function.
- Next, expand your function to make it check if the string is at least 1 character long and not longer than 10 characters. Throw errors if those conditions are not met.
- Add tests for the new functionality.
  

**Task 2**
- Write a function reverseString(string) function. It should take a string as an argument and return it reversed.
- Write at least one test for this function.
  
**Task 3**
- In this task, you will need to write several tests for each tested function. You could write all of your tests directly at the top level, but it's better to group related tests so their output is more readable. Jest has the describe() method just for that. Read about it here and apply it in your tests for this task:

- Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.
- Write at least 3 tests for each of the calculator methods.
- Group tests for each method using describe() method.
  
**Task 4**

In this task we're going to do things differently:

- Start by writing a test for a capitalize(string) function. Your test should make sure that this function takes a string as an argument and returns that string with the first character capitalized.
- Run your test - it should fail because you don’t have the capitalize(string) function implemented yet.
- Now make your tests green by implementing the capitalize(string) function. Think about what the minimum amount of code is necessary to pass this test and write it.

**Congratulations! You have just used the TDD approach by starting the development process by writing tests before writing the actual functions.**

## Built With
 - Major languages: JavaScript
 - Technologies used: Github, Git, Vscode

## Author
- Github: [@Azonkeu](https://github.com/Azonkeu)
- LinkedIn: [@AzonkeuO](https://www.linkedin.com/in/azonkeu-ornela-88a14b172/)

### Show your support
Give a ⭐️ if you like this project!

## License
This project is [MIT](https://github.com/Azonkeu/Jest-Testing/blob/main/LICENSE) licensed.