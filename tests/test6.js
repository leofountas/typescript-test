// Ce code TypeScript n'est pas complet.
// Regardez les dernières lignes de ce script : TypeScript remonte des erreurs.
// Votre but est de modifier le code pour corriger ces erreurs.
// Vous allez devoir modifier les types déjà définis et en créer d'autres.
// ====================
// ====================
// Ne touchez PAS aux lignes ci-dessous, faites en sorte que TypeScript
// soit content en modifiant UNIQUEMENT le code du dessus !
const babyDragon = {
    name: "Typeon",
    life: 50,
    attack: 10,
    defense: 20,
};
const babyLicorn = {
    name: "Typemoor",
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
};
const smallArmor = {
    price: 30,
    attack: 2,
    defense: 5,
};
const smallSword = {
    price: 20,
    attack: 5,
};
const smallShield = {
    price: 15,
    defense: 10,
};
const smallMagicalWand = {
    price: 50,
    attack: 4,
    magic: 10,
};
const myWarriorHero = {
    name: "TSolomon",
    life: 200,
    attack: 30,
    defense: 50,
    pets: [babyDragon, babyLicorn],
    equipments: [smallArmor, smallSword, smallShield],
};
const myMagicienHero = {
    name: "TSoren",
    life: 150,
    attack: 20,
    defense: 40,
    equipments: [smallMagicalWand],
    magic: 200,
};
