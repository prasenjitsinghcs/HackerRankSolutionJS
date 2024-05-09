let NA = ".";
NA = NA.padStart(15, " ").padEnd(15, " ");
var date = new Date("1970-01-01");
// loshuGrid(date);
var index = 365 * 500;
while(index > 0) {
  date = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  var out = loshuGrid(date);
  index--;
}

function loshuGrid(date) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var dateStr = parseInt(day + "" + month + "" + year);
  var driver = digSum(dateStr);
  var conductor = digSum(day);
  
  var num = dateStr + "" + driver + "" + conductor;
  
  num = num.split("");
    
  var map = {};
  
  num.forEach(item => {
    if (item > 0) {
      if (!map[item]) {
         map[item] = 1;
      } else {
         map[item] = map[item] + 1;
      }
    }
  });
    
  var grid = {};
  
  for (var i = 1; i < 10; i++) {
    if (map[i]) {
      let str = (i + " ").toString().repeat(map[i]).padStart(15, " ").padEnd(15, " ");
      // str = str.trim();
      grid[i] = str;
    } else {
      grid[i] = NA;
    }
  }

  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  var str = "";

  if (isGold(grid) && isSilver(grid) && isThought(grid) && isMental(grid)) {
    // console.log(`<===========================[  ${dd}-${mm}-${yyyy}  ]==========================>`);
    // diplayGrid(grid);
    console.log(`${dd}-${mm}-${yyyy}`);
  }


  return;



  if (isGold(grid)) {
    console.log('Gold - You have your own house');
  }
  if(isSilver(grid)) {
    console.log(`Silver - good fortune`);
  }
  if (isWill(grid)) {
    console.log(`You have strong will power`);
  } 
  if (isAction(grid)) {
    console.log(`You believe in taking action instead of thinking.`);
  }
  if (isPractical(grid)) {
    console.log(`You are very practical in your life.`);
  }
  if (isThought(grid)) {
    console.log(`Your thoughts are strong and helps you in taking the decesion`);
  }
  if (isHealth(grid)) {
    console.log(`You have good health`);
  }
  if(isMental(grid)) {
    console.log(`You have sharp mind, no one can make you fool`);
  }
  if(isWealth(grid)) {
    console.log(`You have good wealth and cash flow`);
  }
  if(isLove(grid)) {
    console.log(`You are loving nature`);
  }
  if(isFrienly(grid)) {
    console.log(`You have many frinds, you are friedly in nature`);
  }

  console.log(`<-------------------------------------------------------------------->`)
}

function isGold(grid) {
  if (grid[4] != NA && grid[5] != NA && grid[6] != NA) {
    return true;
  }
  return false;
}

function isSilver(grid) {
  if (grid[2] != NA && grid[5] != NA && grid[8] != NA) {
    return true;
  }
  return false;
}

function isWill(grid) {
  if (grid[9] != NA && grid[5] != NA && grid[1] != NA) {
    return true;
  }
  return false;
}

function isAction(grid) {
  if (grid[2] != NA && grid[6] != NA && grid[7] != NA) {
    return true;
  }
  return false;
}

function isThought(grid) {
  if (grid[4] != NA && grid[3] != NA && grid[8] != NA) {
    return true;
  }
  return false;
}

function isHealth(grid) {
  if (grid[3] != NA && grid[5] != NA && grid[7] != NA) {
    return true;
  }
  return false;
}

function isPractical(grid) {
  if (grid[8] != NA && grid[1] != NA && grid[6] != NA) {
    return true;
  }
  return false;
}

function isMental(grid) {
  if (grid[4] != NA && grid[9] != NA && grid[2] != NA) {
    return true;
  }
  return false;
}

function isWealth(grid) {
  if (grid[4] != NA) {
    return true;
  }
  return false;
}

function isLove(grid) {
  if (grid[2] != NA) {
    return true;
  }
  return false;
}

function isFrienly(grid) {
  if (grid[6] != NA) {
    return true;
  }
  return false;
}

function digSum(n) {
    var sum = 0;
    
    // Loop to do sum while
    // sum is not less than
    // or equal to 9
    while(n > 0 || sum > 9) {
        if(n === 0) {
            n = sum;
            sum = 0;
        }
        sum += n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}

function diplayGrid(grid) {
  console.log(`${grid[4]}\t|\t${grid[9]}\t|\t${grid[2]}\n`);
  console.log(`${grid[3]}\t|\t${grid[5]}\t|\t${grid[7]}\n`);
  console.log(`${grid[8]}\t|\t${grid[1]}\t|\t${grid[6]}\n`);
}

