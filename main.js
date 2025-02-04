/*let suhufahrenheit = null;

//regular func
function CelciuskeFahrenheit1 (suhu) {
    const SuhudiFahrenheit = (9/5) * suhu + 32;
    return SuhudiFahrenheit;
}

suhufahrenheit = CelciuskeFahrenheit1(90);
console.log(`Hasil Konversi biasa : `,suhufahrenheit);

//arrow func
const CelciuskeFahrenheit2 =
    (suhu) => (9/5) * suhu + 32;

suhufahrenheit = CelciuskeFahrenheit2(90);
console.log(`Hasil Konversi dengan arrow : `,suhufahrenheit);

const greeting =
    (nama) => console.log(`Hello ${nama}! Nice to know u`);

const name = "World";
greeting(name);

// object
const user = {
    nama: 'Reza Pramudya Prastian',
    umur: 20,
    TTL: 'Sidoarjo, 16 Juni 2004',
    NIK: '351505160604001',
    Nickname: 'ShyninK',
    Credit: 50000,
    Debt: 0,
    Is_male: true,
};

user.Credit = 100000;
const {Debt, Credit} = user;
console.log(Credit, Debt);
delete user.Nickname;
console.log(user);

// array init
const data = ['reza','pramudia'];
console.log('data awal', data);

// modify data and push
data[1] = 'pramudya';
data.push('prastian','gacor');
console.log('data setelah perubahan', data)

// delete data
data.splice(3,1);
console.log('data setelah delete : ', data);

// reverse and sort(ascendant) data
data.reverse();
console.log('data setelah reverse : ', data);
data.sort();
console.log('data setelah sort : ', data);

// map
const map = new Map();
map.set('nama depan', 'Reza');
map.set('nama belakang', 'Prastian');
console.log(map);
map.delete('nama belakang');
console.log(map);


// set
const set = new Set();
set.add('Reza');
set.add(20);
console.log(set);

for (const number of set) {
    console.log(number);
}

const spread = [...data, ...map, ...set];

console.log(spread);

import { greet as salam } from "./Bukang-Sembarang-Data.js";

console.log(salam);*/

