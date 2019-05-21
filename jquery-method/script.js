$(document).ready(onReady);

const people = [
    {
        name: 'Weizhen',
        favoriteFood: 'ice-cream',
        favoriteMeal: 'dinner'
    },
    {
        name: 'Koua',
        favoriteFood: 'steak',
        favoriteMeal: 'dinner'
    },
    {
        name: 'Amran',
        favoriteFood: 'Waffles',
        favoriteMeal: 'brunch'
    },
    {
        name: 'Trevor',
        favoriteFood: 'mac and cheese',
        favoriteMeal: 'breakfast'
    }]

function onReady() {
    // console.log(people);

    // for(let person of people) {
    //     $('.peopleList').append(`
    //         <li>Name: ${person.name}
    //         <br />
    //         <button class="favMeal">Favorite Meal: ${person.favoriteMeal}</button>
    //         </li>
    //     `)
    //     console.log($(this).find('button').data('favoriteFood'));
    // }

    people.forEach(function (person) {
        //assign the li element
        let listItem = $(`<li data-cohortName="Caesar"></li>`);//add data attribute to the li element
        //data method is both getter and setter
        //use at setter
        listItem.data('bestFood: ', person.favoriteFood);

        listItem.append(`
            <p>Name: ${person.name}</p>
            <br />
            <button class="favMeal">Favorite Meal: ${person.favoriteMeal}</button>
            `);

        console.log(listItem.text());
        //use as setter
        console.log(listItem.data());

        $('.peopleList').append(listItem);

    })

    //add on click event to the favorite meal button, so that it will show the favorite food in the console
    //on click event listener is attached after the button was created
    $('.favMeal').on('click', function() {
        let food = $(this).parent().data();
        console.log(food);
    })
}


