window.addEventListener('load', function () {
    const wizard = document.getElementById("wizard");
    const step = 10;
    wizard.stepLeft = function () {
        this.style.transform = 'scaleX(-1)';
        const left = parseInt(this.offsetLeft) || 0;
        this.style.left = `${left - step}px`;
    };
    wizard.stepRight = function () {
        this.style.transform = 'scaleX(1)';
        const left = parseInt(this.offsetLeft) || 0;
        this.style.left = `${left + step}px`;
    };
    window.addEventListener('keydown', function (event) {
        console.log(event);
        switch (event.code) {
            case 'ArrowLeft' :
                wizard.stepLeft();
                break;
            case 'ArrowRight' :
                wizard.stepRight();
                break;
            default:
                break;
        }
    })
});
