import Grid from '@mui/material/Grid';

import react from '../images/react.png';
import python from '../images/python.png';
import js from '../images/js.png';
import tensorflow from '../images/tensorflow.png';
import pytorch from '../images/pytorch.png';
import hf from '../images/hf.png';
import cirrus from '../images/cirrus.png';
import gradio from '../images/gradio.svg';

import DividerComponent from "./DividerComponent";

export default function TechComponent(props) {

    const div = <DividerComponent name="Technologies" />;

    return (
        <div className="tech-component" ref={props.myref}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
            >
                <Grid container item
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {div}
                </Grid>
                <Grid container item
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div className="tech-packet">
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <div className="tech-image hover-grow">
                                    <a href='https://www.python.org' target="_blank" rel="noopener noreferrer"><img src={python} alt='python' /></a>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="tech-image hover-grow">
                                    <a href='https://pytorch.org' target="_blank" rel="noopener noreferrer"><img src={pytorch} alt='pytorch' /></a>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="tech-image hover-grow">
                                    <a href='https://huggingface.co' target="_blank" rel="noopener noreferrer"><img src={hf} alt='huggingface' /></a>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="tech-image hover-grow">
                                    <a href='https://www.tensorflow.org' target="_blank" rel="noopener noreferrer"><img src={tensorflow} alt='tensorflow' /></a>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="tech-image hover-grow">
                                    <a href='https://www.javascript.com' target="_blank" rel="noopener noreferrer"><img src={js} alt='javascript' /></a>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="tech-image hover-grow">
                                    <a href='https://react.dev' target="_blank" rel="noopener noreferrer"><img src={react} alt='react' /></a>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="tech-image hover-grow">
                                    <a href='https://cirrus-ui.netlify.app' target="_blank" rel="noopener noreferrer"><img src={cirrus} alt='cirrus' /></a>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="tech-image hover-grow">
                                    <a href='https://www.gradio.app' target="_blank" rel="noopener noreferrer"><img src={gradio} alt='gradio' /></a>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}