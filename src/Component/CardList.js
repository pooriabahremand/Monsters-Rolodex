import { Component } from "react";
import MonsterCard from "./MonsterCard";
import "./card-list.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <MonsterCard monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
