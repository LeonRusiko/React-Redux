import { FC } from "react";
import "./style.css"

interface IUsersListProps {
  name: string;
  textStatus: string;
  avatar: string;
  onlineStatus: Boolean;
}

const UsersList: FC<IUsersListProps> = ({
  name,
  textStatus,
  avatar,
  onlineStatus,
}) => {
  return (
    <div className="container">
      <h1>{name}</h1> 
      <p>"{textStatus}"</p>
      <img src={avatar} alt="" />
      <p>{onlineStatus ? 'online' : 'offline'}</p> <hr />
    </div>
  );
};

export default UsersList;

