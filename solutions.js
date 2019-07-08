//CONSTRUCTORS

//1. Hero
class Hero {
  constructor(varName) {
    this.name = varName;
  }
}

const hero = 'Link';
const myHero = new Hero(hero);

console.log(myHero);
// Hero { name: 'Link' }


//2. Playlist
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
  play() {
    console.log(`Playing: ${this.title} by ${this.artist}`);
  }
}

let song1 = new Song('Time', 'Pink Floyd');
let song2 = new Song('Sweet Life', 'Frank Ocean');
let song3 = new Song('Intro', 'M83');
let song4 = new Song('Bloom', 'ODESZA');
let song5 = new Song('The Less I Know The Better', 'Tame Impala');

song1.play();
// Playing: Time by Pink Floyd

song4.play();
// Playing: Bloom by ODESZA


//3. Person
class Person {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
  whoAreYou() {
    console.log(`My name is ${this.name} and I am a ${this.occupation}`);
  }
}

const person1 = new Person('Michaelangello', 'Ninja');

person1.whoAreYou();
//My name is Michaelangello and I am a Ninja


//4. Array string
class ArrayString {
  constructor(arr) {
    this.array = arr;
  }
  join() {
    const str = this.array.join("");
    console.log(str);
  }
}

const array1 = new ArrayString(['c', 'a', 't']);

array1.join();
//cat


//5. Calendar app
class Day {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
}

const monthExample = new Day(2016, 6, 2);
console.log(monthExample.getDaysInMonth(2016, 7));
//31
