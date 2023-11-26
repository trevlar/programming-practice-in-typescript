export function canConstruct(ransomNote: string, magazine: string): boolean {
    let letterMatchCount = 0;
    // loop through letters in ransomNote.
    for (let letter of ransomNote) {
        const charMatchIndex = magazine.indexOf(letter);
        // Check that magazine has letter in ransomNote
        if (charMatchIndex > -1) {
            letterMatchCount++;
            // If so replace letter with empty spot in magazine and add count to resultCount
            magazine = magazine.replace(letter, '');
        } else {
            // If no match return false.
            return false;
        }

        if (letterMatchCount === ransomNote.length) {
            return true;
        }
    }
}
