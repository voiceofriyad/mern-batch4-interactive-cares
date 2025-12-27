const hasMeeting = false;

const meetingPromise = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    setTimeout(() => {
      const meetingDetails = {
        title: "Technical meeting",
        location: "Google meet",
        time: "09:00 PM",
      };
      resolve(meetingDetails);
    }, 3000);
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

meetingPromise
  /* .then((meetingDetails) => {
    console.log(JSON.stringify(meetingDetails));
  }) */
  .then(addToCalender)
  .then((calender) => {
    console.log(calender);
  })
  .catch((err) => {
    console.log(err.message);
  });

// const promise = addToCalender(vfgbfx);
