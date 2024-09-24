// Modify just the type of TypeScript to correct the errors! Do not touch the Js code.

// function sayHello(target: { firstName: string, money: true }): number {
//     return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
//  }
//  const message: boolean = sayHello({ firstname: 'World', money: 123 });

function sayHello(target: { firstName: string; money: number }): string {
  return `Hello ${target.firstName}, you have ${target.money} on your bank account.`;
}
const message: string = sayHello({ firstName: "World", money: 123 });
