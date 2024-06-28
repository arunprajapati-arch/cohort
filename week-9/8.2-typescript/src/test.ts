/* function greet(name:string) {
    console.log(`Hello ${name}`);
}
greet("Arun"); */

/* function sum(a: number, b: number): number {
    return a+b;
}
const ans = sum(10,25);;
console.log(ans); */


//type infererence as need not to defind return type of adult function
/* function adult(age: number){
    return age>18;
}
console.log(adult(17)); */

/* function runAfter1S(fn: () => void) {
    setTimeout(fn, 5000);
}

runAfter1S(() => {
    console.log("hello hi");
    
}); */


/* interface User{
    name: string,
    age: number,
    email?: string     // user can pass it or not optionally       
};

function adult(user: User){
    return user.age>18;
}

console.log(adult({
    name: "arun",
    age: 19
})); */

// ENUMs

/* enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
}) */

        //generics

type Input = number | string;
function firstElement(arr:Input[]) {
    return arr[0];
}
console.log( firstElement([4,2,3]));

