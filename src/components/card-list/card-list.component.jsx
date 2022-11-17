import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const { myList } = props;

  return (
    <div className="card-list">
      {myList.map((item) => {
        return <Card monster={item} />;
      })}
    </div>
  );
};

export default CardList;
