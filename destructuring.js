//1
const user = {
  nama: "Andi",
  umur: 22,
  kota: "Makassar"
};

const {nama, kota} = user;
console.log(`${nama} tinggal di ${kota}`);


//2
const warna = ["merah", "kuning", "hijau"];
 const [warnaKedua, , warnaKetiga]= warna
console.log(warnaKedua, warnaKetiga);


//3
const produk = {
  nama: "Laptop",
  harga: 8500000,
  stok: 5
};
const {nama,harga}=produk
const { diskon = 0 } = produk;
console.log(`total: ${harga-diskon}`);


//4
function tampilUser({nama, umur}) {
  console.log(nama, umur);
}


//5
const users = [
  { nama: "Budi", umur: 20 },
  { nama: "Sari", umur: 23 },
  { nama: "Andi", umur: 25 }
];
const [{ nama: user1 },, { umur: umur3 }] = users;
console.log(user1)
console.log(umur3)


//6
const response = {
  status: 200,
  data: {
    id: 1,
    profile: {
      username: "ambo",
      email: "ambo@mail.com"
    }
  }
};
const {
  data: {
    profile: { username, email }
  }
} = response;

console.log(`User: ${username} (${email})`);


//bonus
let a = "frontend";
let b = "backend";

[a, b] = [b, a];

console.log(a, b);