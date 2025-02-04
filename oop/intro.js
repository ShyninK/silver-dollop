class person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    dif() {
        console.log(`name: ${this.name}, age: ${this.age}, sex: ${this.sex}`);
    }
}

const reza = new person('Reza Pramudya Prastian',20,'Male');
reza.dif();
export { person };