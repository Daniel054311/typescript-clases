// function greeter (fn:(a:string) => void){
//     console.log("Hello World");
// }
// function printToConole(s:string){
//     console.log(s);
// }
// greeter(printToConole);
//
// type GreetFunction = (a:string) => void;
//
// function callGreet(fn:GreetFunction){
//     console.log("hello world")
//     fn("34");
// }
//
// const myCall:GreetFunction = (a:string) =>{
//     return a;
// }
// callGreet(myCall);
//
// type DescribleFuntion = {
//     decrible:string;
//     (someArg:number):boolean
// }
// // FUNCTION CALL SIGNATURE
//
// function dosomething(fn:DescribleFuntion){
//     console.log(fn.decrible + " returns " + fn(20) )
// }
//
// const someArg:DescribleFuntion = (n:number) =>{
//     return n > 3;
// }
// someArg.decrible = "description";
//
// dosomething(someArg)
//
// GENERICS
//
// function firstElement<Type>(arr:Type[]):Type | undefined{
//     console.log(arr)
// return arr[0];
// }
//
// const s = firstElement(["one","two","three","5","6","7","8","9"]);
// const n = firstElement([1,2,3,4,5]);
//
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
//
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     return {
//         color: config.color || "red",
//         area: config.width ? config.width * config.width : 20,
//     };
// }
//
// let mySquare = createSquare({ color: "ko", width: 100 });
//
//
// interface CountiresInfo{
// name: string,
// independenceDate:Date
// }
//
// interface CountriesWithThierCities extends CountiresInfo{
//     city:string
// }
//
// function indentity<Type>(n:Type){
//     console.log(n)
// }
// const ouputFuntion = indentity<number>(8);
// const stringOut = indentity<string>("hjj")
//
// function getProperty<Type, Key extends keyof Type>(obj:Type,key:Key){
//   return obj[key];
// }
// let x =
// getProperty(x,"a");
//
// interface Person {
//     name: string;
//     age: number;
//     address: string;
// }
//
// function getProperty<T , K extends  keyof T>(obj:T,key:K):T[K]{
//     return obj[key];
// }
// const person:Person = {name:'john',age:30,address:'123 Street'};
//
// class Sprite{
//     name = "";
//     x = 0;
//     y = 0;
//
//     constructor(name:string) {
//         this.name = name;
//     }
// }
//
// ////////////////////////////
// // CLASSES
//
// class Coder{
//     constructor(public name:string,private music:string,protected age:number) {
//         this.name = name
//         this.music = music
//         this.age = age
//     }
//
// }
//
// class webDev extends Coder{
//     constructor(public computer:string,name:string, music:string, age:number) {
//         super(name, music, age);
//         this.computer = computer;
//     }
//
//     getName(){
//         return this.name;
//     }
// }
//
// const newWebDev = new webDev("mcbook","ama","rock",29);
// console.log(newWebDev.getName());
//
// interface Vehicle{
//     move():void;
// }
//
// class  Car implements Vehicle{
//     move() {
//         console.log("move");
//     }
// }
// class Bik implements Vehicle{
//     move() {
//         console.log("the bike is moving");
//     }
// }
//
// function safeJouney(vehicle:Vehicle){
//     return vehicle.move()
// }
//
// const myCar = new  Car()
// const myBike = new  Bik()
// safeJouney(myBike);
//
// interface Musiician{
//     name: string;
//     instrument: string;
//     play(action:string):string;
//
// }
//
// class Guitarist implements Musiician{
//     constructor(public name:string,public instrument:string) {
//         this.name = name
//         this.instrument = instrument
//     }
//
//   play(action: string): string {
//       return  `${this.name} ${action} ${this.instrument}`;
//   }
// }
//
// const  page =  new Guitarist("Daniel" , "beyboard");
// console.log(page.play("plays"))
//
// /////////////////////
// // STATIC
//
// class Peeps{
//     static count:number = 0;
//     static getCount():number{
//         return Peeps.count;
//     }
//     public  id:number;
//
//     constructor(public name:string) {
//         this.name = name
//         this.id = ++Peeps.count
//     }
// }
//
// const john = new Peeps("john");
// const kofi = new Peeps("kofi");
// console.log(Peeps.count)
//
// ////////////////////
// // GETERS AND SETTERS
// class Bands{
//     private dataState:string[];
//     constructor() {
//         this.dataState = [];
//     }
//     public get dataGet():string[]{
//         return this.dataState;
//     }
//
//     public set dataSet(data:string[]){
//         if (Array.isArray(data) && data.every(value => typeof value === "string")){
//             this.dataState = data;
//             return;
//         }else throw new Error("this parameter is not an array of strings")
//     }
// }
//
// const newData = new Bands()
// newData.dataSet = ["a", "b", "c"]
// console.log(newData.dataGet);
// newData.dataSet = [...newData.dataGet,'zz top']
// console.log(newData.dataGet);
//


// INDEX SIGNATURE
// interface TransactionObj{
//     readonly  [key:string]:number
//    Pizza:number,
//     Books:number,
//     Job:number
// }
// // interface TransactionObj{
// //   readonly  [key:string]:number
// // }
//
// const  todaysTransaction:TransactionObj = {
//     Pizza: -10,
//     Books: -5,
//     Job: 50
// }
//
// console.log(todaysTransaction.Pizza)
// console.log(todaysTransaction["Pizza"])
// let prop:string = 'Pizza';
// console.log(todaysTransaction[prop])
//
// const todaysNet = (transactions:TransactionObj):number =>{
//     let total:number = 0;
//     for (const transaction in transactions){
//         total += transactions[transaction]
//     }
//     return total;
// }
// console.log(todaysNet(todaysTransaction))
// // todaysTransaction.Pizza = 10000;
// console.log(todaysTransaction["Pizza"])
//
// ////////////////////////////
//
// interface Student{
//     // [key:string]:string|number|number[]|undefined
//     name:string,
//     GPA:number,
//     classes?:number[]
// }
//
// const student:Student = {
//     name:"Doug",
//     GPA:10,
//     classes: [100,200,300,400]
// }
// // console.log(student.test);
//
// // KEYOF ASSERTION
// for (const key in student){
//     console.log(`${key}: ${student[key as keyof Student]}`)
// }
//
// Object.keys(student).map( key =>{
//     console.log(student[key as keyof typeof student])
// })
//
// const logStudentKey = (student:Student, key:keyof Student) =>{
//     console.log(`Student ${key}: ${student[key]}`)
// }
//
// logStudentKey(student,'GPA');




// interface Incomes{
//     [key:string]:number
// }
//UTILITY TYPE

type Stream = 'salary' | 'bonus' | 'side_hustle';
type Income = Record<Stream, number>
const monthlyIncome:Income = {
    salary:100000,
    bonus:1000,
        side_hustle:1000,
}

for (const revenue in monthlyIncome){
    console.log(monthlyIncome[revenue as keyof typeof monthlyIncome]);
}