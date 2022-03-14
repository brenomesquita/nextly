import Benchmark from 'benchmark';
import { palindromeOne, palindromeTwo, palindromeThree } from '../palindrome.js'

const suite = new Benchmark.Suite;

suite
    .add("palindromeOne", function() {
        palindromeOne("taco cat"),
        palindromeOne("my gym"),
        palindromeOne("red rum, sir, is murder"),
        palindromeOne("rotator"),
        palindromeOne("racecar"),
        palindromeOne("not a palindrome")
    })
    .add("palindromeTwo", function() {
        palindromeTwo("taco cat"),
        palindromeTwo("my gym"),
        palindromeTwo("red rum, sir, is murder"),
        palindromeTwo("rotator"),
        palindromeTwo("racecar"),
        palindromeTwo("not a palindrome")

    })
    .add("palindromeThree", function() {
        palindromeThree("taco cat"),
        palindromeThree("my gym"),
        palindromeThree("red rum, sir, is murder"),
        palindromeThree("rotator"),
        palindromeThree("racecar"),
        palindromeThree("not a palindrome")
    })
    .on("cycle", (event) => console.log(String(event.target)))
    .on("complete", function() {
        console.log(`fastest is ${this.filter('fastest').map('name')}`)
    });

export default suite;
