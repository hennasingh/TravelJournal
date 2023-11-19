import map from '../assets/map-icon.png'
export default function TravelCard(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt="Mount Fuji in Japan" className="card-image"/>
            <div className="card-stats">
                <h3>
                <img src={map} alt="pin drop" />
                    {props.item.location}
                    <span><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                </h3>
                <h1>{props.item.title}</h1>
                <p>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>

        </div>
    )
}