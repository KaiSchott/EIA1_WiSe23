
let myStorryArray = ["storyStart","storyRoom1" , "storyRomm1Fight", "WrongInput", "storyRoom2", "StoryRoom2Left", "StoryRoom2Right"  ];

const storyStart = "You are in a dark room. There are two doors. Which door do you take? Left or Right?";
const storyRoom1 = "You are in a room with a monster. What do you do? Fight or Run?";
const storyRomm1Fight = "You are fighting the monster. You are dead. Game over.";
const StoryRoom1Run = "You are runing trough the door in front of you. The monster behind you doesn't follow you. You found a treasure chest. You open it and find a lot of gold. You are rich. You win.";
const WrongInput = "Wrong input. Game over.";

const storyRoom2 = "You are in a room with a trap which is narrowing. In front of you are two doors. Which door do you take? Left or Right?";
const StoryRoom2Left = "You can dodge the trap and you are in a room with a treasure chest. You open it and find a lot of gold. You are rich. You win.";
const StoryRoom2Right = "You can't open the door and have no time to dodge the trap. You are dead. Game over";

const start = prompt(storyStart);

step1();
step2();


if (start != "Left" && start != "left" && start != "Right" && start != "right") {
   alert(WrongInput);
}

function step1() {
   if (start == "Left" || start == "left") {
      const action = prompt(storyStart);
      
      if (action == "Fight" || action == "fight") {
         alert(storyRomm1Fight);
      } else if (action == "Run" || action == "run") {
         alert(StoryRoom1Run);
      }
   }
}

function step2(){
   if (start == "Right" || start == "right") {
      const action = prompt(storyRoom2);
      if (action == "Left" || action == "left") {
         alert(StoryRoom2Left);
      } else if (action == "Right" || action == "right") {
         alert(StoryRoom2Right);
      }
   }
}
