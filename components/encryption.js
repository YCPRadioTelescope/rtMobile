class AES {
    // Encrypt the given string using AES 128 and our key
    // Not yet implemented
    // Looking into react-native-aes-crypto
    static Encrypt(plainText, key) {
        return('encrypted text');
    }

    // Insert a random ASCII character in all ODD positions of the string
    static Lace(text) {
        let laced = "";
        for (let x = 0; x < text.length; x++) {
            let randChar = ((Math.random()).toString(36).substr(5, 1));
            laced += text[x] + randChar;
        }
        return laced;
    }

    // Prepends date/timestamp to command
    static generateTimestamp(text) {
        // we use date1 with .toLocaleString() to get the month
        // we use date2 with .toString() to get the day, year, and time
        // we can't use date 1 for everything because the day format changes, ie: "9" then "10", messing up character locations
        // we can't use date 2 for everything because it returns the year as "Nov" instead of "11", for example
        const date1 = new Date().toLocaleString();
        const date2 = new Date().toString();

        // set each part of the timestamp with substrings of Date()
        const MM = date1.substr(0, 2);
        const dd = date2.substr(8, 2);
        const yy = date2.substr(13, 2);
        const time = date2.substr(16, 8);

        // set full timestamp
        const timestamp = MM + "/" + dd + "/" + yy + " " + time;

        // return text with prepended timestamp
        return timestamp + "," + text;
    }
}

module.export = AES;
