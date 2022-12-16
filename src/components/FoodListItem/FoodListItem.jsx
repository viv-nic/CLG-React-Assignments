import styles from './FoodListItem.module.css';

function FoodListItem(props) {
    return (
      <div className={styles.container}>
        <h2>
          {props.foodData.rating > 4.5 ? `Highly recommend!!!💖` : ``}
        </h2> 
        
        {!props.foodData.haveTried && <h1 className={styles.mustTry}>MUST TRY</h1>}
        
        <img src={props.foodData.image} height={280} alt={props.foodData.title} />
        
        <h3>
          {props.foodData.title} |{" "}
          {props.foodData.rating > 0 ? `${props.foodData.rating}/5` : `No Rating`}
          
        </h3>
        
        <p>{props.foodData.description}</p>
        
      </div>
    );
  };
  
  export default FoodListItem;