import ScrollAnimation from 'react-animate-on-scroll';
import { Grid } from '@mui/material';

import givescores from '../images/givescores.png';
import suggestions from '../images/suggestions.png';
import integ from '../images/integration.png';
import serve from '../images/serve.png'


export default function AboutComponent(props) {

    return (
        <div className="about-component" ref={props.myref}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 10, lg: 25 }}
            >
                <Grid item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item md={8} xs={10}>
                        <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" initiallyVisible={false}>
                            <Grid
                                spacing={2}
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item md={6} xs={12}>
                                    <div className="boxer-l">
                                        <div className='about-h'>
                                            AI Compatibility Scoring
                                        </div>
                                        <div className='about-p'>
                                            Upload your clothes and let our AI calculate the compatibility scores, ensuring every piece you own fits perfectly together.
                                        </div>
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    md={2}
                                    xs={0}
                                    display={{ xs: "none", lg: "block", md: "block", sm: "block" }}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <img className='givescores-image' src={givescores} alt='givescores' />
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
                <Grid item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item md={8} xs={10}>
                        <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" initiallyVisible={false}>
                            <Grid spacing={2}
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid
                                    item
                                    md={2}
                                    xs={0}
                                    display={{ xs: "none", lg: "block", md: "block", sm: "block" }}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <img className='suggestions-image' src={suggestions} alt='suggestions' />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div className="boxer-r">
                                        <div className='about-h'>
                                            Personalized Outfit Suggestions
                                        </div>
                                        <div className='about-p'>
                                            Receive personalized outfit suggestions based on your unique style and preferences.
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
                <Grid item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item md={8} xs={10}>
                        <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" initiallyVisible={false}>
                            <Grid
                                spacing={2}
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item md={6} xs={12}>
                                    <div className="boxer-l">
                                        <div className='about-h'>
                                            Fashion Trend Integration
                                        </div>
                                        <div className='about-p'>
                                            Stay ahead of the trends with AI-generated suggestions that incorporate the latest fashion styles.
                                        </div>
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    md={2}
                                    xs={0}
                                    display={{ xs: "none", lg: "block", md: "block", sm: "block" }}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <img className='integ-image' src={integ} alt='integration' />
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
                <Grid item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item md={8} xs={10}>
                        <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" initiallyVisible={false}>
                            <Grid 
                            spacing={2}
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid
                                    item
                                    md={2}
                                    xs={0}
                                    display={{ xs: "none", lg: "block", md: "block", sm: "block" }}
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <img className='serve-image' src={serve} alt='serve' />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div className="boxer-r">
                                        <div className='about-h'>
                                            Who Do We Serve?
                                        </div>
                                        <div className='about-p'>
                                            We appeal to a diverse audience, including fashion enthusiasts
                                            who love to experiment with styles, busy professionals looking for
                                            quick and stylish wardrobe solutions, and tech-savvy Millennials
                                            and Gen Zers who appreciate convenience and personalization.
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}