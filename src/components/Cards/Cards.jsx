import Card from "../Card/Card";

const Cards = ({cards , handleSelect}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        cards.map(card => <Card handleSelect={handleSelect} key={card.id} card={card}></Card>)
      }
    </div>
  );
};

export default Cards;
