let numsArr = [0,1,2,3,4,5,6,7,8,9]

let numsArrTwo = [0,1,2,3,4,0]

const addToZero = (arr) => {

    for ( let i = 0; i < arr.length; i ++) {
        for ( let k = i + 1; k < arr.length; k ++) {
            let sum = arr[i] + arr[k]
            if ( sum === 0) {
                return true
            }
        }
    }
    return false

}
console.log(addToZero(numsArr))


////// I bleive the runtime of this code to be O(n^2) because in my limited understanding it is using a nested loop, 
////// and the length for it to run should techinally be unknown?
/// space complexity  O(n)



let chars = 'Monday'

let charsTwo = "Moonday"

const hasUniqueChars = (str) => {
    
    for ( let i = 0; i < str.length; i ++) {
        
        for ( let k = i + 1; k < str.length; k ++) {

            if ( str[i] === str[k]) {

                return false
            }
            
        }
    }
    return true
}

console.log(hasUniqueChars(chars))

///// I blelieve the runtime to be runtime to be O(n^2)
//// space complexity O(n)


let testPangram = "The quick brown fox jumps over the lazy dog!"  // should be true

let testPangramTwo = "I like cats, but not mice" /// should be false

const isPangram = (str) => {

    let newStr = str.toLowerCase()
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for ( let i = 0; i < alphabet.length; i ++) {

        if ( newStr.indexOf(alphabet[i])  < 0) {

            return false
        }

    }

    return true

}

console.log(isPangram(testPangramTwo))

/// I want to say this functions runtime is O(n), in my understanding because it's using a loop where
/// the end limit is based on the lenght of the string being passed in.
/// space complexity O(n)


let testWords = ['hi', 'hello']

let testWordsTwo = ['the', 'ocean', 'is', 'massive']

const findLongestWord = (arr) => {

    let wordLength = 0

    let longestWord

    for ( let i = 0; i < arr.length; i ++) {
        
        if ( arr[i].length > wordLength) {

            wordLength = arr[i].length

            longestWord = arr[i]
        }
    }

    return longestWord.length

}

console.log(findLongestWord(testWordsTwo))

/// I believe the runtime of this is O(n)
/// space complexity O(n)