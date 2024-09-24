// function damage(characterToDamage: { life: number }, amount: number): number can be write like this:

interface Hero {
  life: number;
}
function damage(characterToDamage: Hero, amount: number): number;

// more example to how use type (the sybol ? stands for optional so an Hero object will be accepted even without a Pet):

type Pet = {
  name: string;
  life: number;
  attack: number;
  defense: number;
};
type Hero = {
  name: string;
  life: number;
  attack: number;
  defense: number;
  pet?: Pet;
};

// instead of repeating the common propeties we create a new type with them (Character) the & symbol is an intersection
type Character = {
  name: string;
  life: number;
  attack: number;
  defense: number;
};
type Pet = Character;
type Hero = Character & {
  pet?: Pet;
};

//  but to define the structure of an object is better to use interface, type is only to define alias like Pet that is just an alias of Character
// it replace & with extends
interface Character {
  name: string;
  life: number;
  attack: number;
  defense: number;
}
type Pet = Character;
interface Hero extends Character {
  pet?: Pet;
}

// you can also define the type of the elements in an Array
type MyArrayOfNumbers = number[];

const arrayOk: MyArrayOfNumbers = [1, 2, 3];

const arrayNotOk: MyArrayOfNumbers = [1, "two", false];
