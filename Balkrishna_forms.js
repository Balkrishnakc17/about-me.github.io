function arithmeticCalculator(event) {
  event.preventDefault();

  let num1 = Number(document.getElementById("Num1").value);
  let num2 = Number(document.getElementById("Num2").value);
  let operation = document.querySelector('input[name="operation"]:checked').value;

  let result;

  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else if (operation === "divide") {
    if (num2 === 0) {
      alert("You cannot divide by zero.");
      return;
    }
    result = num1 / num2;
  }

  alert("The result is: " + result);
}

function factorialCalculator(event) {
  event.preventDefault();

  let number = Number(document.getElementById("factorialNumber").value);

  if (number < 0) {
    alert("Please enter a positive integer.");
    return;
  }

  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }

  alert(number + "! = " + factorial);
}

function fibonacciCalculator(event) {
  event.preventDefault();

  let n = Number(document.getElementById("fibcNum").value);

  if (n < 0) {
    alert("Please enter a positive number.");
    return;
  }

  let first = 0;
  let second = 1;
  let result = 0;

  if (n === 0) {
    result = 0;
  } else if (n === 1) {
    result = 1;
  } else {
    for (let i = 2; i <= n; i++) {
      result = first + second;
      first = second;
      second = result;
    }
  }

  alert("The Fibonacci number at position " + n + " is: " + result);
}

function rangeCalculator(event) {
  event.preventDefault();

  let num1 = Number(document.getElementById("rangeNum1").value);
  let num2 = Number(document.getElementById("rangeNum2").value);
  let num3 = Number(document.getElementById("rangeNum3").value);

  let maximum = Math.max(num1, num2, num3);
  let minimum = Math.min(num1, num2, num3);
  let range = maximum - minimum;

  alert(
    "Maximum Number: " + maximum +
    "\nMinimum Number: " + minimum +
    "\nRange: " + range
  );
}

function mailingList(event) {
  event.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let zipCode = document.getElementById("zipCode").value;

  let outputString =
    "<p><b>Name:</b> " + firstName + " " + lastName + "<br>" +
    "<b>Email:</b> " + email + "<br>" +
    "<b>ZIP Code:</b> " + zipCode + "</p><hr>";

  document.getElementById("mailingOutput").innerHTML += outputString;
}
