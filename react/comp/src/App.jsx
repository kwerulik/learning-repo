import Button from "./components/Button";
import { MdAirplanemodeActive, MdBedtime } from "react-icons/md";

function App() {

  const handleClick = () => {
    console.log('click');
  }

  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick}>
          <MdAirplanemodeActive />
          Cześć
        </Button>
      </div>
      <div>
        <Button danger outline>
          <MdAirplanemodeActive />
          Ala ma kota
        </Button>
      </div>
      <div>
        <Button warning>
          <MdAirplanemodeActive />
          HELOO
        </Button>
      </div>
      <div>
        <Button secondary>
          <MdBedtime />
          Good bye
        </Button>
      </div>
      <div>
        <Button success outline>
          <MdBedtime />
          Kot ma Ale
        </Button>
      </div>
    </div>
  );
}

export default App
