export const Intro = ({heading, text}) => {
    return (
        <div className="intro">
            <h2 className="heading">{heading}</h2>
            <p className="text">{text}</p>
        </div>
    )
}