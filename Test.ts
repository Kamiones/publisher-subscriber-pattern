import { Subscribable } from "./Subscribable";

const playerSubscribable = new Subscribable<string>();
const scoreSubscribable = new Subscribable<string>();

const unsub1 = playerSubscribable.subscribe((msg: string) => console.log("User 1 | " + msg));
const unsub2 = scoreSubscribable.subscribe((msg: string) => console.log("User 2 | " + msg));
const unsub3_1 = playerSubscribable.subscribe((msg: string) => console.log("User 3 | " + msg));
const unsub3_2 = scoreSubscribable.subscribe((msg: string) => console.log("User 3 | " + msg));

playerSubscribable.publish("(10:45) Goal by: Messi");    //    (User 1) (User 3)
scoreSubscribable.publish("(10:45) Score: 0-1");         //    (User 2) (User 3)
console.log();

playerSubscribable.publish("(30:04) Goal by: Messi");    //    (User 1) (User 3)
scoreSubscribable.publish("(30:04) Score: 0-2");         //    (User 2) (User 3)
console.log();

unsub2();

playerSubscribable.publish("(60:04) Goal by: CR7");      //    (User 1) (User 3)
scoreSubscribable.publish("(60:04) Score: 1-2");         //    (User 3)
console.log();

playerSubscribable.publish("(70:10) Goal by: CR7");      //    (User 1) (User 3)
scoreSubscribable.publish("(70:10) Score: 2-2");         //    (User 3)
console.log();

const unsub4 = scoreSubscribable.subscribe((msg: string) => console.log("User 4 | " + msg));

playerSubscribable.publish("(91:03) Goal by: CR7");      //    (User 1) (User 3)
scoreSubscribable.publish("(91:03) Score: 3-2");         //    (User 3) (User 4)

playerSubscribable.clear();
scoreSubscribable.clear();
playerSubscribable.publish("Broadcast for remaining users");
scoreSubscribable.publish("Broadcast for remaining users");