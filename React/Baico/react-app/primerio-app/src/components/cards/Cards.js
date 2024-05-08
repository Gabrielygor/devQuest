import Card from "../card/Card";

const Cards = (props) => {
    return (
        <div>

            <h2> My Cards </h2>

            <div>

                <Card>
                    <h3> Titulo Card 1</h3>
                    <p> Conteudo Card 1</p>
                </Card>

                <Card>
                    <h3> Titulo Card 2</h3>
                    <p> Conteudo Card 2</p>
                </Card>

                <Card>
                    <h3> Titulo Card 3</h3>
                    <p> Conteudo Card 3</p>
                </Card>



            </div>

        </div>
    )
};

export default Cards