export default function legalizeClassName(badName) {
  let goodName;
  switch (badName) {
    case "1":
      goodName = "one";
      break;
    case "2":
      goodName = "two";
      break;
    case "3":
      goodName = "three";
      break;
    case "4":
      goodName = "four";
      break;
    case "5":
      goodName = "five";
      break;
    case "6":
      goodName = "six";
      break;
    case "7":
      goodName = "seven";
      break;
    case "8":
      goodName = "eight";
      break;
    case "9":
      goodName = "nine";
      break;
    case "0":
      goodName = "zero";
      break;
    case "-":
      goodName = "dash";
      break;
    case "=":
      goodName = "equals";
      break;
    case ".":
      goodName = "period";
      break;
    case ",":
      goodName = "comma";
      break;
    case "]":
      goodName = "rightbracket";
      break;
    case "[":
      goodName = "leftbracket";
      break;
    case "`":
      goodName = "tick";
      break;
    case ";":
      goodName = "semicolon";
      break;
    case "'":
      goodName = "apost";
      break;
    case "\\":
      goodName = "backslash";
      break;
    case "/":
      goodName = "forwardslash";
      break;
    default:
      goodName = badName;
  }
  return goodName;
}
