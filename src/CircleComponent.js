import React from 'react';
import Constants from './Constants';

class Circle extends React.Component {
    constructor() {
        super();
        this.updateCanvas = this.updateCanvas.bind(this);
        this.animate = this.animate.bind(this);
        this.drawArc = this.drawArc.bind(this);
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

    drawArc (ctx, xCoordinate, yCoordinate, radiusOuterCircle, start, finish, color) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.arc(xCoordinate, yCoordinate, radiusOuterCircle, start, finish);
        ctx.stroke();

    }

    animate(ctx, current, arcCurrentLength) {
        let radiusOuterCircle = 40;
        let radiusInnerCircle = 30;
        let finish = this.props.percentage.value;
        let circumference = 2*Math.PI;
        let start = 0;
        let outerThis = this;

        //clear the canvas --- for writing the number everytime
        ctx.clearRect(0, 0, 200, 200);

        // draw the outer circle
        this.drawArc(ctx, 95, 50, radiusOuterCircle, start, circumference, "black");

        // draw the inner circle
        this.drawArc(ctx, 95, 50, radiusInnerCircle, start, arcCurrentLength, this.props.color);

        current++;

        if (current < finish + 1) {
            requestAnimationFrame(() => {
                outerThis.animate(ctx, current, circumference * current / 100 + start);
            });
        }

        ctx.font = Constants.FONT_STYLE;
        let percentageText = current - 1+ '%';
        ctx.fillText(percentageText, 90, 55);
        ctx.fillText(this.props.percentage.name, 55, 130);
    }

    render() {
        return (
            <div className="App">
                <canvas ref={this.props.id} width={this.props.width} height={this.props.height}/>
            </div>
        );
    }
}

export default Circle;