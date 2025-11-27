// versi original saya
//tantangan membuat smart filter dari chat gpt
const produk = [
  { nama: "Laptop Asus", harga: 7500000 },
  { nama: "Mouse Logitech", harga: 250000 },
  { nama: "Keyboard Mechanical", harga: 450000 },
  { nama: "Kabel Data", harga: 50000 }
];

     //logic solve the problem:

//kita disuruh membuat sebuah fungsi dengan dengan dua parameter
const filterProduk = (data, keyword) => {
    return data.filter(key => key.nama.toLowerCase().includes(keyword.toLowerCase()));

};

    // if (keyword === ""){
    //    return produk;
    // };
    // else if (data.filter != keyword){
    //   return `produk tidak di temukan`;
    // };
    // else{
    //     return "";
    // }

console.log(filterProduk(produk, "lo"));






//versi perbaikan chat gpt
const filterProduk = (data, keyword) => {
    // jika keyword kosong
    if (keyword.trim() === "") {
        return data;
    }

    const hasil = data.filter(item =>
        item.nama.toLowerCase().includes(keyword.toLowerCase())
    );

    // jika tidak ada hasil
    if (hasil.length === 0) {
        console.log("Tidak ada produk ditemukan");
        return [];
    }

    return hasil;
};

console.log(filterProduk(produk, "lo"));



//penjelesan bagian kode yang rumit:

// 3. item.nama.toLowerCase()

// Mengambil nama produk (misalnya "Laptop Asus").

// Mengubah ke huruf kecil (misalnya menjadi "laptop asus").

// Tujuannya: supaya pencarian tidak sensitif terhadap huruf besar/kecil.





// 4. .includes(keyword.toLowerCase())

// Mengecek apakah nama produk mengandung kata yang dicari.

// keyword.toLowerCase() juga diubah ke huruf kecil supaya adil.
