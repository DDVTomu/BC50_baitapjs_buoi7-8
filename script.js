console.log("Hello");
var arr = [];
var arr2 = [];
var arr3 = [];
function pushArray() {
  const val = document.getElementById("arrayNum").value * 1;
  arr.push(val);
  document.getElementById("viewArray").innerHTML = arr;
}

function totalNumArray() {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  document.getElementById("viewTotalNum").innerHTML = sum;
}

function countNumArray() {
  let count = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count.push(arr[i]);
    }
  }
  document.getElementById("viewCount").innerHTML = count.length;
  return count;
}

function minNum() {
  const val = arr[0];
  let min = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < val) {
      min = arr[i];
    }
  }
  document.getElementById("minNum").innerHTML = min;
}

function minNumAlt() {
  var total = countNumArray();
  var min = 0;

  for (i = 1; i < total.length; i++) {
    if (total[i] < total[0]) {
      min = total[i];
    } else {
      min = -1;
    }
  }

  document.getElementById("minNumAlt").innerHTML = min;
}

function evenNum() {
  var min = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      min = arr[i];
    }
  }
  document.getElementById("evenNum").innerHTML = min;
}

function swapArr() {
  let swap = 0;
  const a = document.getElementById("indexNumA").value * 1;
  const b = document.getElementById("indexNumB").value * 1;

  swap = arr[a];
  arr[a] = arr[b];
  arr[b] = swap;

  document.getElementById("swapArr").innerHTML = arr;
}

function arrange() {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var z = "";
      if (arr[i] > arr[j]) {
        z = arr[j];
        arr[j] = arr[i];
        arr[i] = z;
      }
    }
  }
  console.log(arr);
  document.getElementById("arrange").innerHTML = arr;
}

function primeChck(arr) {
  if (arr < 2) {
    return true;
  } else {
    for (var i = 2; i <= Math.sqrt(arr); i++) {
      if (arr % 2 == 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function prime() {
  var prime = -1;
  for (var i = 0; i < arr.length; i++) {
    if (primeChck(arr[i])) {
      prime = arr[i];
      break;
    }
  }
  document.getElementById("prime").innerHTML = prime;
}

function pushArrayFloat() {
  const val = document.getElementById("arrayNumFloat").value * 1;
  arr2.push(val);
  document.getElementById("viewArrayFloat").innerHTML = arr2;
}

function checkFloat() {
  var count = 0;
  for (var i = 0; i < arr2.length; i++) {
    if (Number.isInteger(arr2[i])) {
      count++;
    }
  }
  document.getElementById("viewFloat").innerHTML = count;
}

function pushArrayCheck() {
  const val = document.getElementById("arrayNumCheck").value * 1;
  arr3.push(val);
  document.getElementById("viewArrayCheck").innerHTML = arr3;
}

function checkComp(pos, neg) {
  var check = "";
  if (pos > neg) {
    check = "Dương lớn hơn âm";
  } else if (pos < neg) {
    check = "Dương nhỏ hơn âm";
  } else if (pos == neg) {
    check = "2 chuỗi bằng nhau";
  }

  return check;
}

function compare() {
  var neg = [];
  var pos = [];
  for (var i = 0; i < arr3.length; i++) {
    if (Number.isInteger(arr3[i])) {
      if (arr3[i] >= 0) {
        pos.push(arr3[i]);
      } else if (arr3[i] < 0) {
        neg.push(arr3[i]);
      }
    }
  }

  document.getElementById("viewCompare").innerHTML = checkComp(pos.length, neg.length);
}
