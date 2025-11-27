const users = [
  { name: "Budi", age: 21, isActive: true },
  { name: "Andi", age: 25, isActive: false },
  { name: "Sari", age: 19, isActive: true },
  { name: "Nana", age: 23, isActive: true },
  { name: "Riko", age: 28, isActive: false }
];


//logika penyelesaian:

 //kita filter dulu user yang aktif
const filterUser = users.filter(user => user.isActive === true);
  //console.log(filterUser);
  
//kita sortir berdasarkan umur
const sortir = filterUser.sort((a,b) => a.age - b.age);
//console.log(sortir);


//kita ubah object ke dalam bentuk string untuk simpan dalam array baru menggunaka  map
//const newUser = [];
const output = sortir.map(siswa => {
 return `"Nama: ${siswa.name} - Umur: ${siswa.age}"`;
});
//console.log(output)

//newUser.push(output);
console.log(output);
