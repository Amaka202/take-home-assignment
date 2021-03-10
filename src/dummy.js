// let output = input.replace(/\s\s+/g, ' ')
    
     let output = input.replace(/  +/g, ' ').trim().split(' ').map((value, index, array) => {
      if (!array.currentLineLength) {
        array.currentLineLength = 0
      }

      array.currentLineLength += value.length+1;
      if (array.currentLineLength > 80) {
          array.currentLineLength = value.length;
          return "\n" + value;
      }
      return value;
  }).join(' ')

  // let output = input.replace(/  +/g, ' ').trim()

  // let output = input.split(/(?:,| )+/)

  // let output = input.replace(/(\r\n|\n|\r)/gm, "")

  // let output = input.replace(/\s+/g, ' ').trim()

  // let reg = /\n\n/;

  // var EOL = input.match(/\r\n/gm)?"\r\n":"\n";
  // var regExp = new RegExp("("+EOL+"){3,}", "gm");

  // input.replace(regExp, EOL+EOL)