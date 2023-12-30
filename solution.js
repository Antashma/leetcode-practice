var groupAnagrams = function(strs) {

    /* 
    go through each work in strs
    check if word has the same letters
    keep track in dict
    {
        aet: [eat, tea, ate],
        ant: [tan, nat],
        abt: [bat]
   
    }
    - first round will always add first word to dict
    - following will check if any keys hold values of letters in next string
    - ex. tea had e, a, t to will add to eat key
    - next is tan, there is no 'n' in eat so will add new key
    - and repeat until end of word list
    - from resulting dict, create array with subbarrays from key values
    - return that array
    */
    const dict = {};
    for (let i = 0; i < strs.length;i++) {
        const currWord = strs[i];
        const sortedWord = currWord.split("").sort().join("");
        if (!dict[sortedWord]) {         
            dict[sortedWord] = [currWord];
        } else {
            dict[sortedWord].push(currWord);
        }
        
    }

    const result = [];
    for (key in dict) {
        result.push(dict[key])
    }

   return result;
};