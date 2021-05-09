### What is Caesar cipher
In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down or up the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

### Caesar Cipher cli
It's a command line application, that helps to encrypt and decrypt text with Caesar cipher. This cli works only with latin alphabet and doesn't change other symbols.

### Installation
1. Download repository
2. In the command line of Bash or in the IDE's terminal run a command **npm install** or **npm i**

### Usage
From the root of a project in the command line of Bash or in the IDE's terminal run a command:
```
node .\index.js -a [encode|decode] -s [integer_number] -i [path_to_input_file] -o [path_to_output_file]
```

example: 
```
node .\index.js -a decode -s 1 -i "input.txt" -o "output.txt"
```
Arguments:
* -s, --shift: a shift-how many letters do we shift the text by, can ne positive or negative number;
* -i, --input: an input file - a file where you can pass the text you want to encrypt or decrypt;
* -o, --output: an output file - a file where you can see a result of encryption/decryption;
* -a, --action: an action encode/decode

You can pass these arguments both in full and in abbreviated form


