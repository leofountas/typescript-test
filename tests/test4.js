// Ne modifiez que le typage TypeScript, ne touchez pas au code JavaScript !
// function sayHello(target: { firstName: string, money: true }): number {
//     return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
//  }
//  const message: boolean = sayHello({ firstname: 'World', money: 123 });


function sayHello(target) {
    return `Hello ${target.firstName}, you have ${target.money} on your bank account.`;
}
const message = sayHello({ firstName: "World", money: 123 });


console.log(message);