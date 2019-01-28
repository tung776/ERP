// Removed cyrillic chars
var phoneRegExp = /^[0-9\+]?([0-9-\s()])+[0-9()]$/;
var intNumberRegExp = /[0-9]+/;
var floatNumberRegExp = /(^[0-9]+(\.[0-9]{1,2})?)$/;
var nameRegExp = /^[a-zA-Z]+[a-zA-Z-_\s]+$/;
var groupsNameRegExp = /[a-zA-Z0-9]+[a-zA-Z0-9-,#@&*-_\s()\.\/\s]+$/;
var loginRegExp = /[\w\.@]{4,100}$/;
var passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
var skypeRegExp = /^[\w\.\-@]{6,100}$/;
var workflowRegExp = /^[a-zA-Z0-9\s]{2,100}$/;
var invalidCharsRegExp = /[~<>\^\*₴]/;
var countryRegExp = /[a-zA-Z\s-]+/;
var zipRegExp = /[a-zA-Z0-9\s-]+$/;
var streetRegExp = /^[a-zA-Z0-9\s][a-zA-Z0-9-,\s\.\/\s]+$/;
var moneyAmountRegExp = /^([0-9]{1,9})\.?([0-9]{1,2})?$/;
var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var loggedRegExp = /^([0-9]{1,9})\.?([0-9]{1,2})?$/;
//var urlRegExp = /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
var cleanUrlRegExp = /(http|https):\/\/[\w-]+(\.[\w-]+)+(\/?)$/;
var loginCharRegex = /[a-zA-Z0-9\.]/;
var socialFacebookRegExp = /(?:http:\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(\d.*))?([\w\-]*)?/;
var socialLinkedinRegExp = /(ftp|http|https):\/\/?((www|\w\w)\.)?([\w[]]|linkedin).com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g;
var MIN_LENGTH = 2;
var LOGIN_MIN_LENGTH = 4;
var WORKFLOW_MIN_LENGTH = 3;

var errorMessages = {
  userName: "Giá trị không chính xác. Chỉ sử dụng các ký tự A-Z, a-z",
  invalidNameMsg: "Giá trị không chính xác. Chỉ sử dụng số hặc ký tự a-z",
  invalidLoginMsg:
    "Giá trị không chính xác. Chỉ chấp nhận các ký tự a-z A-Z, số _ hoặc @",
  notNumberMsg: "Chỉ chấp nhận các giá trị số nguyên",
  notPriceMsg:
    "Giá chỉ chứa các số 0-9 và chỉ nên có 2 ký tự sau dấu , vd 10.000,00",
  invalidCountryMsg: "Các giá trị chỉ nên chứa các ký tự và dấu - ",
  loggedNotValid:
    "Trường giá trị chứa giá trị thập phân với tối đa 1 ký tự sau dấu ,",
  minLengthMsg: function(minLength) {
    return "Trường giá trị nên có nhiều hơn " + minLength + " ký tự";
  },

  invalidMoneyAmountMsg:
    "trường giá trị nên là các số dương với tôi đa 2 ký tự số sau dấu ,",
  invalidEmailMsg: "trường giá trị nên chính xác là địa chỉ email",
  requiredMsg: "trường giá trị không thể bỏ trống",
  invalidCharsMsg: "trường giá trị không thể chứa các ký tự '~ < > ^ * ₴'",
  invalidStreetMsg:
    "trường giá trị chỉ chứa các ký tự a-z A-Z, số và các ký tự '. , - /'",
  invalidPhoneMsg: "trường giá trị chỉ chứa số và các ký tự '+ - ( )' ",
  invalidZipMsg: "trường giá trị chỉ chứa kí tự, số và dấu '-'",
  passwordsNotMatchMsg: "Mật khẩu và mật khẩu nhắc lại không giống nhau",
  invalidCleanUrl: " tên miền không chính xác",
  mustToBePositive: "trường giá trị là số nguyên dương",
  mustToBeOnlyNubmer: "trường giá trị là kiểu số",
  isOutOfRange: "vượt quá giới hạn "
};

var validateEmail = function(validatedString) {
  return emailRegExp.test(validatedString);
};

var validateUrl = function(validateString) {
  return cleanUrlRegExp.test(validateString);
};

var validateLogin = function(validatedString) {
  return loginRegExp.test(validatedString);
};

var validateSkype = function(validatedString) {
  return skypeRegExp.test(validatedString);
};

var validateZip = function(validatedString) {
  return zipRegExp.test(validatedString);
};

var requiredFieldLength = function(validatedString) {
  return validatedString.length >= MIN_LENGTH;
};

var validatePhone = function(validatedString) {
  return phoneRegExp.test(validatedString);
};

var validateName = function(validatedString) {
  return nameRegExp.test(validatedString);
};

var validateGroupsName = function(validatedString) {
  return groupsNameRegExp.test(validatedString);
};

var validateWorkflowName = function(validatedString) {
  return workflowRegExp.test(validatedString);
};

var validatePass = function(validatedString) {
  return passRegExp.test(validatedString);
};

var validateCountryName = function(validatedString) {
  return countryRegExp.test(validatedString);
};

var validateStreet = function(validatedString) {
  return streetRegExp.test(validatedString);
};

var validateLoggedValue = function(validatedString) {
  return loggedRegExp.test(validatedString);
};

var validateFloat = function(validatedString) {
  return floatNumberRegExp.test(validatedString);
};

var validateNumber = function(validatedString) {
  return intNumberRegExp.test(validatedString);
};

var validateMoneyAmount = function(validatedString) {
  return moneyAmountRegExp.test(validatedString);
};

var validateDate = function(validatedString) {
  return new Date(validatedString).getYear() ? true : false;
};

var validateFacebookSocial = function(validatedString) {
  return socialFacebookRegExp.test(validatedString);
};

/*var validateLinkedinSocial = function (validatedString) {
 return socialLinkedinRegExp.test(validatedString);
 };*/

var hasInvalidChars = function(validatedString) {
  return invalidCharsRegExp.test(validatedString);
};

var checkDateField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (fieldValue.length < MIN_LENGTH) {
      errorArray.push(
        [fieldName, errorMessages.minLengthMsg(MIN_LENGTH)].join(" ")
      );
      return;
    }
    if (!validateDate(fieldValue)) {
      errorArray.push([fieldName, errorMessages.userName].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (!validateDate(fieldValue)) {
        errorArray.push([fieldName, errorMessages.userName].join(" "));
      }
    }
  }
};

