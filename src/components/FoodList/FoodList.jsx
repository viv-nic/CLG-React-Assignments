import data from "../../data/food.json";
import FoodListItem from "../FoodListItem/FoodListItem";



function FoodList() {
    return data.food.map((food, index) => {
        return <FoodListItem key={index} foodData={food} />;
    });
};


export default FoodList;