import AES from '../src/encryption/encryption';
import React from "react";
const key_128 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// these test encrypting/decrypting, lacing/unlacing, timestamping/removing timestamp
// as well as combinations of those
test('encrypts/decrypts string', () => {
    const plainText = 'here is the plain text';
    const encryptedText = AES.Encrypt(plainText, key_128);
    const decryptedText = AES.Decrypt(encryptedText, key_128);
    // final should equal plaintext
    expect(decryptedText).toEqual(plainText);
});

test('encrypts/decrypts empty string', () => {
    const plainText = '';
    const encryptedText = AES.Encrypt(plainText, key_128);
    const decryptedText = AES.Decrypt(encryptedText, key_128);
    // final should equal plaintext
    expect(decryptedText).toEqual(plainText);
});

test('encrypts/decrypts random 20 character strings', () => {
    for (let i = 0; i < 10; i++) {
        const plainText = Math.random().toString(36).substr(0, 20)
        const encryptedText = AES.Encrypt(plainText, key_128);
        const decryptedText = AES.Decrypt(encryptedText, key_128);
        // final should equal plaintext
        expect(decryptedText).toEqual(plainText);
    }
});

test('laces/unlaces with random characters', () => {
    const plainText = 'here is the plain text';
    const laced = AES.Lace(plainText);
    const unlaced = AES.UnLace(laced);
    // final should equal plaintext
    expect(unlaced).toEqual(plainText);
});

test('prepends and removes timestamp', () => {
    const plainText = 'here is the plain text';
    const timestamped = AES.generateTimestamp(plainText);
    const timestampRemoved = AES.removeTimestamp(timestamped);
    // final should equal plaintext
    expect(timestampRemoved).toEqual(plainText);
});

test('prepends timestamp, encrypts, decrypts, removes timestamp', () => {
    const plainText = 'here is the plain text';
    const timestamped = AES.generateTimestamp(plainText);
    const encrypted = AES.Encrypt(timestamped, key_128);
    const decrypted = AES.Decrypt(encrypted, key_128);
    const timestampRemoved = AES.removeTimestamp(decrypted);
    // final should equal plaintext
    expect(timestampRemoved).toEqual(plainText);
});

test('laces string, prepends timestamp, encrypts, decrypts, removes timestamp, unlaces', () => {
    const plainText = 'here is the plain text';
    const timestamped = AES.generateTimestamp(plainText);
    const laced = AES.Lace(timestamped);
    const encrypted = AES.Encrypt(laced, key_128);
    const decrypted = AES.Decrypt(encrypted, key_128);
    const unlaced = AES.UnLace(decrypted);
    const timestampRemoved = AES.removeTimestamp(unlaced);
    // final should equal plaintext
    expect(timestampRemoved).toEqual(plainText);
});

test('laces empty string', () => {
    const plainText = '';
    const laced = AES.Lace(plainText);
    // should be zero characters long
    expect(laced.length).toBe(0);
});

test('unlaces empty string', () => {
    const plainText = '';
    const unlaced = AES.UnLace(plainText);
    // should be zero characters long
    expect(unlaced.length).toBe(0);
});
