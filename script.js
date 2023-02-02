const result = document.getElementById("inputext");

const calculate = (number) => {
  result.value += number;
};

const Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    result.value = "Undefined";
  }
};

function allClear() {
  result.value = " ";
}

function Delete() {
  result.value = result.value.slice(0, -1);
}
