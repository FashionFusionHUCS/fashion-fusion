import Grid from '@mui/material/Grid';

import DividerComponent from './DividerComponent.jsx';

export default function GradioComponent(props) {

    const div = <DividerComponent name="Demo" />;

    return (
        <div className="gradio-component" style={{ "alignItems": "center" }} ref={props.myref}>
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

                <Grid item md={10}
                    direction='row'
                    justifyContent="center"
                    alignItems="center"
                    display={{ xs: "none", lg: "block", md: "block", sm: "block" }}
                >
                    <iframe
                        src="https://korhanerdem-fashion-fusion.hf.space"
                        frameborder="0"
                        style={{
                            'width': '100%', 'height': '1300px',
                            'box-shadow': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                            'justifyContent': 'center',
                            'alignContent': 'center'
                        }
                        }
                    ></iframe>
                </Grid>

                <Grid container item
                    xs={11}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    display={{ xs: "block", lg: "none", md: "none", sm: "none" }}
                >
                    <div className='boxer'>
                        <div className='about-p'>
                            To explore our demo, please utilize the desktop version of our platform.
                        </div>
                    </div>
                </Grid>

            </Grid>
        </div>
    );
};