import Profile from "./profile/Profile";
import FriendList from "./friendList/FriendList";

import userData from "../userData.json";
import friends from "../friends.json";

import TransactionHistory from "./transactionHistory/TransactionHistory";
import transactions from "../transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
