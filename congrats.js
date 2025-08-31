/**
 * ROT13 Decoder
 * Decodes a ROT13 encoded string and prints the result
 */

function rot13(encodedString) {
    return encodedString.replace(/[a-zA-Z]/g, function(char) {
        // Get the ASCII code of the character
        const code = char.charCodeAt(0);
        
        // Determine the base (65 for uppercase, 97 for lowercase)
        const base = code >= 65 && code <= 90 ? 65 : 97;
        
        // Apply ROT13 transformation and convert back to character
        return String.fromCharCode(((code - base + 13) % 26) + base);
    });
}

// The encoded string
const encodedString = 'Pbatenghyngvbaf ba ohvyqvat n pbqr-rqvgvat ntrag!';

// Decode and print the message
const decodedString = rot13(encodedString);
console.log(decodedString);