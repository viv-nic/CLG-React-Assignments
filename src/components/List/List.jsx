import data from "../../data/food.json";
import ListItem from "../listItem/listItem";



function List() {
    return data.food.map((food) => {
        return <ListItem foodData={food} />;
    })
}


export default List;