
function change_picture_part (e) {
    let animals = ['monkey','funny-cat1','panda_swap']; //create array contain names of animals for get random name.
    let ranAnimal = animals[Math.floor(Math.random() * animals.length)]; // get random name for path image (src)

    let nameId = e.getAttribute('id'); // this is part if path image
    let pathImg = './img/' + ranAnimal + '_' + nameId + 'x1.jpg';

    e.setAttribute('src', pathImg);
    check_win();
}

function check_win() {
    // get 12 first words of image's src. For example ./img/monkey...
    let animal1 = document.getElementById('part1').getAttribute('src').substr(0,12);
    let animal2 = document.getElementById('part2').getAttribute('src').substr(0,12);
    let animal3 = document.getElementById('part3').getAttribute('src').substr(0,12);
    let animal4 = document.getElementById('part4').getAttribute('src').substr(0,12);
    let animal5 = document.getElementById('part5').getAttribute('src').substr(0,12);

    if (animal1 == animal2 && animal1 == animal3 && animal1 == animal4 && animal1 == animal5) {
        document.getElementById('part1').style.boxShadow = ('2px 3px 3px red');
        document.getElementById('part2').style.boxShadow = ('2px 3px 3px red');
        document.getElementById('part3').style.boxShadow = ('2px 3px 3px red');
        document.getElementById('part4').style.boxShadow = ('2px 3px 3px red');
        document.getElementById('part5').style.boxShadow = ('2px 3px 3px red');
    }
}