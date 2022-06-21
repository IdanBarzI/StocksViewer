import { collection, getDocs } from "firebase/firestore/lite";

export async function getCurrentMoney(db) {
  const UsersCol = collection(db, "Users");
  const MoneyCol = collection(db, "Money");
  const usersSnapshot = await getDocs(UsersCol);
  const moneySnapshot = await getDocs(MoneyCol);
  const user = usersSnapshot.docs.map((doc) => {
    if (doc.data().Uid === JSON.parse(localStorage.user).uid) return doc.data();
  });
  const money = moneySnapshot.docs.map((doc) => {
    return doc.data();
  });
  console.log(user[0].Deposits);
  console.log(money[0].History);
  let amount = Number(user[0].StartingMoney);
  const m = user[0].Deposits.map((dep) => {
    money[0].History.map((mon) => {
      // if (
      //   new Date(dep.Date.seconds).getDay() ===
      //   new Date(mon.Date.seconds).getDay()
      // ) {
      //   amount = amount + amount * (Number(mon.Precent) / 100);
      // }
      if (dep.Date.seconds < mon.Date.seconds) {
        amount = amount + amount * (Number(mon.Precent) / 100);
      }
    });
  });
  console.log(amount);
  return amount;
}
