module.exports = function check(str, bracketsConfig) {
    var newArr = str.split('');

    if (newArr.length % 2) return false;
    for (var i = 0; i < newArr.length; i++) {

        var newIterator; // This variable will help us move forvard to find closing bracket

        if (newIterator == newArr.length - 1) break;

        for (var j = 0; j < bracketsConfig.length; j++) {
            if (newArr[i] != bracketsConfig[j][0]) continue; // Here, we are searching a matching subarray

            if (i == newArr.length - 1) return false; // If we are here, it means that we have an unused bracket at the end of the array "newArr"
            newIterator = i + 1;

            if (newArr[newIterator] == null) {
                while (newArr[newIterator] == null) newIterator++; // Here, we go as far as nessesary for finding a new bracket
            }

            if (newArr[newIterator] == bracketsConfig[j][1]) {
                newArr[i] = null; // Here, we mark an used opening bracket

                newArr[newIterator] = null; //Here, we mark an used closing bracket

                if (newIterator == newArr.length - 1) break;

                while ((newArr[i] == null) && (i != 0)) i--; // Here, we go back to work with an unused exernal bracket
                i--;
                break;
            }
        }
    }
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] != null) return false; // If we have an unsued bracket, then we return false
    }
    return true;
}
