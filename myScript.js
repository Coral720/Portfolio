const textWrapper = document.querySelectorAll('.m116');

textWrapper.forEach((userItem) => {
    userItem.innerHTML = userItem.textContent.replace(/\S/g,"<span class='letter'>$&</span>");
});

//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g,"<span class='letter'>$&</span>");

anime.timeline({})
    .add({
        targets: '.m116 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    })

