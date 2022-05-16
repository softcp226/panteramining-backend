const Investment = require("../model/investment");

const create_investment = async (req) => {
  let currentdate = new Date();
  let datetime = `${currentdate.getFullYear()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
  let ref = Math.floor(Math.random() * 1000);
  const investment = await new Investment({
    user: req.body.user,
    transaction_date: datetime,
    refrence_number: `Ref#${++ref} `,
    amount: req.body.investment_amount,
    investment_plan: req.body.investment_plan,
  });
  await investment.save();
  return investment;
};
module.exports = create_investment;
