import './Fruit.css';

function Fruit({image, title, fruitAmount, fruitSetter}) {
    const increase = () => {
        fruitSetter(fruitAmount => fruitAmount + 1)
    }

    const decrease = () => {
        fruitAmount > 0? fruitSetter(fruitAmount => fruitAmount -1): fruitSetter(0)
    }
    return(
        <>
        <article className="fruit">
                <img src={image} className="afbeelding-fruit" alt={title}/>
                <h2> {title}</h2>
            <div className="increase-decrease-button">
                <button
                    type="button"
                    onClick={decrease}
                    className="decrease-button"
                >
                    -
                </button>
                <span>
            <h4>{fruitAmount}</h4>
        </span>
                <button
                    type="button"
                    onClick={increase}
                    className="increase-button"
                >
                    +
                </button>
            </div>
        </article>
        </>
    )
}

export default Fruit;