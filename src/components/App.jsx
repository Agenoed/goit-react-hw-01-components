import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';
import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FriendList from './FriendList/FriendList.jsx';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics title="" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
