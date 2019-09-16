const  sketch = (p)=> {
    let bg ;
    let rotation = 0;

    p.setup = function () {
        bg = p.loadImage('bg.jpg');
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.rotation){
            rotation = props.rotation * Math.PI / 180;
        }
    };

    p.draw = function () {
        p.imageMode(p.CENTER)
        p.image(bg,0,0,bg.width /5,bg.height/5);
        p.normalMaterial();
        p.noStroke();
        p.push();
        p.rotateY(rotation);
        p.pop();
    };
};

export default sketch;
