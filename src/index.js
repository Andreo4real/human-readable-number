module.exports = function toReadable (number) {
    let num = number.toString().split('');
    let a = number % 100
    let b = a % 10
    let result = []

    if (number >= 100) {
        switch (num[0]) {
            case '1': result.push('one hundred');
            break;
            case '2': result.push('two hundred');
            break;
            case '3': result.push('three hundred');
            break;
            case '4': result.push('four hundred');
            break;
            case '5': result.push('five hundred');
            break;
            case '6': result.push('six hundred');
            break;
            case '7': result.push('seven hundred');
            break;
            case '8': result.push('eight hundred');
            break;
            case '9': result.push('nine hundred');
            break;
        }
            if (a == 0) {
                return result[0]
            }


                if (0 <= a <= 19) {
                    switch (a) {
                        case 0: result.push('zero');
                        break;
                        case 1: result.push('one');
                        break;
                        case 2: result.push('two');
                        break;
                        case 3: result.push('three');
                        break;
                        case 4: result.push('four');
                        break;
                        case 5: result.push('five');
                        break;
                        case 6: result.push('six');
                        break;
                        case 7: result.push('seven');
                        break;
                        case 8: result.push('eight');
                        break;
                        case 9: result.push('nine');
                        break;
                        case 10: result.push('ten');
                        break;
                        case 11: result.push('eleven');
                        break;
                        case 12: result.push('twelve');
                        break;
                        case 13: result.push('thirteen');
                        break;
                        case 14: result.push('fourteen');
                        break;
                        case 15: result.push('fifteen');
                        break;
                        case 16: result.push('sixteen');
                        break;
                        case 17: result.push('seventeen');
                        break;
                        case 18: result.push('eighteen');
                        break;
                        case 19: result.push('nineteen');
                        break;
                    }
                }

                if (b == 0 && a > 0) {
                    switch(num[1]) {
                        case '2': result.push('twenty');
                        break;
                        case '3': result.push('thirty');
                        break;
                        case '4': result.push('forty');
                        break;
                        case '5': result.push('fifty');
                        break;
                        case '6': result.push('sixty');
                        break;
                        case '7': result.push('seventy');
                        break;
                        case '8': result.push('eighty');
                        break;
                        case '9': result.push('ninety');
                        break;
                    }
                }

                if (a > 19 & b != 0) {
                    switch (num[1]) {
                        case '2': result.push('twenty');
                        break;
                        case '3': result.push('thirty');
                        break;
                        case '4': result.push('forty');
                        break;
                        case '5': result.push('fifty');
                        break;
                        case '6': result.push('sixty');
                        break;
                        case '7': result.push('seventy');
                        break;
                        case '8': result.push('eighty');
                        break;
                        case '9': result.push('ninety');
                        break;
                    }
                    switch (num[2]) {
                        case '1': result.push('one');
                        break;
                        case '2': result.push('two');
                        break;
                        case '3': result.push('three');
                        break;
                        case '4': result.push('four');
                        break;
                        case '5': result.push('five');
                        break;
                        case '6': result.push('six');
                        break;
                        case '7': result.push('seven');
                        break;
                        case '8': result.push('eight');
                        break;
                        case '9': result.push('nine');
                        break;
                    }
                }   
        }

        if (number <= 19) {
            switch (a) {
                case 0: result.push('zero');
                break;
                case 1: result.push('one');
                break;
                case 2: result.push('two');
                break;
                case 3: result.push('three');
                break;
                case 4: result.push('four');
                break;
                case 5: result.push('five');
                break;
                case 6: result.push('six');
                break;
                case 7: result.push('seven');
                break;
                case 8: result.push('eight');
                break;
                case 9: result.push('nine');
                break;
                case 10: result.push('ten');
                break;
                case 11: result.push('eleven');
                break;
                case 12: result.push('twelve');
                break;
                case 13: result.push('thirteen');
                break;
                case 14: result.push('fourteen');
                break;
                case 15: result.push('fifteen');
                break;
                case 16: result.push('sixteen');
                break;
                case 17: result.push('seventeen');
                break;
                case 18: result.push('eighteen');
                break;
                case 19: result.push('nineteen');
                break;
            }
        }

        if (number >= 20 && number <= 99) {
            switch (num[0]) {
                case '2': result.push('twenty');
                break;
                case '3': result.push('thirty');
                break;
                case '4': result.push('forty');
                break;
                case '5': result.push('fifty');
                break;
                case '6': result.push('sixty');
                break;
                case '7': result.push('seventy');
                break;
                case '8': result.push('eighty');
                break;
                case '9': result.push('ninety');
                break;
            }
            switch (num[1]) {
                case '1': result.push('one');
                break;
                case '2': result.push('two');
                break;
                case '3': result.push('three');
                break;
                case '4': result.push('four');
                break;
                case '5': result.push('five');
                break;
                case '6': result.push('six');
                break;
                case '7': result.push('seven');
                break;
                case '8': result.push('eight');
                break;
                case '9': result.push('nine');
                break;
            }
        }

        return result.join(' ');

}


















