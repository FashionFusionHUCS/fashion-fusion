import Grid from '@mui/material/Grid';

import img_hcy from '../images/hcy.jpeg';
import img_nic from '../images/nazli.jpg';
import img_ahg from '../images/hido.jpeg';
import img_eke from '../images/eke.jpeg';

import CardComponent from "./CardComponent";
import DividerComponent from "./DividerComponent";


export default function TeamComponent(props) {

    const nic = <CardComponent name="Nazlı" lastname="İkizler Cinbiş" img={img_nic} job="Supervisor" link='https://www.linkedin.com/in/nazli-ikizler-cinbis-b326a81/' />;
    const eke = <CardComponent name="Erdem Korhan" lastname="Erdem" img={img_eke} job="Developer" link='https://www.linkedin.com/in/erdemkorhanerdem/' />;
    const ahg = <CardComponent name="Ahmet Hidayet" lastname="Gürbüz" img={img_ahg} job="Developer" link='https://www.linkedin.com/in/hidayetgurbuz/' />;
    const hcy = <CardComponent name="Hüseyin Can" lastname="Yılmaz" img={img_hcy} job="Developer" link='https://www.linkedin.com/in/hecanyilmaz/' />;

    const div = <DividerComponent name="Team" />;

    return (
        <div className="team-component" ref={props.myref}>
            <Grid
                container
                direction="column"
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
                    {nic}
                </Grid>
                <Grid container item
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        {eke}
                    </Grid>
                    <Grid item>
                        {ahg}
                    </Grid>
                    <Grid item>
                        {hcy}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}