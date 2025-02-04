import { person } from "./intro.js";

// pewarisan class person {extends}
class subperson extends person {
    constructor(name, age, sex, location, blood, mbti) {
        // overriding
        super(name, age, sex);
        this.location = location;
        this.blood = blood;
        this.mbti = mbti;
    }

    // overriding method
    dif() {
        super.dif();
        console.log(`Location: ${this.location}, Blood: ${this.blood}, MBTI: ${this.mbti}`);
    }
}

const rezapp = new subperson('Reza Pramudya Prastian', 20, 'Male', 'Sidoarjo', 'O', 'INFJ');

rezapp.dif();

export { subperson };