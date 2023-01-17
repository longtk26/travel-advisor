import GoogleMapReact from "google-map-react";
import clsx from "clsx";
import styles from "./Map.module.scss";

function Map() {
    const coordinates = { lat: 0, lng: 0 };

    return (
        <div className={clsx(styles.container)}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyDMUdBp3b2VvdxpcjnRuVPxxEKXSy6dLyw",
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={() => {}}
                onChildClick={() => {}}
            ></GoogleMapReact>
        </div>
    );
}

export default Map;
