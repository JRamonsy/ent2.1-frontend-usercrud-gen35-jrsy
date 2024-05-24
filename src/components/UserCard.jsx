import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm, }) => {
  const handleDelete = () => {
    deleteUser("/users/", user.id);
  };

  const handleEdit = () => {
    setUserEdit(user);
    handleOpenForm()
  };

  return (
    <article className="userCard__body">
      <div className="userCard__title">
      </div>
      <div className="useCard__card">
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
          <li>
            <span>Email:</span>
            <span>{user.email}</span>
          </li>
          <li>
            <span>Birthday:</span>
            <span>{user.birthday}</span>
          </li>
        </ul>
        <button className="form__btn2" onClick={handleDelete}>
          Delete
        </button>
        <button className="form__btn3" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </article>
  );
};

export default UserCard