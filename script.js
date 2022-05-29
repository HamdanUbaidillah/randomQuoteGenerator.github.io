const quote = document.querySelector(".quote");
const quoteBtn = document.querySelector(".btn");
const copyBtn = document.querySelector(".copy");
const tweetBtn = document.querySelector(".twitter");

let quotes = [
  '"Orang sering mengatakan bahwa motivasi tidak bertahan lama. Nah, begitu juga dengan mandi itu sebabnya kami merekomendasikannya setiap hari." -Zig Ziglar',
  '"Waktumu terbatas, jadi jangan sia-siakan dengan menjalani hidup orang lain." -Steve Jobs',
  '"Orang yang tak pernah membuat kesalahan adalah orang yang tidak pernah berbuat apa-apa." -Norman Edwin',
  '"Jika Anda tidak dapat melakukan hal-hal besar, lakukan hal-hal kecil dengan cara yang hebat." -Napoleon Hill',
  '"Tidak ada seorang pun yang bisa kembali ke masa lalu dan memulai awal yang baru lagi. Tapi semua orang bisa memulai hari ini dan membuat akhir yang baru." -Maria Robinson',
  '"Janganlah engkau berduka atas apa yang telah terjadi, karena tidak ada apapun di dunia ini yang abadi". -Imam Syafii',
  '"Tindakan menyalahkan hanya akan membuang waktu. Sebesar apapun kesalahan yang Anda timpakan ke orang lain, dan sebesar apapun Anda menyalahkannya, hal tersebut tidak akan mengubah Anda" -Wayne Dyer',
  '"Ambillah risiko yang lebih besar dari apa yang dipikirkan orang lain aman. Berilah perhatian lebih dari apa yang orang lain pikir bijak. Bermimpilah lebih dari apa yang orang lain pikir masuk akal" -Claude T. Bissell',
  '"Sukses adalah kemampuan untuk melangkah dari kegagalan tanpa hilang antusiasme." -Sir Winston Churchill.',
  '"Orang bijak belajar ketika mereka bisa. Orang bodoh belajar ketika mereka terpaksa." -Arthur Wellesley',
  '"Setiap perjuangan pasti ada hasilnya. Gagal memberi pelajaran, sukses memberi kebahagiaan."',
  '"Belajar memang melelahkan, namun akan lebih melelahkan lagi jika saat ini kamu tidak belajar."',
  '"Kalau mau menunggu sampai siap, kita akan menghabiskan sisa hidup kita hanya untuk menunggu." -Lemony Snicket',
  '"Ketahuilah bahwa kemenangan bersama kesabaran, kelapangan bersama kesempitan, dan kesulitan bersama kemudahan". -HR Tirmidzi',
];

quoteBtn.addEventListener("click", function () {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = randomQuote;
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(quote.innerHTML);
  alert("teks tercopy");
});

tweetBtn.addEventListener("click", function () {
  let url = `https://twitter.com/intent/tweet?url=${quote.innerHTML}`;
  window.open(url, "_blank");
});
