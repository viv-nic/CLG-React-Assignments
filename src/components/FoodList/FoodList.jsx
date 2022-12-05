import data from "../../data/food.json";
import FoodListItem from "../FoodListItem/FoodListItem";



function FoodList() {
    return data.food.map((food) => {
        return <FoodListItem foodData={food} />;
    });
};


export default FoodList;