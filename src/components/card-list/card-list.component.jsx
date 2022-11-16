import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { myList } = this.props;

    return (
      <div className="card-list">
        {myList.map((item) => {
          return <Card monster={item} />;
        })}
      </div>
    );
  }
}

export default CardList;
