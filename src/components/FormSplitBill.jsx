import { useState } from "react";
import Button from "./Button";

function FormSplitBill({selectedFriend, onSplitBill}){
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const paiByFriend = bill ? bill - paidByUser : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    function handleSubmit(e) {
        e.preventDefault();

        if(!bill || !paidByUser) return;
        onSplitBill(whoIsPaying == "user" ? paiByFriend : -paiByFriend)
    }

    return(
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>
            <label>Bill value</label>
            <input type="text" 
                value={bill} 
                onChange={(e) => setBill(Number(e.target.value))}
            />

            <label>Your expense </label>
            <input type="text" 
                value={paidByUser}
                onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value) )} 
            />

            <label>{selectedFriend.name}'s expense </label>
            <input type="text" disabled value={paiByFriend} />

            <lable>Who is paying the bill?</lable>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="">{selectedFriend.name}</option>
            </select>
            <Button>Split bill</Button>
        </form>
    )
}

export default FormSplitBill