export function categorizeNumber(input) {
    /**
     * TODO:
     * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
     * Dengan ketentuan sebagai berikut:
     * 1. Jika input bukan number, bangkitkan (throw) error.
     * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
     * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
     * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
     * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
     * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
     */

    // throw err
    if (typeof input !== 'number') {
        throw new Error('Invalid Input. Tolong masukkan bilangan bulat');
    }
    // bilangan nol
    if (input === 0){
        return "Nol";
    }
    // bilangan negatif
    if (input < 0) {
        return "Negatif";
    }
    // bilangan prima
    if (isPrime(input)){
        return "Prima";
    }
    // bilangan genap
    if (input %  2 === 0) {
        return "Genap";
    }
    // bilangan ganjil
    if (input % 2 !== 0) {
        return "Ganjil";
    }
  }
  
// fungsi check bilangan prima
function isPrime (num) {
    if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
            return false;
        }
    }
    return true;
}


try {
    const numbers = [15, 12, 17, 0, -5];
    numbers.forEach((num) => {
        console.log(`Input: ${num}, Kategori: ${categorizeNumber(num)}`);
    });
} catch (error) {
    console.log(error.message);
} 