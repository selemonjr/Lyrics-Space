const btnEl = document.querySelector(".finder");
const textEl = document.querySelector(".text")
const loaded = document.querySelector(".display")
btnEl.addEventListener("click",() => {
    const artistEl = document.querySelector(".artist").value;
    const songEl = document.querySelector(".song").value;
    fetch(`https://api.lyrics.ovh/v1/${artistEl}/${songEl}`)
    .then(response => response.json())
    .then(data => music(data))
    function music(lyric) {
        textEl.textContent = lyric.lyrics;
    }
    jokes()
});
