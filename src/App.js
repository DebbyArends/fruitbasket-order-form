import React from 'react';
import './App.css';
import Fruit from "./components/Fruit";
import Buttons from "./components/Buttons"
import TextField from "./components/Textfield";
import logo from "../src/assets/screenshot-logo.png"
import strawberry from "../src/assets/2cd43b_a3b7ef5445974d9388a2bca3ae410ffd_mv2_d_2689_1920_s_2.png"
import banana from "../src/assets/2cd43b_f06e00f3527f420c98cdafc7fc7f06f0_mv2.png"
import apple from "../src/assets/2cd43b_2b2c9275599f4a0ea3d65d2327602653_mv2.png"
import kiwi from "../src/assets/2cd43b_e5b6c8d24382437298137b14bfc6e65d_mv2_d_2464_2546_s_4_2.png"

function App() {
  const [strawberryCounter, setStrawberryCounter] = React.useState(0)
  const [bananaCounter, setBananaCounter] = React.useState(0)
  const [appleCounter, setAppleCounter] = React.useState(0)
  const [kiwiCounter, setKiwiCounter] = React.useState(0)

    const reset = () => {
        setStrawberryCounter(0)
        setBananaCounter(0)
        setAppleCounter(0)
        setKiwiCounter(0)
    }

    const [firstName, SetFirstName] = React.useState('')
    const [lastName, SetLastName] = React.useState('')
    const [ageField, SetAgeField] = React.useState(0)
    const [zipCode, SetZipCode] = React.useState('')
    const [frequency, SetFrequency] = React.useState([0])
    const [deliveryTime, SetDeliveryTime] = React.useState('')
    const [remarkField, SetRemarkField] = React.useState('')
    const [termsAndConditions, ToggleTermsAndConditions] = React.useState(false)

    function handleSubmit(e) {
      e.preventDefault();
        console.log(strawberryCounter, bananaCounter, appleCounter, kiwiCounter, firstName, lastName, ageField,
            zipCode, frequency, deliveryTime, remarkField)
    }

  return (
    <>
      <header className="Logo-delivery-service">
        <img src={logo} className="logo-image" alt="Fruitmand bezorgservice logo"/>
      </header>
         <div className="counter-container">
             <Fruit
                 image={strawberry}
                 title="Aardbeien"
                 fruitAmount={strawberryCounter}
                 fruitSetter={setStrawberryCounter}
             >
             </Fruit>
             <Fruit
                 image={banana}
                 title="Bananen"
                 fruitAmount={bananaCounter}
                 fruitSetter={setBananaCounter}
             >
             </Fruit>
             <Fruit
                 image={apple}
                 title="Appels"
                 fruitAmount={appleCounter}
                 fruitSetter={setAppleCounter}
             >
             </Fruit>
             <Fruit
                 image={kiwi}
                 title="Kiwi's"
                 fruitAmount={kiwiCounter}
                 fruitSetter={setKiwiCounter}
             >
             </Fruit>
             <div className="reset-button">
                 <Buttons
                     typeButton="button"
                     resetEvent={reset}
                     name="reset"
                     container="container-button"
                 >
                 </Buttons>
             </div>
         </div>
        <footer id="background-footer">
            <h2 className="delivery-form">Bezorgformulier</h2>
            <form onSubmit={handleSubmit} className="form-container">
                    <TextField
                        description="Voornaam"
                        fieldName="first-name"
                        valueName={firstName}
                        setting={SetFirstName}
                    >
                    </TextField>
                    <TextField
                        description="Achternaam"
                        fieldName="last-name"
                        valueName={lastName}
                        setting={SetLastName}
                    >
                    </TextField>
                    <TextField
                        description="Leeftijd"
                        fieldName="age-field"
                        valueName={ageField}
                        setting={SetAgeField}
                    >
                    </TextField>
                    <TextField
                        description="Postcode"
                        fieldName="zip-code-field"
                        valueName={zipCode}
                        setting={SetZipCode}
                    >
                    </TextField>
                    <label htmlFor="delivery-frequence">
                        Bezorgfrequentie
                        <select
                            name="choice"
                            id="choices"
                            value={frequency}
                            onChange={(e) => SetFrequency((e.target.value))}>
                            <option
                                value="weekly"
                            >
                                Iedere week
                            </option>
                            <option
                                value="every-other-week">
                                Om de week
                            </option>
                            <option
                                value="monthly">
                                Iedere maand
                            </option>
                        </select>
                    </label>
                <span>
                    <label htmlFor="delivery-moment-daytime">
                        Levermoment
                            <input
                                type="radio"
                                id="delivery-moment-daytime"
                                name="delivery-moment-daytime"
                                onChange={(e) => SetDeliveryTime(e.target.value)}
                                value="daytime"
                                checked={deliveryTime === "daytime"}
                            />
                        Overdag
                    </label>
                <label htmlFor="delivery-moment-evening">
                    <input
                        type="radio"
                        id="delivery-moment-evening"
                        name="delivery-moment-evening"
                        onChange={(e) => SetDeliveryTime(e.target.value)}
                        value="evening"
                        checked={deliveryTime === "evening"}
                    />
                    's Avonds
                </label>
                    </span>
                    <label htmlFor="remarks-field">
                        <p>Opmerking</p>
                        <textarea
                            name="remarks-field"
                            id="remarks-field"
                            cols="30"
                            rows="10"
                            value={remarkField}
                            onChange={(e) => SetRemarkField(e.target.value)}
                        >
                        </textarea>
                    </label>
                    <label htmlFor="terms-and-conditions">
                        <input
                            type="checkbox"
                            id="terms-and-conditions"
                            name="terms-and-conditions"
                            checked={termsAndConditions}
                            onChange={() => ToggleTermsAndConditions(!termsAndConditions)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <Buttons
                        typeButton="submit"
                        disableButton={!termsAndConditions}
                        name="Verzenden"
                    >
                    </Buttons>
            </form>
        </footer>
    </>
  );
}

export default App;
