// destruction versa
let time = 100
let load = 200
let x = {}
x = {load, time}
console.log(x)

let [a, b, c] = "xyz";
console.log(a) // x


let littleOrder: string = 'Pzza'

 // Array<T>
 let list1: number[] = [1, 2, 3];
 // or
 let list2: Array<number> = [1, 2, 3];

type X = {
  a: string,
  b: number
}
type Y = X & {
  c: string
}
let y: Y = {
  a: 'lkf;a',
  b: 10,
  c: 'klfsj;lsk'
}

interface Auto {
  country: string 
}
interface BMW extends Auto {
  model: string,
  year: number
}
const auto: BMW = {
  country: 'Germany',
  model: 'X6',
  year: 2005
}

// for discrabing instance
type Order = {
  title: string, 
  quantity?: number
}
// for description of data in componenets which is passed through props
interface MyOreder {
  title: string,
  quantity?: number
}

let order: Order = {title: "first", quantity: 10}

let orders: Order[] = [
  {title: "first"},
  {title: "second", quantity: 10}
]

let num: null | number = null
num = 10

type PrintTitle = (title: string) => void
const printTitle: PrintTitle = (title) => {
  console.log(title)
}
