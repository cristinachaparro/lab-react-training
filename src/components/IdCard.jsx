function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <b>Last Name</b>: {lastName}
      <b>First Name</b>: {firstName}
      <b>Gender</b>: {gender}
      <b>Height</b>: {height}
      <b>Birthday</b>: {birth.toLocaleString()}
      <b>Image</b>: <img alt="profile pic" src={picture}></img>
    </div>
  );
}

export default IdCard;
