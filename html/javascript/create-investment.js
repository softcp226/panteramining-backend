const write_percentage = (percentage, earning) => {
  document.querySelector("#percentage").innerHTML = percentage;
  document.querySelector("#earning").innerHTML = earning;
};
const show_err = () => {
  document.querySelector("#amount").style.border = "2px solid red";
  document.querySelector(".errMessage").innerHTML =
    "Investment amount can not be lesser than minimum investment for the plan selected";
};

const handle_request = () => {
  let plan = document.querySelector("#plan");
  let investment_amount = document.querySelector("#amount");
  switch (plan.value) {
    case "Basic Plan":
      if (!investment_amount.value) return;
      if (parseInt(investment_amount.value) < 30) return show_err();
      var percentage = "Weekly Percentage: 7%";
      var earning = `Weekly Earning: $${(investment_amount.value / 100) * 7}`;
      write_percentage(percentage, earning);
      break;

    case "Premium Plan":
      if (!investment_amount.value) return;
      if (parseInt(investment_amount.value) < 100) return show_err();
      var percentage = "Weekly Percentage: 10%";
      var earning = `Weekly Earning: $${(investment_amount.value / 100) * 10}`;
      write_percentage(percentage, earning);
      break;

    case "Standard Plan":
      if (!investment_amount.value) return;
      if (parseInt(investment_amount.value) < 1500) return show_err();
      var percentage = "Weekly Percentage: 25%";
      var earning = `Weekly Earning: $${(investment_amount.value / 100) * 25}`;
      write_percentage(percentage, earning);
      break;

    case "Enterprise Plan":
      if (!investment_amount.value) return;
      if (parseInt(investment_amount.value) < 3200) return show_err();
      var percentage = "Weekly Percentage: 30.5%";
      var earning = `Weekly Earning: $${
        (investment_amount.value / 100) * 30.5
      }`;
      write_percentage(percentage, earning);
      break;

    case "Ultimate Plan":
      if (!investment_amount.value) return;
      if (parseInt(investment_amount.value) < 10000) return show_err();
      var percentage = "Weekly Percentage: 40%";
      var earning = `Weekly Earning: $${
        (investment_amount.value / 10000) * 40
      }`;
      write_percentage(percentage, earning);
      break;

    default:
      return;
      break;
  }
};

document.querySelector("#plan").onchange = () => {
  document.querySelector("#plan").style.border = "2px solid #fff";
  document.querySelector("#amount").style.border = "2px solid #fff";
  document.querySelector(".errMessage").innerHTML = "";
  handle_request();
};
document.querySelector("#amount").onchange = () => {
  document.querySelector("#amount").style.border = "2px solid #fff";
  document.querySelector("#plan").style.border = "2px solid #fff";
  document.querySelector(".errMessage").innerHTML = "";
  if (!document.querySelector("#plan").value) return;
  handle_request();
  //   {
  //       document.querySelector("#plan").style.border="2px solid red";
  //        document.querySelector(".errMessage").innerHTML ="Please select an investment plan"
  //     return;
  //   }
};

const handle_submit_request = async (form) => {
  const token = getCookie("token");
  const user = getCookie("user");
  document.querySelector("#submit").innerHTML = "proccesing...";
  try {
    const response = await fetch("/api/user/create_investment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        token,
        user,
        investment_plan: form.plan,
        investment_amount: form.amount,
      }),
    });
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#submit").innerHTML = "try again";
      return;
    }
    document.querySelector("#submit").innerHTML = "success";
    window.location.href = `/action/loading.html`;
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "try again";
  }
};

const handle_button_request = () => {
  let plan = document.querySelector("#plan");
  let investment_amount = document.querySelector("#amount");
  switch (plan.value) {
    case "Basic Plan":
      if (!investment_amount.value) return;
      if (parseInt(investment_amount.value) < 30) return show_err();
      var percentage = "Weekly Percentage: 7%";
      var earning = `Weekly Earning: $${(investment_amount.value / 100) * 7}`;
      write_percentage(percentage, earning);
      handle_submit_request({
        plan: plan.value,
        amount: investment_amount.value,
      });
      break;

    case "Premium Plan":
      if (!investment_amount.value) return;
      if (parseInt(investment_amount.value) < 100) return show_err();
      var percentage = "Weekly Percentage: 10%";
      var earning = `Weekly Earning: $${(investment_amount.value / 100) * 10}`;
      write_percentage(percentage, earning);
      handle_submit_request({
        plan: plan.value,
        amount: investment_amount.value,
      });
      break;

    case "Standard Plan":
      if (!investment_amount.value) return;
      if (parseInt(investment_amount.value) < 1500) return show_err();
      var percentage = "Weekly Percentage: 25%";
      var earning = `Weekly Earning: $${(investment_amount.value / 100) * 25}`;
      write_percentage(percentage, earning);
      handle_submit_request({
        plan: plan.value,
        amount: investment_amount.value,
      });
      break;

    case "Enterprise Plan":
      if (!investment_amount.value) return;
      if (parseInt(investment_amount.value) < 3200) return show_err();
      var percentage = "Weekly Percentage: 30.5%";
      var earning = `Weekly Earning: $${
        (investment_amount.value / 100) * 30.5
      }`;
      write_percentage(percentage, earning);
      handle_submit_request({
        plan: plan.value,
        amount: investment_amount.value,
      });
      break;

    case "Ultimate Plan":
      if (!investment_amount.value) return;
      if (parseInt(investment_amount.value) < 10000) return show_err();
      var percentage = "Weekly Percentage: 40%";
      var earning = `Weekly Earning: $${
        (investment_amount.value / 10000) * 40
      }`;
      write_percentage(percentage, earning);
      handle_submit_request({
        plan: plan.value,
        amount: investment_amount.value,
      });
      break;

    default:
      return;
      break;
  }
};

document.querySelector("#submit").onclick = () => {
  let investment_amount = document.querySelector("#amount");
  let plan = document.querySelector("#plan");

  if (!investment_amount.value)
    return (investment_amount.style.border = "2px solid red");
  if (!plan.value) return (plan.style.border = "2px solid red");
  handle_button_request();
};

// document.querySelector("#plan").onchange = document
//   .querySelectorAll("input")
//   .forEach((input) => {
//     input.onkeyup = () => {
//       input.style.border = "2px solid #fff";
//       document.querySelector(".errMessage").innerHTML = "";
//     };
//   });

// document.querySelectorAll("select").forEach((select) => {
//   select.onchange = () => {};
// });
