function juustopuuro(x) {
    let snd = new Audio('./assets/' + x);
    snd.loop = true;
    snd.play();
    if (x === undefined) {
        let snd = new Audio('./assets/juustopuuro.mp3');
        snd.play();
        snd.loop = true;
    }
}
