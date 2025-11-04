function runProgram(event) {
  event.preventDefault();
  const choice = document.getElementById("option").value;
  const output = document.getElementById("d1");
  output.innerHTML = "";
  let n = parseInt(document.getElementById("n").value || 0);

  // ✅ PRIME CHECK
  if (choice === "prime") {
    if (n <= 1) {
      output.innerHTML = `<p class='alert alert-warning'>${n} is neither Prime nor Composite ⚠️</p>`;
    } else {
      let isPrime = true;
      for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }
      output.innerHTML = isPrime
        ? `<p class='alert alert-success'>${n} → Prime ✅</p>`
        : `<p class='alert alert-danger'>${n} → Composite ❌</p>`;
    }
  }

  // ✅ PALINDROME CHECK
  else if (choice === "palindrome") {
    let rev = 0,
      tmp = n;
    while (tmp !== 0) {
      rev = rev * 10 + (tmp % 10);
      tmp = Math.floor(tmp / 10);
    }
    output.innerHTML =
      rev === n
        ? `<p class='alert alert-success'>${n} == ${rev} → Palindrome ✅</p>`
        : `<p class='alert alert-danger'>${n} != ${rev} → Not Palindrome ❌</p>`;
  }

  // ✅ ARMSTRONG CHECK
  else if (choice === "armstrong") {
    let tmp = n,
      sum = 0;
    const digits = String(n).length;
    while (tmp > 0) {
      let d = tmp % 10;
      sum += Math.pow(d, digits);
      tmp = Math.floor(tmp / 10);
    }
    output.innerHTML =
      sum === n
        ? `<p class='alert alert-success'>${n} → Armstrong ✅</p>`
        : `<p class='alert alert-danger'>${n} → Not Armstrong ❌</p>`;
  }

  // ✅ MAGIC NUMBER CHECK (10–99)
  else if (choice === "magic") {
    if (n >= 10 && n <= 99) {
      let sum = n;
      while (sum > 9) {
        let s = 0;
        while (sum > 0) {
          s += sum % 10;
          sum = Math.floor(sum / 10);
        }
        sum = s;
      }
      output.innerHTML =
        sum === 1
          ? `<p class='alert alert-success'>${n} → Magic Number ✅</p>`
          : `<p class='alert alert-danger'>${n} → Not a Magic Number ❌</p>`;
    } else {
      output.innerHTML = `<p class='alert alert-secondary'>${n} is out of Magic range (10–99)</p>`;
    }
  }

  // ✅ PATTERN 1: PYRAMID
  else if (choice === "pyramid") {
    for (let i = 0; i <= 3; i++) {
      for (let k = 3; k >= i; k--) output.innerHTML += "&nbsp;";
      for (let j = 1; j <= 2 * i + 1; j++) output.innerHTML += "*";
      output.innerHTML += "<br/>";
    }
  }

  // ✅ PATTERN 2: INCREASING TRIANGLE
  else if (choice === "triangle1") {
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= i; j++) output.innerHTML += "*";
      output.innerHTML += "<br/>";
    }
  }

  // ✅ PATTERN 3: DECREASING TRIANGLE
  else if (choice === "triangle2") {
    for (let i = 0; i <= 3; i++) {
      for (let j = 3; j >= i; j--) output.innerHTML += "*";
      output.innerHTML += "<br/>";
    }
  }

  // ✅ PATTERN 4: RIGHT-ALIGNED TRIANGLE
  else if (choice === "rightalign") {
    for (let i = 0; i <= 3; i++) {
      for (let k = 3; k >= i; k--) output.innerHTML += "&nbsp;";
      for (let j = 0; j <= i; j++) output.innerHTML += "*";
      output.innerHTML += "<br/>";
    }
  }

  // ✅ DEFAULT
  else {
    output.innerHTML = `<p class='alert alert-warning'>Please select a valid option ⚠️</p>`;
  }
}

function resetField() {
  document.getElementById("d1").innerHTML = "";
  document.getElementById("n").value = "";
  document.getElementById("option").selectedIndex = 0;
  document.getElementById("n").focus();
}
