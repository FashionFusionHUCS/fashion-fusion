import Grid from '@mui/material/Grid';
import adobe from '../images/adobe.png';
import github from '../images/githubb.png';
import folder from '../images/folder.png';

import DividerComponent from "./DividerComponent";

export default function DownloadComponent(props) {

    const div = <DividerComponent name="Sources" />;

    return (
        <div className="download-component" ref={props.myref}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid container item
                    xs={12}
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
                    columnSpacing={40}
                    rowSpacing={5}
                >
                    <Grid item>
                        <a href={require("../documents/poster.pdf")} download="FashionFusion">
                            <div className='download-box'>
                                <img src={adobe} alt='poster' style={{ 'width': '35px', 'height': '35px' }} />
                                <div className='download-box-d'>Poster</div>
                            </div>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href={require("../documents/poster.pdf")} download="FashionFusion">
                            <div className='download-box'>
                                <img src={github} alt='github repo' style={{ 'width': '35px', 'height': '35px' }} />
                                <div className='download-box-d'>Repository</div>
                            </div>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href={require("../documents/poster.pdf")} download="FashionFusion">
                            <div className='download-box'>
                                <img src={folder} alt='source code' style={{ 'width': '35px', 'height': '35px' }} />
                                <div className='download-box-d'>Source Code</div>
                            </div>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}