/* let a = number.toString().split('');
let result = []
if (a.length === 1) {
  switch (number) {
      case 0: result.push('zero');
      break;
      case 1: result.push('one');
      break;
      case 2: result.push('two');
      break;
      case 3: result.push('three');
      break;
      case 4: result.push('four');
      break;
      case 5: result.push('five');
      break;
      case 6: result.push('six');
      break;
      case 7: result.push('seven');
      break;
      case 8: result.push('eight');
      break;
      case 9: result.push('nine');
      break;
  }
} else
  if (a.length === 2) {
      if (number % 10 == 0) {
          switch (number) {
              case 10: result.push('ten');
              break;
              case 20: result.push('twenty');
              break;
              case 30: result.push('thirty');
              break;
              case 40: result.push('forty');
              break;
              case 50: result.push('fifty');
              break;
              case 60: result.push('sixty');
              break;
              case 70: result.push('seventy');
              break;
              case 80: result.push('eighty');
              break;
              case 90: result.push('ninety');
              break;
          }
      } else
          if (10 <= number <= 19) {
              switch (number) {
                  case 11: result.push('eleven');
                  break;
                  case 12: result.push('twelve');
                  break;
                  case 13: result.push('thirteen');
                  break;
                  case 14: result.push('fourteen');
                  break;
                  case 15: result.push('fifteen');
                  break;
                  case 16: result.push('sixteen');
                  break;
                  case 17: result.push('seventeen');
                  break;
                  case 18: result.push('eighteen');
                  break;
                  case 19: result.push('nineteen');
                  break;
              }
          } else
               { switch (a[0]) {
                  case '2': result.push('twenty');
                  break;
                  case '3': result.push('thirty');
                  break;
                  case '4': result.push('forty');
                  break;
                  case '5': result.push('fifty');
                  break;
                  case '6': result.push('sixty');
                  break;
                  case '7': result.push('seventy');
                  break;
                  case '8': result.push('eighty');
                  break;
                  case '9': result.push('ninety');
                  break;
              }
                  switch (a[1]) {
                      case '1': result.push('one');
                      break;
                      case '2': result.push('two');
                      break;
                      case '3': result.push('three');
                      break;
                      case '4': result.push('four');
                      break;
                      case '5': result.push('five');
                      break;
                      case '6': result.push('six');
                      break;
                      case '7': result.push('seven');
                      break;
                      case '8': result.push('eight');
                      break;
                      case '9': result.push('nine');
                      break;
                  } }
          } else
              if (a.length === 3) {
                  if (number % 100 == 0) {
                      switch (number) {
                          case 100: result.push('one hundred');
                          break;
                          case 200: result.push('two hundred');
                          break;
                          case 300: result.push('three hundred');
                          break;
                          case 400: result.push('four hundred');
                          break;
                          case 500: result.push('five hundred');
                          break;
                          case 600: result.push('six hundred');
                          break;
                          case 700: result.push('seven hundred');
                          break;
                          case 800: result.push('eight hundred');
                          break;
                          case 900: result.push('nine hundred');
                          break;
                      }     
                  } else
                      if (number % 10 == 0) {
                          switch (a[1]) {
                              case '2': result.push('twenty');
                              break;
                              case '3': result.push('thirty');
                              break;
                              case '4': result.push('forty');
                              break;
                              case '5': result.push('fifty');
                              break;
                              case '6': result.push('sixty');
                              break;
                              case '7': result.push('seventy');
                              break;
                              case '8': result.push('eighty');
                              break;
                              case '9': result.push('ninety');
                              break;
                          }
                          switch (a[0]) {
                              case '1': result.push('one hundred');
                              break;
                              case '2': result.push('two hundred');
                              break;
                              case '3': result.push('three hundred');
                              break;
                              case '4': result.push('four hundred');
                              break;
                              case '5': result.push('five hundred');
                              break;
                              case '6': result.push('six hundred');
                              break;
                              case '7': result.push('seven hundred');
                              break;
                              case '8': result.push('eight hundred');
                              break;
                              case '9': result.push('nine hundred');
                              break;
                          }    
                      }
                  } */