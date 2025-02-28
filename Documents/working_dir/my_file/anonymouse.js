setTimeout( () => {
    document.body.style.backgroundColor = 'red';

    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';

        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
        }, 2000);
    }, 3000);
}, 20000)
// document.body.style.backgroundColor = 'gray';