var checkUrl = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
    }
  }

  if (!validateUrl(fieldValue)) {
    errorArray.push([fieldName, errorMessages.invalidCleanUrl].join(" "));
  }
  return;
};

var checkPresent = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (typeof fieldValue === "object" && !fieldValue.length) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
  }
};

var checkNameField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (fieldValue.length < MIN_LENGTH) {
      errorArray.push(
        [fieldName, errorMessages.minLengthMsg(MIN_LENGTH)].join(" ")
      );
      return;
    }
    if (!validateName(fieldValue)) {
      errorArray.push([fieldName, errorMessages.userName].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return errorMessages.invalidCharsMsg;
      }
      if (!validateName(fieldValue)) {
        errorArray.push([fieldName, errorMessages.userName].join(" "));
        return errorMessages.userName;
      }
    }
  }
};

var checkLogedField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (fieldValue.length < MIN_LENGTH) {
      errorArray.push(
        [fieldName, errorMessages.minLengthMsg(MIN_LENGTH)].join(" ")
      );
      return;
    }
    if (!validateLoggedValue(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidNameMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (!validateLoggedValue(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidNameMsg].join(" "));
      }
    }
  }
};

var checkPriceField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.notPriceMsg].join(" "));
      return;
    }
    if (!validateFloat(fieldValue)) {
      errorArray.push([fieldName, errorMessages.notPriceMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.notPriceMsg].join(" "));
        return;
      }
      if (!validateFloat(fieldValue)) {
        errorArray.push([fieldName, errorMessages.notPriceMsg].join(" "));
      }
    }
  }
};

var checkNumberField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.notNumberMsg].join(" "));
      return;
    }
    if (!validateNumber(fieldValue)) {
      errorArray.push([fieldName, errorMessages.notNumberMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.notNumberMsg].join(" "));
        return;
      }
      if (!validateNumber(fieldValue)) {
        errorArray.push([fieldName, errorMessages.notNumberMsg].join(" "));
      }
    }
  }
};

var checkGroupsNameField = function(
  errorArray,
  required,
  fieldValue,
  fieldName
) {
  console.log(
    `checking groups name field ${fieldName} ${fieldValue}`,
    errorArray
  );
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (fieldValue.length < MIN_LENGTH) {
      errorArray.push(
        [fieldName, errorMessages.minLengthMsg(MIN_LENGTH)].join(" ")
      );
      return;
    }
    if (!validateGroupsName(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidNameMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (!validateGroupsName(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidNameMsg].join(" "));
      }
    }
  }
};

