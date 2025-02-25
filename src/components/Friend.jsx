import Button from "./Button";
import Image from './Image';


function Friend({friend, onSelect, selectedFriend}) {
  const isSelected = selectedFriend?.id === friend.id;
    return (
      <li className={isSelected ? "selected" : ""}>
        <Image alt={friend.name} src={friend.image} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 &&(
          <p className='red'>
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 &&(
           <p className='green'>
            {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 &&(
           <p>
            You and {friend.name} are even
          </p>
        )}
        <Button onClick={() => onSelect(friend)} >{isSelected ? "Close" : "Select"}</Button>
      </li> 
    )
  }


  export default Friend;