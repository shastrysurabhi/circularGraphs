import React from 'react';

class Circle extends React.Component {
    constructor() {
        super();
        this.updateCanvas = this.updateCanvas.bind(this);
        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas () {
        let current = 0;
        let canvas = this.refs[this.props.id];
        let ctx = canvas.getContext('2d');
        this.animate(ctx, current);
    }

    animate(ctx, current, arcCurrentLength) {
        let radiusOuterCircle = 40;
        let radiusInnerCircle = 30;
        let finish = this.props.percentage.value;
        let circumference = 2*Math.PI;
        let start = 0;
        let outerThis = this;

        ctx.clearRect(0, 0, 200, 200);

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.arc(95, 50, radiusOuterCircle, 0, 2*Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = this.props.color;
        ctx.arc(95, 50, radiusInnerCircle, start, arcCurrentLength);
        ctx.stroke();
        current++;

        if (current < finish + 1) {
            requestAnimationFrame(function () {
                outerThis.animate(ctx, current, circumference * current / 100 + start);
            });
        }
        ctx.fillText(current - 1, 90, 55);
        ctx.font = "12px Arial";
        ctx.fillText(this.props.percentage.name, 55, 130);
    }

    render() {
        return (
            <div className="App">
                <canvas ref={this.props.id} width={200} height={200}/>
            </div>
        );
    }
}

export default Circle;