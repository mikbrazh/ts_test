// Types
// ==============================
let num: number = 0.222
console.log(num)

let str: string = '11'
console.log(str)

const isValid: boolean = true
const isInvalid: boolean = true
console.log(isValid)

let two: string | number = '2'
two = 2
console.log(two)

let go: any
go = 'qwe'
go = 123

const arr1: number[] = [1, 2, 3, 4, 5]
const arr2: string[] = ['1', '2', '3', '4', '5']
const arr3: Array<number> = [1, 2, 3, 4, 5 ]
const arr4: Array<string> = ['1', '2', '3', '4', '5' ]

// Tuple
const contact: [string, number] = ['Name', 123]

function sayMyName(name: string) {
  console.log(name)
}

sayMyName('Big Cat')

// Never
function throwError(msg: string): never {
  throw new Error(msg)
}

// throwError('Oops error')

// Type
type Login = string

const admin: Login = 'Mike'

type ID = string | number

let w: ID = 123
w = '123'

type SomeType = string | null | undefined

function noReturn(): void {
  console.log('noReturn')
}

noReturn()

// Interfaces
// ==============================
interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '123',
  color: 'yellow',
  size: {
    width: 1,
    height: 2
  }
}

console.log(rect1.id)
console.log(rect1.color)

const rect2: Rect = {
  id: '555',
  color: 'red',
  size: {
    width: 10,
    height: 25
  }
}

console.log(rect2.id)
console.log(rect2.color)

rect2.color = 'black'

console.log(rect2.color)

const rect3 = {} as Rect
const rect4 = <Rect>{}

// Interface extends
interface RectWidthArea extends Rect {
  getArea: () => number
}

const rect5: RectWidthArea = {
  id: '1000',

  size: {
    width: 100,
    height: 100
  },

  getArea(): number {
    return this.size.width * this.size.height
  }
}

console.log( rect5.getArea() )

// Class implements interface
interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time = new Date()

  setTime(date: Date) {
    this.time = date
  }
}

// Indexable Types
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '20px',
  borderRadius: '10px',
}

// Enum
enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Premium
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

console.log(SocialMedia.VK)

// Functions
// ==============================
function add(a: number, b: number): number {
  return a + b
}

function toAppercase(str: string): string {
  return str.trim().toUpperCase()
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined }
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() }
  }

  return {x: a, y: b}
}

console.log( 'Empty ', position() )
console.log( 'One param ', position(42) )
console.log( 'Two params ', position(10, 15) )

// Classes
// ==============================
class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

const ts = new Typescript('8')

console.log( ts.info('Mike') )

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
  
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

// The same notation
class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}

// Protected, private, public
class Animal {
  protected voice: string = ''
  public color: string = 'black'
  private go() {
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()

cat.setVoice('mur-mur')

console.log(cat.color)

// Abstract classes
abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info'
  }
}

// Guards
// ==============================
function strip(x: string | number) {
  if (typeof(x) === 'number') {
    return x.toFixed(2)
  }

  return x.trim()
}

class MyResponses {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  massage = 'error massage'
}

function handle(res: MyResponses | MyError) {
  if ( res instanceof (MyResponses) ) {
    return res.header + res.result
  } else {
    return {
      info: res.header + res.massage
    }
  }
}

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
  // ...
}

setAlertType('success')
setAlertType('warning')

// Generic
// ==============================
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['1', '1', '2', '3', '5']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)

interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
  _id: number
  name: string
  email: string
  createAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name' // u1 = '_id'
