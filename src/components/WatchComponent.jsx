import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-animate-on-scroll';

export default function WatchComponent(props) {
    return (
        <div className="watch-component" ref={props.myref}>
            <ScrollAnimation initiallyVisible={true} animateIn='fadeIn' duration={4}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    rowSpacing={10}
                >
                    <Grid
                        container
                        item
                        md={6}
                        xs={12}
                        direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Grid item xs={8}>
                            <div class="media-stretch">
                                <iframe src="https://www.youtube.com/embed/BDF0VDIjcEY?autoplay=0&mute=1" frameborder="0" allow="autoplay; encrypted-media" title='demo-video'></iframe>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        md={6}
                        xs={10}
                    >
                        <Grid
                            container
                            item
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <div className='watch-header'>
                                    Promotional Video
                                </div>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item md={8}>
                                <div className='watch-par'>
                                    Watch our promotional video to see how Fashion Fusion is revolutionizing
                                    the way you interact with your wardrobe. Our AI-powered fashion assistant
                                    helps you create stunning outfits effortlessly, making fashion fun, personalized, and sustainable.
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ScrollAnimation>
        </div>
    );
}