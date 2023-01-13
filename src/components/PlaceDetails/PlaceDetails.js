import clsx from "clsx";
import styles from "./PlaceDetails.module.scss";

const classesPlaceDetails = clsx(styles.inner);

function PlaceDetails() {
    return <h1 className={classesPlaceDetails}>PlaceDetails</h1>;
}

export default PlaceDetails;
