//kita punya data awal
const users = [
  { id: 1, nama: "Budi", umur: 21, kota: "Jakarta", aktif: true },
  { id: 2, nama: "Sari", umur: 23, kota: "Bandung", aktif: false },
  { id: 3, nama: "Andi", umur: 25, kota: "Surabaya", aktif: true }
];

const userBaru = { id: 4, nama: "Nina", umur: 22, kota: "Medan", aktif: true };

function tambahUser(users, userBaru) {
  return [...users, userBaru];
}

console.log(tambahUser(users,userBaru));





//filter user active
const filterUser = users.filter(user => user.aktif === true);

//cari minimumumur
const filterUmur = (minUmur, ...users) => {
  return users.filter(user => user.umur >= minUmur);
}

console.log(filterUmur(22, ...users));
console.log(filterUser);


//versi perbaikan
// function filterUser(minUmur, ...users) {
//   return users.filter(
//     user => user.aktif === true && user.umur >= minUmur
//   );
// }





//destructing and rest
function ringkasUser({ nama, kota, ...sisa }) {
  return {
    nama,
    kota,
    info:sisa  //Buat object baru yang Punya properti info yang Isinya adalah object sisa
  };
}

const userAnonim = {
  id: 1,
  nama: "Budi",
  umur: 21,
  kota: "Jakarta"
};

console.log(ringkasUser(userAnonim));





