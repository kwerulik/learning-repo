
function Card() {

  return (
    <div className="card">
      <img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="profile picture"
        className="card-image"
      ></img>
      <h2 className="card-title">Name</h2>
      <p className="card-text">Uniwersytet Gdanski. I like pizza</p>
    </div>
  );
}

export default Card