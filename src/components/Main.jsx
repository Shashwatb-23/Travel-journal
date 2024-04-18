/* eslint-disable react/prop-types */
export default function Main(props){
    return (
        <div className="main">
            <div className="container " >
                <div className="content">
                    <img src={`/images/${props.img}`}  className="content-images"/>
                <div className="info">
                        <u>{props.name}</u> 
                        <a href={`${props.location}`}>View on Google Maps</a>
                        <p className="content-info">
                            {props.description}
                        </p>
                </div>
                </div>
            </div>
        </div>
    )
}