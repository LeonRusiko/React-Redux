import UsersList from "./components/UsersList"

const Users = [{
    name: "Aituar",
    textStatus: "Я так хорошо умею спать, что я могу делать это с закрытыми глазами :)",
    avatar: "https://picsum.photos/200",
    onlineStatus: true,
  },
  {
    name: "Alisher",
    textStatus: "Если долго смотреть на мой статус, он начинает смотреть на тебя",
    avatar: "https://picsum.photos/201",
    onlineStatus: false,
  },
  {
    name: "Alexander",
    textStatus: "Не бойтесь прыгать по головам... Марио так карьеру сделал",
    avatar: "https://picsum.photos/202",
    onlineStatus: true,
  },];

const App = () => {
  return (
    <div>
      {Users.map( user => <UsersList {...user}/>)}
    </div>
  );
}

export default App;
