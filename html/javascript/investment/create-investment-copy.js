const write_percentage = (percentage, earning) => {
  document.querySelector("#percentage").innerHTML = percentage;
  document.querySelector("#earning").innerHTML = earning;
};
const show_err = () => {
  document.querySelector("#amount").style.border = "2px solid red";
  document.querySelector(".errMessage").innerHTML =
    "Investment amount can not be lesser than minimum investment for the plan selected";
};
const disable_show_err = () => {
  document.querySelector("#amount").style.border = "2px solid #fff";
  document.querySelector(".errMessage").innerHTML = "";
};
let profit;

const handle_request = () => {
  switch (plan.value) {
    case "Basic Plan":
      if (!amount.value) return;
      if (!return_time.value) return;
      if (parseInt(amount.value) < 30) return show_err();
      disable_show_err();
      if (return_time.value == "daily_return") {
        var percentage = "daily Percentage: 7%";
        var earning = `daily Earning: $${Math.round((amount.value / 100) * 7)}`;
        profit = Math.round((amount.value / 100) * 7);
        write_percentage(percentage, earning);
        break;
      } else {
        var percentage = "Weekly Percentage: 49%";
        var earning = `Weekly Earning: $${Math.round(
          (amount.value / 100) * 7 * 7
        )}`;
        profit = Math.round((amount.value / 100) * 7 * 7);
        write_percentage(percentage, earning);
        break;
      }

    case "Premium Plan":
      if (!amount.value) return;
      if (!return_time.value) return;
      if (parseInt(amount.value) < 100) return show_err();
      disable_show_err();
      if (return_time.value == "daily_return") {
        var percentage = "daily Percentage: 10%";
        var earning = `daily Earning: $${Math.round(
          (amount.value / 100) * 10
        )}`;
        profit = Math.round((amount.value / 100) * 10);
        write_percentage(percentage, earning);
        break;
      } else {
        var percentage = "Weekly Percentage: 70%";
        var earning = `Weekly Earning: $${Math.round(
          (amount.value / 100) * 10 * 7
        )}`;
        profit = Math.round((amount.value / 100) * 10 * 7);
        write_percentage(percentage, earning);
        break;
      }

    case "Standard Plan":
      if (!amount.value) return;
      if (!return_time.value) return;
      if (parseInt(amount.value) < 1100) return show_err();
      disable_show_err();
      if (return_time.value == "daily_return") {
        var percentage = "daily Percentage: 25%";
        var earning = `daily Earning: $${Math.round(
          (amount.value / 100) * 25
        )}`;
        profit = Math.round((amount.value / 100) * 25);
        write_percentage(percentage, earning);
        break;
      } else {
        var percentage = "Weekly Percentage: 175%";
        var earning = `Weekly Earning: $${Math.round(
          (amount.value / 100) * 175 * 7
        )}`;
        profit = Math.round((amount.value / 100) * 175 * 7);
        write_percentage(percentage, earning);
        break;
      }

    case "Enterprise Plan":
      if (!amount.value) return;
      if (!return_time.value) return;
      if (parseInt(amount.value) < 3100) return show_err();

      disable_show_err();
      if (return_time.value == "daily_return") {
        var percentage = "daily Percentage: 30.5%";
        var earning = `daily Earning: $${Math.round(
          (amount.value / 100) * 30.5
        )}`;
        profit = Math.round((amount.value / 100) * 30.5);
        write_percentage(percentage, earning);
        break;
      } else {
        var percentage = "Weekly Percentage: 213.5%";
        var earning = `Weekly Earning: $${Math.round(
          (amount.value / 100) * 213.5 * 7
        )}`;
        profit = Math.round((amount.value / 100) * 213.5 * 7);
        write_percentage(percentage, earning);
        break;
      }

    case "Ultimate Plan":
      if (!amount.value) return;
      if (!return_time.value) return;
      if (parseInt(amount.value) < 11000) return show_err();

      disable_show_err();
      if (return_time.value == "daily_return") {
        var percentage = "daily Percentage: 40%";
        var earning = `daily Earning: $${Math.round(
          (amount.value / 100) * 40
        )}`;
        profit = Math.round((amount.value / 100) * 40);
        write_percentage(percentage, earning);
        break;
      } else {
        var percentage = "Weekly Percentage: 280%";
        var earning = `Weekly Earning: $${Math.round(
          (amount.value / 100) * 280 * 7
        )}`;
        profit = Math.round((amount.value / 100) * 280 * 7);
        write_percentage(percentage, earning);
        break;
      }

    default:
      handle_keychange();
      break;
  }
};

const handle_keychange = () => {
  if (!amount.value) return display_error(amount);
  hide_error(amount);
  if (!plan.value) return display_error(plan);
  hide_error(plan);
  if (!return_time.value) return display_error(return_time);

  hide_error(return_time);
  handle_request();
};
