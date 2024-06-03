import logo2 from '../images/ff2.png';

export default function HeaderComponent(props) {

    const scrollToSection = (elementRef, offset) => {
        window.scrollTo({
          top: elementRef.current.offsetTop - offset,
          behavior: "smooth",
        });
    };

    return (
        <div className="header-component">
            <div className="logos">
                <div className="logo-2">
                    <a><img src={logo2} alt='logo'/></a>
                </div>
            </div>
            <div className="buttons">
                <button className="button-tr btn-animated hover-grow" 
                    style={{'color': 'var(--gray)', 'fontSize': '15px'}}
                    onClick={() => scrollToSection(props.homeComp, 90)}
                    >
                    Home
                </button>
                <button className="button-tr btn-animated hover-grow" 
                    style={{'color': 'var(--gray)', 'fontSize': '15px'}}
                    onClick={() => scrollToSection(props.demoComp, 90)}
                    >
                    Demo
                </button>
                <button className="button-tr btn-animated hover-grow" 
                    style={{'color': 'var(--gray)', 'fontSize': '15px'}}
                    onClick={() => scrollToSection(props.techComp, 90)}
                    >
                    Technologies
                </button>
                <button className="button-tr btn-animated hover-grow" 
                    style={{'color': 'var(--gray)', 'fontSize': '15px'}}
                    onClick={() => scrollToSection(props.teamComp, 110)}
                    >
                    Team
                </button>
                <button className="button-tr btn-animated hover-grow" 
                    style={{'color': 'var(--gray)', 'fontSize': '15px'}}
                    onClick={() => scrollToSection(props.sourcesComp, 110)}
                    >
                    Sources
                </button>
            </div>
        </div>
    );
}