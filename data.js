const nama = "ali imron";
let usia = 15;

function generateBiodata() {
    if (usia > 10 & usia < 18) {
        // INI ADALAH KONDISI PERTAMA
        console.log('anda remaja');
    } else {
        // INI ADALAH KONDISI JIKA TIDAK TERPENUHI
        console.log(' Wah ini belum sesuai')
    }

}

console.log(nama);
console.log(usia);

generateBiodata();