var checkLoginField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (fieldValue.length < LOGIN_MIN_LENGTH) {
      errorArray.push(
        [fieldName, errorMessages.minLengthMsg(LOGIN_MIN_LENGTH)].join(" ")
      );
      return;
    }
    if (!validateLogin(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (fieldValue.length < MIN_LENGTH) {
        errorArray.push([fieldName, errorMessages.minLengthMsg(6)].join(" "));
        return;
      }
      if (!validateName(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(" "));
      }
    }
  }
};

var checkSkypeField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (fieldValue.length < 6) {
      errorArray.push([fieldName, errorMessages.minLengthMsg(6)].join(" "));
      return;
    }
    if (!validateWorkflowName(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (fieldValue.length < 6) {
        errorArray.push([fieldName, errorMessages.minLengthMsg(6)].join(" "));
        return;
      }
      if (!validateSkype(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(" "));
      }
    }
  }
};

var checkFacebookSocial = function(
  errorArray,
  required,
  fieldValue,
  fieldName
) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }

    if (!validateFacebookSocial(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (!validateFacebookSocial(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(" "));
      }
    }
  }
};

var checkLinkedinSocial = function(
  errorArray,
  required,
  fieldValue,
  fieldName
) {
  var check = /(ftp|http|https):\/\/?((www|\w\w)\.)?([\w[]]|linkedin).com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g.test(
    fieldValue
  );

  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }

    if (!check) {
      errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (!check) {
        errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(" "));
      }
    }
  }
};

var checkWorkflowNameField = function(
  errorArray,
  required,
  fieldValue,
  fieldName
) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (fieldValue.length < 3) {
      errorArray.push(
        [fieldName, errorMessages.minLengthMsg(WORKFLOW_MIN_LENGTH)].join(" ")
      );
      return;
    }
    if (!validateWorkflowName(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (fieldValue.length < WORKFLOW_MIN_LENGTH) {
        errorArray.push([fieldName, errorMessages.minLengthMsg(3)].join(" "));
        return;
      }
      if (!validateName(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(" "));
      }
    }
  }
};

var checkPhoneField = function(errorArray, required, fieldValue, fieldName) {
  console.log(`checking ${fieldName} : ${fieldValue}`);
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (fieldValue.length < 5) {
      errorArray.push([fieldName, errorMessages.minLengthMsg(5)].join(" "));
      return;
    }
    if (!validatePhone(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidPhoneMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (fieldValue.length < 5) {
        errorArray.push([fieldName, errorMessages.minLengthMsg(5)].join(" "));
        return;
      }
      if (!validatePhone(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidPhoneMsg].join(" "));
      }
    }
  }
};

var checkCountryCityStateField = function(
  errorArray,
  required,
  fieldValue,
  fieldName
) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (!validateCountryName(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCountryMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (!validateCountryName(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCountryMsg].join(" "));
      }
    }
  }
};

var checkZipField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (!validateZip(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidZipMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (!validateZip(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidZipMsg].join(" "));
      }
    }
  }
};

var checkStreetField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (!validateStreet(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidStreetMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (!validateStreet(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidStreetMsg].join(" "));
      }
    }
  }
};

var checkJobPositionField = function(errorArray, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
    }
  }
};
var checkRequireField = function(errorArray, fieldValue, fieldName) {
  if (!fieldValue) {
    errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
  }
};

var checkEmailField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (!validateEmail(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidEmailMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (!validateEmail(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidEmailMsg].join(" "));
      }
    }
  }
};

var checkNotesField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      }
    }
  }
};

var checkMoneyField = function(errorArray, required, fieldValue, fieldName) {
  if (required) {
    if (!fieldValue) {
      errorArray.push([fieldName, errorMessages.requiredMsg].join(" "));
      return;
    }
    if (hasInvalidChars(fieldValue)) {
      errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
      return;
    }
    if (!validateMoneyAmount(fieldValue)) {
      errorArray.push(
        [fieldName, errorMessages.invalidMoneyAmountMsg].join(" ")
      );
    }
  } else {
    if (fieldValue) {
      if (hasInvalidChars(fieldValue)) {
        errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(" "));
        return;
      }
      if (!validateMoneyAmount(fieldValue)) {
        errorArray.push(
          [fieldName, errorMessages.invalidMoneyAmountMsg].join(" ")
        );
      }
    }
  }
};

