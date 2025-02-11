import { API, sampleErrorData, sampleSuccessData } from './support.js';

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */

function processData(data) {
    const promises = data.map((item) => {
        return API.fetch(item.delay, item.simulateError);
    });

    return Promise.allSettled(promises)
        .then((result) => {
            return result.map(res => {
                return res.status === 'fulfilled' ? res.value : `Error: ${res.reason.message}`;
            });              
        });
}

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']
