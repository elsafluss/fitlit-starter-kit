'use strict'

class User {
  constructor(singleUserData, singleUserSleepData, singleUserHydrationData) {
    this.id = singleUserData.id;
    this.name = singleUserData.name;
    this.address = singleUserData.address;
    this.email = singleUserData.email;
    this.strideLength = singleUserData.strideLength;
    this.dailyStepGoal = singleUserData.dailyStepGoal;
    this.userSleep = new UserSleep(singleUserSleepData);
    this.userHydration = new UserHydration(singleUserHydrationData);
// this.userActivity =

  }

  getFirstName() {
    return this.name.split(' ')[0]
  }

}
if (typeof module !== 'undefined') {
  module.exports = User;
}