// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const filtered = inventors.filter(checkAge);

    function checkAge(value) {

        //es5
        return value.year >= 1500 && value.year < 1600;
    }

    console.log("1. Inventors who were born in the 1500s: ");
    console.log(filtered);
    console.log("------------------------------------------------");

    // Array.prototype.map()
    // 2. Give us an array of the inventor first and last names

    const mapped = inventors.map(firstAndLastName);

    function firstAndLastName(value, es5) {
        
        return value.first + " " + value.last;
    }

    const mappedEs6 = inventors.map((val) => `${val.first} ${val.last}`);

    console.log("2. Create a new array of first and last names");
    console.log("es5: ");
    console.log(mapped);
    console.log("es6: ");
    console.log(mappedEs6);
    console.log("------------------------------------------------");

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort(function(a, b) {
      if(a.year > b.year) {
        return 1;
      } else {
        return -1;
      }
    });

    console.log("3. Sort the array of inventors based on birthdate: ");
    console.log(ordered);
    console.log("------------------------------------------------");


    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?

    const reduced = inventors.reduce(function(a, b) {
        return a + (b.passed - b.year);
    }, 0);

    const reducedEs6 = inventors.reduce((a,b) => a + (b.passed - b.year),0);

    console.log("4. How many years did all of the inventors live?: ");
    console.log("es5: ");
    console.log(reduced);
    console.log("es6: ");
    console.log(reducedEs6);
    console.log("------------------------------------------------");

    // 5. Sort the inventors by years lived
    const sorted = inventors.sort(function(a,b) {
        if((a.passed - a.year) > (b.passed - b.year))
            return 1;
        else
            return -1;
    });

    console.log("5. Sort inventors by years lived: ");
    console.log(sorted);
    console.log("------------------------------------------------");

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));
    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these