let isValidPizza = (obj) => {
    const KEY = Object.keys(obj)[0];
    const INGREDIENTS = obj[KEY]['ingredients'];

    return INGREDIENTS
        ? INGREDIENTS
        : false;
};

let withMeatAndOlives = (obj) => {
    const INGREDIENTS = isValidPizza(obj);

    if (INGREDIENTS) {
        const REGEX = /olives*/g;
        return INGREDIENTS.filter((ingredient) => {
            return ingredient.match(REGEX);
        }).length;
    }
    return false;
};

let withMeat = (obj) => {
    const INGREDIENTS = isValidPizza(obj);

    if (INGREDIENTS) {
        const MEAT = [
            'ham',
            'cocktail_sausages',
            'salami',
            'crab_meat',
            'minced_meat',
            'kebab',
            'minced_beef',
            'shrimps',
            'mussels',
            'tuna',
            'calamari',
            'sausage'
        ];

        return INGREDIENTS.filter((ingredient) => {
            return (MEAT.indexOf(ingredient) >= 0);
        }).length;
    }
    return false;
};

let withMoreCheese = (obj) => {
    const INGREDIENTS = isValidPizza(obj);
    const REGEX = /cheese*/g;

    if (INGREDIENTS) {
        return INGREDIENTS.filter((ingredient) => {
            return ingredient.match(REGEX);
        }).length >= 2;
    }
    return false;
};

let withCheeseAndShrooms = (obj) => {
    const INGREDIENTS = isValidPizza(obj);
    if (INGREDIENTS)
        return (INGREDIENTS.indexOf('mozzarella_cheese') > -1) && (INGREDIENTS.indexOf('mushrooms') > -1);
    return false;
};

let generateAnswer = (pizzaArray, numOfPizza) => {
    let solution = {
        personal_info: {
            full_name: 'Vladimir Simonovski',
            email: 'vlsim@outlook.com',
            code_link: 'https://gist.github.com/vsimonovski/eac1ca586c1b5218e1121b17fbf1b920'
        },
        answer: []
    };

    pizzaArray.forEach((group, i) => {
        const GROUPLEN = group.length;
        if (GROUPLEN && numOfPizza) {
            const PERCENTAGE = (GROUPLEN / numOfPizza) * 100 + '%';
            const CHEAPEST = group.sort((a, b) => {
                return a.price - b.price
            })[0];

            solution['answer'].push({
                [`group_${i + 1}`]: {
                    percentage: PERCENTAGE,
                    cheapest: CHEAPEST
                }
            });
        }
    });
    return solution;
}

module.exports = {
    withCheeseAndShrooms: withCheeseAndShrooms,
    withMeatAndOlives: withMeatAndOlives,
    withMeat: withMeat,
    withMoreCheese: withMoreCheese,
    generateAnswer: generateAnswer,
    isValidPizza: isValidPizza
};
