import Card from "../Card/Card";

const Cards = ({cards}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        cards.map(card => <Card key={card.id} card={card}></Card>)
      }
    </div>
  );
};

export default Cards;
