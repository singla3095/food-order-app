import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";

export default function Meals() {

    const {data, isLoading, error} = useHttp('http://localhost:3000/meals');
    console.log(data);



    return <ul id="meals">
        {data.map(
            meal => <MealItem key={meal.id} meal={meal}/>
        )}
    </ul>
}