# Algorithm challenge // find-the-dancer

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)


## 1. Getting started
`https://github.com/gilatb/find-the-dancer`

Fork this repo and then `git clone` your forked repo to your computer. Once you're happy with your solution, `git push` and submit a pull request at `https://github.com/gilatb/find-the-dancer`.


## 2. Challenge
Adam is organizing a latin dance improvisation competition and you're his assistant. Apparently, one of the dancers is injured and won't make it to the competition. As his beloved assistant, you need to find the appropriate replacement for the injured dancer. 
Adam is quite old fashion and he only allows male dancers (written in capital letters) to dance with female dancers and the other way around, as long as they both dance the same style (Salsa, Bachata, Merengue, Tango, Pachanga, Kizomba). Could you help Adam find the name of the dancer he should call to? (The first one you can find will be good). If you can't find one, return null. 


### 2.1. Example

const participants = [
  { name: "Roni", style: "Salsa" },
  { name: "RICARDO", style: "Bachata" },
  { name: "ALBERT", style: "Salsa" },
  { name: "Sarah", style: "Bachata" },
  { name: "JACOB", style: "Kizomba" }, 👈
];

const dancersPool = {
  Bachata: ["JOSE", "XAVIAR", "Mila"],
  Kizomba: ["Lorena", "Maria"], 👈
  Salsa: ["Maya", "ANTONIO"],
};

Here JACOB, a male dancer doesn't have a female partner that dances Kizomba. 
👇🏻
findTheDancer(participants, dancersPool) --> should return "Lorena"

### 2.2. Testing your solution
To test your solution, run `npm install` in the root directory and then run `npm test` to run the automated tests.

### 2.3. Submitting your solution
If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.
