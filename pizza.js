/***********************************************
       _                _
      (_)              (_)
 _ __  _ __________ _   _ ___
| '_ \| |_  /_  / _` | | / __|
| |_) | |/ / / / (_| |_| \__ \
| .__/|_/___/___\__,_(_) |___/
| |                   _/ |
|_|                  |__/
***********************************************/

import request from 'request';
import $pizzaCtrl from './pizzaController';

const URL = 'http://coding-challenge.renderedtext.com/';

// Fetch data
request.get(URL, (err, res, body) => {
    const PIZZAS = JSON
                  .parse(body)['pizzas'];
    const NUMOFPIZZA = PIZZAS
                      .filter($pizzaCtrl.isValidPizza)
                      .length;
                      console.log(NUMOFPIZZA);
    // Pizzas with meat
    let pwm = PIZZAS
              .filter($pizzaCtrl.withMeat);

    // Pizzas with more than one type of cheese
    let pw2c = PIZZAS
              .filter($pizzaCtrl.withMoreCheese);

    // Pizzas with meat and olives
    let pwmo = pwm
              .filter($pizzaCtrl.withMeatAndOlives);

    // Pizzas with mozzarela and mushrooms
    let pwmm = PIZZAS
              .filter($pizzaCtrl.withCheeseAndShrooms);

    const ANSWER = $pizzaCtrl.generateAnswer([pwm, pw2c, pwmo, pwmm], NUMOFPIZZA);
    console.log(JSON.stringify(ANSWER));
});
