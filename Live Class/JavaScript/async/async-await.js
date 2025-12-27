// async/await

/* async function friendlyFunction() {
  return "hello";
}

console.log(friendlyFunction());

console.log("after hello"); */

const hasMeeting = true;

const meetingPromise = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      title: "Technical meeting",
      location: "Google meet",
      time: "09:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled!"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.title} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

  /*  return new Promise((resolve) => {
    resolve(calender);
  }); */

  return Promise.resolve(calender);
};

// promise chaining

/* meetingPromise
    .then(addToCalender)
  .then((calender) => {
    console.log(calender);
  })
  .catch((err) => {
    console.log(err.message);
  }); */

async function meeting() {
  try {
    const meetingDetails = await meetingPromise;
    const calender = await addToCalender(meetingDetails);

    console.log(calender);
  } catch (error) {
    console.log(error.message);
  }
}

meeting();
