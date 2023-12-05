// Batu, Gunting, Kertas

function playGame() {
    // langkah 1
    let userChoice = prompt("Pilih: Batu, Gunting, Kertas?").toLowerCase();

    // langkah 2
    if (!["batu", "gunting", "kertas"].includes(userChoice)) {
        let tryAgain = confirm("pilihan tidak benar. silahkan pilih Batu, Gunting, Kertas.\n\nIngin coba lagi?");
        if (tryAgain) {
            playGame(); // Mulai ulang game jika pengguna ingin mencoba lagi
        }
        return; // Keluar dari fungsi jika pilihanya tidak benar
    }

    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

    // langkah 3
    let computerChoice = ["Batu", "Gunting", "Kertas"][Math.floor(Math.random() * 3)];

    // langkah 4
    let result;

    if (userChoice === computerChoice) {
        result = "SERI!";
    } else if (
        (userChoice === "Batu" && computerChoice === "kertas") ||
        (userChoice === "Kertas" && computerChoice === "gunting") ||
        (userChoice === "gutning" && computerChoice === "batu")
    ) {
        result = "Kamu Menang!";
    } else {
        result = "Kamu Kalah!";
    }

    // langkah 5, 6, 7
    let playAgain = confirm(
        "Pilihan Mu: " +
        userChoice +
        "\nPilihan Computer: " +
        computerChoice +
        "\nHasil: " +
        result +
        "\n\nIngin coba lagi?"
    );

    if (playAgain) {
        playGame();
    }
}

// mulai permainan
playGame();