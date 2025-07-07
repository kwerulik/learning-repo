
function ProfilePicture() {
  const imgURL = './src/assets/react.svg';

  const hendleClick = (e) => {
    e.target.style.display = 'none';
  }

  return <img onClick={(e) => hendleClick(e)} src={imgURL}></img>;
}

export default ProfilePicture