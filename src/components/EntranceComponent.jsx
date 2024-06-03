import { Grid } from "@mui/material";

import logo from "../images/home-logo.png";

export default function EntranceComponent(props) {
    return (
        <div className="entrance-component" ref={props.myref}>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowSpacing={8}
            >
                <Grid item md={4} xs={10}>
                    <div className="watch-par" style={{'fontSize':'16px', 'textAlign':'left'}}>
                        We believe that fashion should be fun, effortless, and accessible to everyone. 
                        Our mission is to revolutionize the way you approach your wardrobe by using cutting-edge
                        artificial intelligence to create perfectly curated outfits that reflect your personal style.
                        We use AI algorithms that utilize multimodality to analyze your wardrobe and 
                        calculate the compatibility of each piece of clothing. By considering factors such as color, 
                        pattern, and style, our AI generates personalized outfit suggestions that make getting dressed 
                        a breeze. Whether you're getting ready for a special event or just planning your daily look, 
                        it always lets you step out with confidence and style.
                    </div>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={3.5} xs={6}>
                    <img className='logo-image' src={logo} alt='logo' />
                </Grid>

            </Grid>
        </div>
    );
}