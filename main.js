////////////////1///////////////////
function delay(data, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), ms);
  });
}

delay("John", 1000).then((data) => console.log("Hello!", data));

////////////////////2///////////////////

async function getUserInfo() {
  return delay({ name: "Vic", age: 21, id: 1, avatar: "" }, 1000);
}

async function getUserAvatar(info) {
  return delay(
    (info.avatar =
      "https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg"),
    1000
  );
}

async function getUserAdditionalInfo(info) {
  return delay((info.interests = ["sport", "books"]), 1000);
}

async function getResult() {
  let userInfo = await getUserInfo();
  let userAvatar = await getUserAvatar(userInfo);
  let userAdditional = await getUserAdditionalInfo(userInfo);
  let res = userInfo;
  console.log(res);
}
getResult();

///////////////////////3////////////////
async function getUser() {
  return { name: "Vic", age: 21, id: 1 };
}
async function getInfo() {
  let user = await getUser();
  throw new Error("error");
}

getInfo().catch((error) => console.log(error));
