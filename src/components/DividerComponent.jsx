export default function DividerComponent(props) {
    return (
        <div className="divider-component">
            <div className="divider-content">
                {props.name}
            </div>
            <div className="divider-line"/>
        </div>
    );
}