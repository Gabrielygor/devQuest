import Card from "../card/Card";

const cardsTitles = ['Titulo Card 1', 'Titulo Card 2', 'Titulo Card 3'];

const Cards = (props) => {
    return (
        <div>

            <h2> My Cards </h2>

            <div>

                {cardsTitles.map((cardsTitles, index) => {
                    return (
                        <Card key={index} >
                            <h3>{cardsTitles}</h3>
                        </Card>
                    )
                })}

            </div>
        </div>
    )
};

export default Cards