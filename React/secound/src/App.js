import "bulma/css/bulma.min.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./img/alexa.png"
import CortanaImage from "./img/cortana.png"
import SiriImage from "./img/siri.png"

const App = () => {
  return (
    <div>
      <section class="hero is-warning">
        <div class="hero-body">
          <p class="title">Presonal Digital Assustants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
            </div>
            <div className="column">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
              />
            </div>
            <div className="column">
              <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;