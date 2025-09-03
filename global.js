let sample
let data =[]
let gameStarted = false
let keysAllowed = false
let countdownID
let solved = []
let bgNum = 2 
let skips = 0

let body = document.querySelector('body')
let container = document.querySelector('#container')
let cells = document.querySelectorAll('.cell')
let inputString = document.querySelector('#input-string')
let alphakeys = document.querySelectorAll('.alphabetic-key')
let backspaceKeyImg = document.querySelector('#backspace-key').querySelector('img')
let spaceKeyImg = document.querySelector('#space-key').querySelector('img')
let scoreText = document.querySelector('#scoreText')
let scoreValue = document.querySelector('#scoreValue')
let countdown = document.querySelector('#countdown')

let dictionary = [
"Adat",
"Adil",
"Akhlak",
"Arif",
"Bahagia",
"Bangsa",
"Berbeda",
"Bendera",
"Bersatu",
"Beriman",
"Bhineka",
"Bijak",
"Cintatanahair",
"Damai",
"Demokrasi",
"Disiplin",
"Etika",
"Gotongroyong",
"Hak",
"Harmoni",
"Hormat",
"Identitas",
"Ikatan",
"Indah",
"Indonesia",
"Integrasi",
"Integritas",
"Ika",
"Kebangsaan",
"Kebanggaan",
"Kebanggaannasional",
"Kebebasan",
"Kebersahajaan",
"Kebersamaan",
"Kebhinekaan",
"Kebudayaan",
"Kebijakan",
"Kedaulatan",
"Keadaban",
"Keadilan",
"Keadilansosial",
"Keberagaman",
"Keberlanjutan",
"Kesadaran",
"Kekerabatan",
"Keluhuran",
"Kemakmuran",
"Kemajemukan",
"Kemanusiaan",
"Kemerdekaan",
"Kemufakatan",
"Kepedulian",
"Kepatuhan",
"Kesatuan",
"Keselarasan",
"Keserasian",
"Kesetaraan",
"Kesopanan",
"Lambang",
"Luhur",
"Loyalitas",
"Makmur",
"Multikultural",
"Musyawarah",
"Nasionalisme",
"Negara",
"Nilai",
"Pancasila",
"Patriotisme",
"Peduli",
"Pengorbanan",
"Perbedaan",
"Persahabatan",
"Persaudaraan",
"Persatuan",
"Pluralitas",
"Rukun",
"Royong",
"Santun",
"Satu",
"Sejahtera",
"Setia",
"Simbol",
"Sinergi",
"Solidaritas",
"Sopan",
"Toleransi",
"Tradisi",
"Unity",
  ]