var checkPasswordField = function(errorArray, required, fieldValue, fieldName) {
  var passReqExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
  var WEAK_PASS_MESSAGE =
    "Weak password. Password should be 8 symbols minimum and contain at least 1 upper case letter, 1 " +
    "lower case letter, 1 digit and one special symbol";

  if (!fieldValue) {
    // errorArray.push([fieldName, errorMessages.requiredMsg].join(' '));
    errorArray[0] = [fieldName, errorMessages.requiredMsg].join(" ");
    return;
  }

  if (!passReqExp.test(fieldValue)) {
    // errorArray.push([fieldName, WEAK_PASS_MESSAGE].join(' '));
    errorArray[0] = [fieldName, WEAK_PASS_MESSAGE].join(" ");
    return;
  }

  // if (hasInvalidChars(fieldValue)) {
  //     errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(' '));
  //     return;
  // }
  // if (fieldValue.length < 3) {
  //     errorArray.push([fieldName, errorMessages.minLengthMsg(3)].join(' '));
  //     return;
  // }
  // if (!validatePass(fieldValue)) {
  //     errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(' '));
  // }
  // }
  // else {
  //     if (fieldValue) {
  //         if (hasInvalidChars(fieldValue)) {
  //             errorArray.push([fieldName, errorMessages.invalidCharsMsg].join(' '));
  //             return;
  //         }
  //         if (fieldValue.length < 3) {
  //             errorArray.push([fieldName, errorMessages.minLengthMsg(3)].join(' '));
  //             return;
  //         }
  //         if (!validatePass(fieldValue)) {
  //             errorArray.push([fieldName, errorMessages.invalidLoginMsg].join(' '));
  //         }
  //     }
  // }
};

var comparePasswords = function(errorArray, password, confirmPass) {
  if (password && confirmPass) {
    if (password !== confirmPass) {
      errorArray.push(errorMessages.passwordsNotMatchMsg);
    }
  }
};

var checkFirstDateIsGreater = function(
  errorArray,
  greaterDate,
  greaterDateName,
  smallerDate,
  smallerDateName
) {
  if (new Date(greaterDate) < new Date(smallerDate)) {
    errorArray.push(
      smallerDateName + " can not be greater than " + greaterDateName
    );
  }
};

var checkForPositiveValue = function(errorArray, fieldValue, fieldName) {
  if (fieldValue < 0) {
    errorArray.push([fieldName, errorMessages.mustToBePositive].join(" "));
  }
};

var checkForOnlyNumber = function(errorArray, fieldValue, fieldName) {
  if (isNaN(+fieldValue)) {
    errorArray.push([fieldName, errorMessages.mustToBeOnlyNubmer].join(" "));
  }
};

var loginCharNotValid = function(char) {
  return !char.match(loginCharRegex);
};

var isOfRange = function(errorArray, fieldValue, fieldName, start, end) {
  if (!end && fieldValue < start) {
    return errorArray.push(
      [fieldName, errorMessages.isOutOfRange + start + " - infinity"].join(" ")
    );
  }

  if (fieldValue < start || fieldValue > end) {
    errorArray.push(
      [fieldName, errorMessages.isOutOfRange + start + " - " + end].join(" ")
    );
  }
};

export default {
  comparePasswords: comparePasswords,
  checkPasswordField: checkPasswordField,
  checkLoginField: checkLoginField,
  checkMoneyField: checkMoneyField,
  checkFirstDateIsGreater: checkFirstDateIsGreater,
  checkNotesField: checkNotesField,
  checkEmailField: checkEmailField,
  checkStreetField: checkStreetField,
  checkZipField: checkZipField,
  checkCountryCityStateField: checkCountryCityStateField,
  checkPhoneField: checkPhoneField,
  checkNameField: checkNameField,
  checkPresent: checkPresent,
  checkGroupsNameField: checkGroupsNameField,
  validEmail: validateEmail,
  withMinLength: requiredFieldLength,
  validLoggedValue: validateLoggedValue,
  errorMessages: errorMessages,
  checkNumberField: checkNumberField,
  validStreet: validateStreet,
  validPhone: validatePhone,
  validName: validateName,
  validGroupsName: validateGroupsName,
  validMoneyAmount: validateMoneyAmount,
  checkLogedField: checkLogedField,
  checkWorkflowNameField: checkWorkflowNameField,
  checkSkypeField: checkSkypeField,
  checkPriceField: checkPriceField,
  checkJobPositionField: checkJobPositionField,
  checkDateField: checkDateField,
  checkUrl: checkUrl,
  checkForPositiveValue: checkForPositiveValue,
  checkForOnlyNumber: checkForOnlyNumber,
  checkFacebookSocial: checkFacebookSocial,
  checkLinkedinSocial: checkLinkedinSocial,
  isOfRange: isOfRange,

  loginCharNotValid: loginCharNotValid,
  checkRequireField
};
