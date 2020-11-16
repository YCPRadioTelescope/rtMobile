class AES {
    // Encrypt the given text using our key and iv
    // Pass iv in as parameter when that is figured out
    static Encrypt(plainText, key) {
        const aes = require('aes-js');
        const textBytes = aes.utils.utf8.toBytes(plainText);
        // use ofb when iv is added as parameter of function
        //const aesOfb = new aes.ModeOfOperation.ofb(key, iv);
        const aesCtr = new aes.ModeOfOperation.ctr(key);
        const encryptedBytes = aesCtr.encrypt(textBytes);

        return encryptedBytes;
    }

    // Decrypt the given text using our key and iv
    // Pass iv in as parameter when that is figured out
    static Decrypt(encryptedText, key) {
        const aes = require('aes-js');
        // use ofb when iv is added as parameter of function
        //const aesOfb = new aes.ModeOfOperation.ofb(key, iv);
        const aesCtr = new aes.ModeOfOperation.ctr(key);
        const decryptedBytes = aesCtr.decrypt(encryptedText);
        const plainText = aes.utils.utf8.fromBytes(decryptedBytes);

        return plainText;
    }

    // Insert a random ASCII character in all ODD positions of the string
    static Lace(text) {
        let laced = "";
        for (let i = 0; i < text.length; i++) {
            let randChar = ((Math.random()).toString(36).substr(5, 1));
            laced += text[i] + randChar;
        }
        return laced;
    }

    // Remove the interlaced random characters
    static UnLace(text) {
        let unlaced = "";
        for (let i = 0; i < text.length; i += 2) {
            unlaced += text[i];
        }
        return unlaced;
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

    // Remove the prepended timestamp
    // This does NOT test for a valid recent date/time because we don't need that on our end
    // This is just mainly for testing
    static removeTimestamp (text) {
        return text.substr(18, text.length - 18)
    }
}

export default AES;
