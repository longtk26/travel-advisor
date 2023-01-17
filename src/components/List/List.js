import clsx from "clsx";
import styles from "./List.module.scss";
import { Type } from "../../components";

const optionsUI = {
    restaurants: ["Restaurants", "Hotels", "Attractions"],
    rating: ["All", "Above 3.0", "Above 4.0", "Above 4.5"],
};

function List() {
    return (
        <div className={clsx(styles.container)}>
            <h1 className={clsx(styles.title)}>Food & Dining around you</h1>
            <div className={clsx(styles.choices)}>
                <div className={clsx(styles.types)}>
                    <Type
                        value="restaurants"
                        type="type"
                        active
                        options={optionsUI.restaurants}
                    />
                    <Type
                        value="rating"
                        type="rating"
                        options={optionsUI.rating}
                    />
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default List;
