import { CommandResult } from '../Rendering/Commands/CommandResult'
import { LineResults } from '../Rendering/LineResults'

/**
 * Generates language output by merging line results.
 */

var globalVar = Number
let variable = 324
const constant = {
  propertyA: [2, 'variable'],
  propertyB: 'some string',
  propertyC: 2019,
  propertyD: {
    subPropertyA: true,
    subPropertyB: false,
    subPropertyC: null,
    subPropertyD: undefined,
    subPropertyE: {
      subSubPropertyA: 'string',
    },
    methodF: (parameterA) => {
      console.log(parameterA)
    },
  },
  methodA: (parameterA, parameterB) => {
    console.log(parameterA, parameterB)
  },
}
console.log(constant.propertyD.subPropertyE.subSubPropertyA);
console.log(constant.propertyD.methodF('par1'))

constant.methodA(25, 35)
console.log(constant.propertyD.subPropertyE.subSubPropertyA)

function getGreeting() {
  return 'howdy'
}

var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

getGreeting()

class Greeter {}
class MyGreeter extends Greeter {}

declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean
  }
  interface AlertOptions {
    modal: boolean
    title?: string
    color?: string
  }
}
export class Vue {}

export const sss = 'sss'

const mao: GreetingLib.LogOptions = {
  verbose: true,
}

const myGreeter = new Greeter('hello, world')
myGreeter.greeting = 'howdy'
myGreeter.showGreeting()

class SpecialGreeter extends Greeter {
  constructor() {
    super('Very special greetings')
  }
}

declare function getWidget(s: string): Widget[]

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
}

constant.methodA(25, 35)

export class OutputMerger {
  /**
   * Characters to output for semicolon-ended lines.q
   */
  private semicolon: string

  /**
   * Initializes a new instance of the OutputMerger class.
   *
   * @param semicolon   Characters to output for semicolon-ended lines.
   */
  public constructor(semicolon: string) {
    this.semicolon = semicolon
  }

  /**
   * Generates language output by merging a file's line results.
   *
   * @param fileLineResults   GLS line results from a file.
   * @return Language output from the line results.
   */
  public mergeFileLineResults(fileLineResults: LineResults[]): string[] {
    const output: string[] = []
    let indentation = 0

    for (const lineResults of fileLineResults) {
      const commandResults: CommandResult[] = lineResults.commandResults

      for (const result of commandResults) {
        if (result.indentation < 0) {
          indentation += result.indentation
        }

        if (result.text === '') {
          output.push('')
        } else if (result.text !== '\0') {
          output.push(this.generateTabs(indentation) + result.text)
        }

        if (result.indentation > 0) {
          indentation += result.indentation
        }
      }

      if (lineResults.addSemicolon) {
        output[output.length - 1] += this.semicolon
      }
    }

    return output
  }

  /**
   * Generates spaces equivalent to 4-space code tabbing.
   *
   * @param amount   How many tabs should be added.
   * @returns An all-spaces String of length = amount * 4.
   */
  private generateTabs(amount: number): string {
    let output = ''

    for (let i = 0; i < amount; i += 1) {
      output += '    '
    }

    return output
  }
}

import { BlankNode } from '../Nodes/BlankNode'
import { CommandNode } from '../Nodes/CommandNode'
import { IGlsNode } from '../Nodes/IGlsNode'
import { TextNode } from '../Nodes/TextNode'
import { TextParsing } from './TextParsing'

/**
 * Parses individual lines of raw syntax into GLS nodes.
 */
export class SourceLineParser {
  /**
   * Parses a line of raw source syntax into a GLS nodes.
   *
   * @param rawLine   Raw line of source syntax.
   */
  public parseLine(rawLine: string): IGlsNode {
    rawLine = rawLine.trim()
    if (rawLine === '') {
      return new BlankNode()
    }

    const colonIndex: number = rawLine.indexOf(':')
    if (colonIndex === -1) {
      return new CommandNode(rawLine.trim(), [])
    }

    const command: string = rawLine.substring(0, colonIndex).trim()
    const args: IGlsNode[] = []

    this.parseCommandArgs(rawLine, colonIndex + 1, args)

    return new CommandNode(command, args)
  }

  /**
   * Parses the args for a command.
   *
   * @param rawLine   Raw line containing the command.
   * @param start   Starting index of the args within the line.
   * @param nodes   Collection of nodes to add the command to.
   * @param withinParenthesis   Whether this is within a ( parenthesis ) section
   * @returns Next starting index after the last added node.
   */
  private parseCommandArgs(rawLine: string, start: number, nodes: IGlsNode[]): number {
    for (let i = start; i < rawLine.length; i += 1) {
      // Sub-command start
      if (rawLine[i] === '{') {
        i = this.parseSubCommand(rawLine, i, nodes)
        continue
      }

      // Sub-command end
      if (rawLine[i] === '}') {
        return i + 1
      }

      // Parenthesis start
      if (rawLine[i] === '(') {
        i = this.parseParenthesis(rawLine, i + 1, nodes)
        continue
      }

      // Space (do nothing)
      if (rawLine[i] === ' ') {
        continue
      }

      // Regular text start
      i = this.parseTextCommand(rawLine, i, nodes)
    }

    return rawLine.length
  }

