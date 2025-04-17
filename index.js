const multiple= (number1)=>number1*3 //arrow function
console.log(multiple(30))
const multiple= (number1 , number2)=> {
    let number3=number1*number2
    return number3
} //arrow function
console.log(multiple(6 , 5))

const multiple= (number1)=>number1*2
console.log(multiple(20))

const multiple= (number1 , number2)=> {
    let number3=number1*number2
    return number3
}
console.log(multiple(7 , 8))





const arr=[ 3 , 4 , 5]
const newarr=arr.map(item=>item*2)
console.log(arr)
console.log(newarr)

const arr=[1 , 2 , 3 , 4]
const newarr=arr.map(item=>item*3)
console.log(arr)
console.log(newarr)

const numbers=[22 ,3 ,5 ,50 , 540]
const newnumber=numbers.filter((item)=>item<10)
console.log(newnumber)

const numbers=[11 , 2 , 13 , 15 , 100]
const newnumber=numbers.filter((item)=>item<20)
console.log(newnumber)

const newarray=numbers.find((item)=> item>40)
console.log(newarray)

const newaray=numbers.find((item)=> item<10)
console.log(newarray)