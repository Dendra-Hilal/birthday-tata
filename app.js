(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Mar 02, 2023 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "Welcome! Udah menetas yang keberapa kali nih? Wkwk. Barakallah fii Umrik, ya! Berterimakasih banget kamu lebih tua dari saya. Wkwk, bercanda. Bagaimanapun, jaga kesehatan selalu, yak? Covid bukan mainan, tapi kuliah juga bukan main-main. Wkwk. Harus semangat terus ngampusnya, apapun yang terjadi. Tidak perlu mendengarkan yang tidak perlu. Semoga segalanya yang diinginkan bisa tercapai dengan baik, ya? Aamiin. Dan juga, terima kasih banyak!";
                    countdown.style.display = "none";
                    content.style.display = "block";

                clearInterval(x);
            }
            //seconds
    }, 0)
}());