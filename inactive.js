const user = {
  name: "Qasim Asad",
  age: "25",
  city: "san francisco",
  lastActivity: new Date().getTime(),
};

const inactiveFirstStage = () => {
  console.log("User has been inactive for the past 1-2 minutes");
};

const inactiveSecondStage = () => {
  console.log("User has been inactive for the past 3-4 minutes");
};

const inactiveThirdStage = () => {
  console.log("User has been inactive for the past 5-6 minutes");
};

var minutes = new Date(user.lastActivity).getMinutes();

// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
  // please write your code here
  const difference = new Date().getMinutes() - minutes;

  if(0 < difference && difference < 2)
     inactiveFirstStage()
    else if(2 < difference && difference < 4)
     inactiveSecondStage()
    else if(4 < difference && difference < 6)
    inactiveThirdStage()
    else if(difference > 5)
    minutes += 6
    null;
}, 60000);
