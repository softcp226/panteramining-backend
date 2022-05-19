const Joi = require("joi");

const validate_user01 = (req) => {
  const schema = Joi.object({
    Email: Joi.string().email().required().max(1000),
    phone_number: Joi.string().required().max(1000),
    country: Joi.string().required().max(1000),
    referral: Joi.string(),
  });

  const result = schema.validate({
    Email: req.email,
    phone_number: req.phone_number,
    country: req.country,
    referral: req.referral,
  });
  if (result.error) return result.error.message;
  return true;
};

module.exports = validate_user01;
