document.getElementById('searchButton').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('resultsContainer');
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Sample data (replace this with your actual data)
    const guides = [
        { title: 'Mati Total / Matot', content: '1. Cek fisik motherboard terlebih dahulu, pastikan tidak ada komponen yang hilang atau korosi, jika ada lengkapi dan bersihkan.<br>2. Jika sudah aman, selanjutnya cek buzzer pada setiap PL laptop, pastikan tidak ada PL Buzzer kecuali PL CPU,VGA.<br>3. Jika buzzer aman, maka boleh mencolokan tegangan ke motherboard, cek tegangan R Adsen (19v), jika tidak ada urut kebelakang apakah ada part bermasalah,walau r adsen keluar namun led tak menyala pastikan lagi pada bagian ic charge dan sekitarnya terutama resistor dan mosfet.<br>4. Cek Vreg3(3.3v) dan Vreg5(5v) atau nama lainnya LDO, pada ic DC/DC. Jika idak ada pada schema nama berikut cek tegangan pada schema yang bertuliskan 3.3v atau 5v dan buzzer pada tegangan tersebut.<br>5. Cek Enable (EN)'},
        { title: 'Hang / Stuck Logo BIOS', content: '1a. Coba Flash BIOS + BIOS EC jika ada, pastikan part yang terpasang sama dengan yang ada di skema.<br>1b. Clear ME Region BIOS.<br>2. Cuci Mesin.<br>3. Ganti Kapasitor 2.5v disekitar CPU jika masih menggunakan elco menjadi kapasitor SMD 330/470.<br>4. Disable VGA.' },
        { title: 'Disable RAM Onboard', content: '1 Cari DIMM,PCBID,BOARDID dan pindah semua Resistor ke 3V.' }
    ];

    // Filter and display results
    guides.forEach(guide => {
        if (guide.title.toLowerCase().includes(query)) {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.textContent = guide.title;
            resultItem.addEventListener('click', () => {
                displayDetail(guide);
            });
            resultsContainer.appendChild(resultItem);
        }
    });
}

function displayDetail(guide) {
    const detailContainer = document.getElementById('detailContainer');
    detailContainer.innerHTML = `<h2>${guide.title}</h2><p>${guide.content}</p>`;
    detailContainer.style.display = 'block'; // Ensure the container is visible
}

// Random Quote Functionality
function displayRandomQuote() {
    const quotes = [
        "“Maka jangan sekali-kali membiarkan kehidupan dunia ini memperdayakan kamu.” – (QS. Fatir: 5)",
        "“Karena sesungguhnya sesudah kesulitan itu ada kemudahan, sesungguhnya sesudah kesulitan itu ada kemudahan.” – (QS. Al-Insyirah: 5-6)",
        "“Dan barang -siapa yang bertakwa kepada Allah, niscaya Allah menjadikan baginya kemudahan dalam urusannya.” – (QS. At-Talaq: 4)",
        "“Sesungguhnya Tuhanku amat dekat lagi memperkenankan (doa hamba-Nya).” – (QS. Hud: 61)",
        "“Cukuplah Allah menjadi Penolong kami dan Allah adalah sebaik-baik Pelindung.” – (QS. Ali Imran: 173)"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quoteContainer').textContent = randomQuote;
}

// Call the function to display a quote when the page loads
displayRandomQuote();