  /**
   * Recurses into a command-within-a-command.
   *
   * @param rawLine   Raw line containing the command.
   * @param start   Starting index of the args within the line.
   * @param nodes   Collection of nodes to add the command to.
   * @returns Next starting index after the last added node.
   */
  private parseSubCommand(rawLine: string, i: number, nodes: IGlsNode[]): number {
    // Move past the starting "{" or "{ "
    i = TextParsing.getNextStartOfWordIndex(rawLine, i + 1)

    // Command name
    const commandNameEnd: number = TextParsing.getNextEndOfCommandNameIndex(rawLine, i)
    const commandNameRaw: string = rawLine.substring(i, commandNameEnd)
    const commandName: string = commandNameRaw.trim()

    // Either "}" (command end) or ":" (command args start)
    i = TextParsing.getNextNonSpaceIndex(rawLine, commandNameEnd)

    // "}" (command end)
    if (rawLine[i] === '}') {
      nodes.push(new CommandNode(commandName, []))
      return i + 1
    }

    // ":" (command args start)
    const commandArgs: IGlsNode[] = []
    i = this.parseCommandArgs(rawLine, i + 1, commandArgs)

    nodes.push(new CommandNode(commandName, commandArgs))

    return i
  }

  /**
   * Collects the text contents between parenthesis.
   *
   * @param rawLine   Raw line containing the command.
   * @param start   Starting index of the args within the line.
   * @param nodes   Collection of nodes to add the command to.
   * @returns Next starting index after the last added node.
   */
  private parseParenthesis(rawLine: string, i: number, nodes: IGlsNode[]): number {
    const nextEndOfWordIndex = TextParsing.getNextEndOfParenthesisWordIndex(rawLine, i)
    const textRaw = rawLine.substring(i, nextEndOfWordIndex)
    const text = TextParsing.removeBackslashesFromWord(textRaw)

    nodes.push(new TextNode(text))

    return nextEndOfWordIndex
  }

  /**
   * Parses raw text.
   *
   * @param rawLine   Raw line containing the command.
   * @param start   Starting index of the args within the line.
   * @param nodes   Collection of nodes to add the command to.
   * @returns Next starting index after the last added node.
   */
  private parseTextCommand(rawArgs: string, i: number, nodes: IGlsNode[]): number {
    const nextEndOfWordIndex = TextParsing.getNextEndOfWordIndex(rawArgs, i)
    const text = rawArgs.substring(i, nextEndOfWordIndex)

    nodes.push(new TextNode(text))

    return nextEndOfWordIndex
  }
}

@decorator()
class NameClass {}
declare module name {}

interface MyInterface {}
type FooBarAlias = string
var x: MyInterface, y: string, z: FooBarAlias

for (let index = 0; index < array.length; index++) {
  const element = array[index]
}

if (constant.parameterA[0] === 3 && variable <= 550) {
} else {
}

interface Entity {
  name: string
}
let x: Entity | null
let p: string | null = null // Assert that x is non-null and access name
let s = x && x.name // s is of type string | null
let y = x || { name: 'test' } // y is of type Entity

// The first for statement is labeled "loop1"
loop1: for (let i = 0; i < 3; i++) {
  // The second for statement is labeled "loop2"
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}



// A class declaration with a name
class Person {
  // A constructor method that initializes the object properties
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // A public instance method that returns a greeting
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // A public instance getter that returns the birth year
  get birthYear() {
    const date = new Date();
    return date.getFullYear() - this.age;
  }

  // A public instance setter that updates the age
  set age(newAge) {
    if (newAge > 0 && newAge < 120) {
      this.age = newAge;
    } else {
      throw new Error("Invalid age");
    }
  }

  // A public static method that returns the average age of an array of persons
  static averageAge(persons) {
    let sum = 0;
    for (let person of persons) {
      sum += person.age;
    }
    return sum / persons.length;
  }

  // A private instance field that stores the favorite color
  #favoriteColor = "blue";

  // A private instance method that returns the favorite color
  #getFavoriteColor() {
    return this.#favoriteColor;
  }

  // A public instance method that calls the private instance method
  revealFavoriteColor() {
    return `My favorite color is ${this.#getFavoriteColor()}.`;
  }
}

// A class expression that extends the Person class
const Student = class extends Person {
  // A constructor method that calls the super constructor and initializes the student properties
  constructor(name, age, gender, school, major) {
    super(name, age, gender); // Call the parent constructor
    this.school = school;
    this.major = major;
  }

  // A public instance method that overrides the parent method
  greet() {
    return `Hi, I'm ${this.name} and I study ${this.major} at ${this.school}.`;
  }

  // A public instance getter that returns the graduation year
  get graduationYear() {
    const date = new Date();
    return date.getFullYear() + 4 - this.age / 5;
  }

  // A public static method that returns the number of students in an array of students
  static countStudents(students) {
    return students.length;
  }
  // A static initialization block that runs some code when the class is defined
  static {
    console.log("Student class is defined");
  }
};


// Creating some instances of the classes
const alice = new Person("Alice", 25, "female");
const bob = new Student("Bob", 20, "male", "MIT", "Computer Science");
const charlie = new Student("Charlie", 19, "male", "Harvard", "Mathematics");

// Calling some methods and getters on the instances
console.log(alice.greet()); // Hello, my name is Alice and I am 25 years old.
console.log(bob.greet()); // Hi, I'm Bob and I study Computer Science at MIT.
console.log(charlie.graduationYear); // 2028
console.log(alice.revealFavoriteColor()); // My favorite color is blue.

// Calling some static methods on the classes
console.log(Person.averageAge([alice, bob, charlie])); // 21.333333333333332
console.log(Student.countStudents([bob, charlie])); // 2