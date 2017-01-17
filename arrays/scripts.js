// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1 and 2
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

    const people2 = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
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

    const sortedEs6 = inventors.sort((a,b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : 0);

    console.log("5. Sort inventors by years lived: ");
    console.log("es5: ");
    console.log(sorted);
    console.log("es6: ");
    console.log(sortedEs6);
    console.log("------------------------------------------------");

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    //  https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));

    // console.log("6. Search for Boulevards in Paris that contain 'de' on the Wikipedia page: ");
    // console.log(de);
    // console.log("------------------------------------------------");

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    const sortedLastName = inventors.sort(function(a,b) {

        if(a.last > b.last)
            return 1;
        else if (a.last < b.last)
            return -1;
        else
            return 0;
    });

    console.log("7. Sort inventors by last name: ");
    console.log(sortedLastName);
    console.log("------------------------------------------------");

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    //I'm being EXTRA here! 💁
    const sortedData = data.sort(function (a,b) {

        if (a > b)
            return 1;
        else if (a < b)
            return -1;
        else
            return 0;
    });

    //reduce the modes of transportation
    const reducedData = sortedData.reduce(function(allModes, mode) {

        if(mode in allModes) 
            allModes[mode]++;
        else
            allModes[mode] = 1;

        return allModes;
    }, {});

    console.log("8. Reduce array to the sum of the instance of each unique value: ");
    console.log(sortedData);
    console.log("Reduced es5: ");
    console.log(reducedData);
    console.log("------------------------------------------------");


    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?

    function isOlderThan19(element, index, array){
        return element.year < 1999;
    }

    console.log("9. Is someone in people2 older than 19? ");
    console.log(people2.some(isOlderThan19));
    console.log("------------------------------------------------");

    console.log("10. Is everyone in people2 older than 19? ");
    console.log(people2.every(isOlderThan19));
    console.log("------------------------------------------------");

    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    // Array.prototype.findIndex()
    // Find the comment with this ID
    function locateIndex(array) {
        return array.id === 823423;
    }

    console.log("11. Find index of 823423 ");
    console.log(comments.findIndex(locateIndex));
    console.log("------------------------------------------------");

    // delete the comment with the ID of 823423
    console.log("12. Delete that index");
    console.log(comments.splice(comments.findIndex(locateIndex), 1));
    console.log(comments);
    console.log("------------------------------------------------");
    