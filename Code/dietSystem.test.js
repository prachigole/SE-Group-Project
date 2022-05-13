const User = require('./Model/user')

const UserGoal = require('./Model/userGoal')

const Excercise = require('./Model/exercise')

const authController = require('./Controller/authController')


test('Creating User', async () => {
    const user = await User.create({
        name: "Sharvi",
        email_id: "sharvigabani@gmail.com",
        dob: "1/1/2000",
        gender: 2,
        user_type: 2
    })
    expect(user.dataValues.email_id).toBe("sharvigabani@gmail.com");
  });

  test('Creating User Error', async () => {
    const user = await User.create({
        name: "Sharvi",
        email_id: "sharvigabani@gmail.com",
        dob: "1/1/2000",
        gender: 2,
        user_type: 2
    })
    expect(user.dataValues.email_id).toBe("sharvigaba@gmail.com");
  });

  test("Find User's User Goal", async () =>{
    
    const userGoal = await UserGoal.findAll({where: {userUserId: 1}})
    expect(userGoal.length).toBe(1)
  })

  test("Find User's User Goal error", async () =>{
    
    const userGoal = await UserGoal.findAll({where: {userUserId: 111}})
    expect(userGoal.length).toBe(1)
  })

  test('Update User', async () => {
    const updatedUserGoal = await UserGoal.update({
        weight: 24,
        goal_weight: 25,
        height: 150,
        activity_type: 1,
        goal_duration: 2
  },{where: {userUserId: 1}})
    expect(updatedUserGoal[0]).toBe(1);
  });

  test('Update User error', async () => {
    const updatedUserGoal = await UserGoal.update({
        weight: 24,
        goal_weight: 25,
        height: 150,
        activity_type: 1,
        goal_duration: 2
  },{where: {userUserId: 11}})
    expect(updatedUserGoal[0]).toBe(1);
  });

  test('Delete Excercise ', async () => {
    const deleteUser = await Excercise.destroy({
        where: { excercise_id: 62 },
      })
    expect(deleteUser).toBe(1);
  });

  test('Delete Excercise Error', async () => {
    const deleteUser = await Excercise.destroy({
        where: { excercise_id: 61 },
      })
    expect(deleteUser).toBe(1);
  });

  test('Generate Otp ', async () => {
    const otp = authController.genrateOpt()
    expect(otp.toString().length).toBe(6);
  });

  test('Generate Otp ', async () => {
    const otp = authController.genrateOpt()
    expect(otp.toString().length + 1).toBe(6);
  });

