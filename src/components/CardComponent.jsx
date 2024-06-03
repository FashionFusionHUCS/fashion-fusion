import linkedin from '../images/linkedin.png';

export default function CardComponent(props) {
    return (
        <div className="team-card hover-grow">
            <a className='card-a' href={props.link} target="_blank" rel="noopener noreferrer">
                <div className='card-link  hover-grow'>
                    <img className='linkedin-image' src={linkedin} alt='linkedin'/>
                </div> 
                <div class="avatar avatar--xl"><img src={props.img} alt="avatar" /></div>
                <div className='card-name'>
                    {props.name}
                </div>
                <div className='card-lastname'>
                    {props.lastname}
                </div>
                <div className='card-job'>
                    {props.job}
                </div>
            </a>
        </div>
    );
}