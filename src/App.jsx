import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import FriendsList from './components/FriendsList';
import { useState } from 'react';
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];




export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend(){
    setShowAddFriend(show => !show);
  }

  function handleAddFriends(friend){
    setFriends(friends => [...friends, friend] );
    setShowAddFriend(false)
  }

  function handleSelection(friend){
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend))
  }

  function handleSplitBill(value) {
    setFriends((friends) => 
      friends.map((friend) =>
        friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value}
        : friend
     ));

     setSelectedFriend(null)
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} 
          onSelect={handleSelection} 
          selectedFriend={selectedFriend}  
          />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriends} />}
        
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" :"Add friend"} </Button>
      </div>
      {selectedFriend &&
        <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}
          key={selectedFriend.id}
         /> 
      }
     
    </div>
  )
}



