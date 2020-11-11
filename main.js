// function to change picture in part 1 of picture.

function change_picture_part(element) {
    let dataName = element.getAttribute('data-name');
    let currentId = element.getAttribute('id');
    console.log(currentId);
    switch (currentId) {
        case 'part1':
            if (dataName == 'monkey') {
                element.src = './img/funny-cat1_part1x1.jpg';
                element.setAttribute('data-name', 'funny')
            } else if (dataName == 'funny') {
                element.src = './img/panda_swap_part1x1.jpg';
                element.setAttribute('data-name', 'panda')
            } else {
                element.src = './img/monkey_part1x1.jpg';
                element.setAttribute('data-name', 'monkey')
            }
            break;
        case 'part2':
            if (dataName == 'monkey') {
                element.src = './img/funny-cat1_part2x1.jpg';
                element.setAttribute('data-name', 'funny')
            } else if (dataName == 'funny') {
                element.src = './img/panda_swap_part2x1.jpg';
                element.setAttribute('data-name', 'panda')
            } else {
                element.src = './img/monkey_part2x1.jpg';
                element.setAttribute('data-name', 'monkey')
            }
            break;
        case 'part3':
            if (dataName == 'monkey') {
                element.src = './img/funny-cat1_part3x1.jpg';
                element.setAttribute('data-name', 'funny')
            } else if (dataName == 'funny') {
                element.src = './img/panda_swap_part3x1.jpg';
                element.setAttribute('data-name', 'panda')
            } else {
                element.src = './img/monkey_part3x1.jpg';
                element.setAttribute('data-name', 'monkey')
            }
            break;
        case 'part4':
            if (dataName == 'monkey') {
                element.src = './img/funny-cat1_part4x1.jpg';
                element.setAttribute('data-name', 'funny')
            } else if (dataName == 'funny') {
                element.src = './img/panda_swap_part4x1.jpg';
                element.setAttribute('data-name', 'panda')
            } else {
                element.src = './img/monkey_part4x1.jpg';
                element.setAttribute('data-name', 'monkey')
            }
            break;
        case 'part5':
            if (dataName == 'monkey') {
                element.src = './img/funny-cat1_part5x1.jpg';
                element.setAttribute('data-name', 'funny')
            } else if (dataName == 'funny') {
                element.src = './img/panda_swap_part5x1.jpg';
                element.setAttribute('data-name', 'panda')
            } else {
                element.src = './img/monkey_part5x1.jpg';
                element.setAttribute('data-name', 'monkey')
            }
    }
    check_win();
}

function check_win() {
    let dataName1 = document.getElementById('part1').getAttribute('data-name');
    let dataName2 = document.getElementById('part2').getAttribute('data-name');
    let dataName3 = document.getElementById('part3').getAttribute('data-name');
    let dataName4 = document.getElementById('part4').getAttribute('data-name');
    let dataName5 = document.getElementById('part5').getAttribute('data-name');

    if (dataName1 == dataName2 && dataName1 == dataName3 && dataName1 == dataName4 && dataName1 == dataName5) {
        document.getElementById('part1').style.boxShadow = ('2px 3px 3px red');
        document.getElementById('part2').style.boxShadow = ('2px 3px 3px red');
        document.getElementById('part3').style.boxShadow = ('2px 3px 3px red');
        document.getElementById('part4').style.boxShadow = ('2px 3px 3px red');
        document.getElementById('part5').style.boxShadow = ('2px 3px 3px red');
    }
}