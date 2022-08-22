startGame ()
function startGame () {
    let intro = prompt("Congratulations !!! You were recently offerred the job to be an Artist Manager.Your goal as Manager is to make sure that the artist you manage is happy. If at any point your artist happiness falls below 60%, you will be terminated immediately. Your first task as Manager is to make sure that your artist arrives on time to the venue for their show. There may be roadbumps along the way, so goodluck !! Which artist would you like to manage? \n \n ( 1 = BTS      2 = Billie Eilish )")

    if (intro === '1') {
        manageBts ();
    } else if ( intro === '2') {
        manageBillie ();
    }
    else  {
        alert("Please enter a '1' or '2' "); 
        startGame ();
    };
};

function manageBts () {
    let btsManager = prompt("Nice Choice ! You have chosen to manage BTS. When you look outside the hotel, you notice papparazzi and fans outside. You are unsure if you want the members to leave through the front door, or sneak them out through the back. If you have the members leave through the front door, that gives the paps and fans a chance to snap pics of the members. Which is good for business, because it means free promo. If you sneak them out back, the members are able to keep their privacy and do not have to worry about getting mobbed. Which option will you choose? \n \n Happiness = 100% \n \n ( 1 = free promp  2 = sneak them out ) \n\n To RESTART game type 'r'  ")

    if ( btsManager === '1') {
        promotion();       
    } else if ( btsManager === '2') {
        sneakOut ();
    } else if (btsManager === 'r') {
        startGame ();
    } else { 
        alert("Please enter a '1' or '2' \n\n to RESTART game enter 'r' ");
        manageBts ();
    };
 };

 function promotion () {
    let freePromo = prompt("The members leave through the front door. As each memeber is walking to their vehicle, they are posing for photos and waiving to fans. The paps decide they want better photos of the members, so they decide to rush up close to them. Security is able to get each member to their vehicle safely after being mobbed by the paps. Due to that experience, happiniess falls 15%. You are now headed to the venue. Along the way, Jungkook asks to stop at Starbucks. Do you stop at Starbucks or inform him that you are crunched for time? \n Happiness = 85% \n\n ( 1 = Starbucks    2 = Head to Venue ) \n\n To RESTART game type 'r'")

    if ( freePromo === '1') {
        starbucks ();
    } else if ( freePromo === '2') {
        venue ();
    } else if (freePromo === 'r') {
        startGame ();
    } else { 
        alert("Please enter a '1' or '2' \n\n to RESTART game enter 'r' ");
        promotion ();
    };
 };

 function sneakOut () {
    let sneakThemOut = prompt("You managed to sneak the members out without anyone seeing them, good job !! As you're headed to the venue, Namjoon informs you that he left his phone and laptop back at the hotel. Do you turn back around or send another staff member to retrieve it for him? \n \n Happiness = 100% \n \n( 1 = Turn Back    2 = Send Staff ) \n\n To RESTART game type 'r'")

    if ( sneakThemOut === '1') {
        turningBack ();
    } else if (sneakThemOut === '2') {
        sentStaff ();
    } else if (sneakThemOut === 'r') {
        startGame ();
    } else { 
        alert("Please enter a '1' or '2' \n\n to RESTART game enter 'r' ");
        sneakOut ();
    };
 };

 function starbucks () {
    let buyStarbucks = prompt("The members are happy they can make a quick stop for coffee, since today will be a long day for them. You pickup the drinks for the members and staff and now are on your way to the venue. Happiness increases by 5%. As you are nearing the venue, the driver hits a pothole and causes you to spill your drink on Taehyung. Do you apologize or brush it off as an accident? \n \n Happiness = 90% \n \n ( 1 = Apologize  2 = Brush it Off ) \n\n To RESTART game type 'r'")

    if ( buyStarbucks === '1') {
        sorry ();
    } else if ( buyStarbucks === '2') {
        whoCares ();
    } else if (buyStarbucks === 'r') {
        startGame ();
    } else { 
        alert("Please enter a '1' or '2' \n\n to RESTART game enter 'r' ");
        starbucks ();
    };
 };

 function venue () {
    let driveToVenue = prompt("You inform the members that there is not enough time to stop for drinks. They are understanding but happiness still falls 5%. As you are nearing the venue, you are going over the schedule for the day with the members. Some of the members express that they feel drained and miss their families. Do you inform them that that is the price they pay for fame or try to cheer them up? \n \n Happiness = 80% \n \n ( 1 = Pay     2 = Cheer ) \n\n To RESTART game type 'r'")

    if ( driveToVenue === '1') {
        priceToPay ();
    } else if ( driveToVenue === '2') {
        cheerThemUp ();
    } else if (driveToVenue === 'r') {
        startGame ();
    } else { 
        alert("Please enter a '1' or '2' \n\n to RESTART game enter 'r' ");
        venue ();
    };
 };

 function turningBack () {
    let goBack = prompt("You have the driver return back to the hotel. You rush up quickly to grab Namjoons phone. On the way back down you accidentally drop his phone. Do you lie and say you did not find the phone and laptop, or tell Namjoon what happened? \n\n Happiness = 100% \n\n ( 1 = Lie  2 = Honesty ) \n\n To RESTART game type 'r'")

    if ( goBack === '1') {
        lied ();
    } else if ( goBack === '2') {
        truth ();
    } else if (goBack === 'r') {
        startGame ();
    } else { 
        alert("Please enter a '1' or '2' \n\n to RESTART game enter 'r' ");
        turningBack ();
    };
 };

 function sentStaff () {
    let staffPickup = prompt("You send a staff member back to the hotel to retrieve the items. Since the staff member will be running late due to heavy traffic. Do you inform them to stop to pickup snacks for the members or hurry back? \n \n Happiness = 100% \n \n ( 1 = Snacks  2 = Hurry Back ) \n\n To RESTART game type 'r'")

    if ( staffPickup === '1') {
        munchies ();
    } else if ( staffPickup === '2') {
        rushing ();
    } else if (staffPickup === 'r') {
        startGame ();
    } else { 
        alert("Please enter a '1' or '2' \n\n to RESTART game enter 'r' ");
        sentStaff ();
    };
 };

 function sorry () {
    alert("You sincerely apologize and try your best to clean the spill. Happiness drops 5%. Although he is upset, he is understanding that it was just an accident. Thankfully as you guys near the venue, their is a private entrance for the artists. Once you all arrive and park, the other members tease Taehyung as they all get out of the vans. Since its your first day, the members cut you some slack. \n \n  Happiness = 80% \n \n Congrats on being BTS's new manager !!! \n \n  click `ok ` to restart game ")

    startGame ();
 };

 function whoCares () {
    alert(" You brush it off and let him know that its just an accident. When he asks you to apologize, you let him know the coffee will just wash out, and that there's nothing to aploogize for. The members are taken back with how rude you are. There overall happiness falls 50%. \n \n Happiness = 35% \n \n They do not want you as their manager, you are terminated immediately \n\n click `ok ` to restart game")

    startGame ();
 };

 function priceToPay () {
    alert("You inform them that their lifestyle involves them touring and traveling constantly, and that that is the price of fame. They are upset that you completely dismiss their feelings. Their happiness falls by 50%. \n \n Happiness = 30% \n \n They do not want you as their manager, you are terminated immediately \n\n click `ok ` to restart game ")

    startGame ();
 };

 function cheerThemUp () {
    alert("To cheet them up, you let them know that you will remove some tasks off their busy schedule so they can take that time to rest and talk with friends or family. They are appreciative to have such an understanding manager. There happiness increases by 20%. \n \n  Happiness = 100% \n \n Congrats on being BTS's new manager !!! \n \n  click `ok ` to restart game")

        startGame ();
 };

 function lied () {
    alert("When you get back to the car you hand Namjoon his belongings. When he asks what happened to his phone, you lie and act as if you do not know. Although the items are easily replaceable, the members do not feel comfortable having an untrustworthy person as their manager. Their happiniess falls by 50%. \n \n Happiness = 50% \n \n They do not want you as their manager, you are terminated immediately \n\n click `ok ` to restart game ")

    startGame ();
 };

 function truth () {
    alert("Once you get back in the car, you apologize profusely to Namjoon about accidentally cracking his phone screen. You also let him know that you'll pay to get him a new phone. Namjoon thanks you for your honesty and lets you know that its okay and accidents happen all the time.Although he is understanding, his happiness falls by 20%. You gus eventually arrive to the venue safely.  \n \n  Happiness = 80% \n \n Congrats on being BTS's new manager !!! \n \n  click `ok ` to restart game")

    startGame ();
 };

 function munchies () {
    alert("You inform the members that due to traffic, it will take awhile for the staff member to meet you all at the venue. And due to this, you asked the staff member to pick up some snacks on the way back. The members are thankful for the staff members generosity. You guys eventaully arrive to the stadium.\n \n  Happiness = 100% \n \n Congrats on being BTS's new manager !!! \n \n  click `ok ` to restart game ")

    startGame ();
 };

 function rushing () {
    alert("As you are on the phone with the staff member, you inform them to hurry back as soon as possible. You make it clear that if they are not back within a certain time, that their will be consequences. The members are in disbelief with how rude you are. Their happiness falls 50%. \n \n Happiness = 50% \n \n They do not want you as their manager, you are terminated immediately \n\n click `ok ` to restart game ") 

    startGame ();
 };


function manageBillie () {
    let billieManager = prompt("Nice Choice ! You have chosen to manage Billie Eilish. Since everything is already packed, you guys start heading to the venue. During the car ride, Billie is scheduled for a phone interview. Do you want to cancel the interview or continue as planned? \n\n Happiness = 100% \n\n ( 1 = Cancel   2 = Continue ) \n\n to RESTART game type 'r' ") 
        if ( billieManager === '1') {
            cancel ();
        } else if ( billieManager === '2') {
            continueInterview ();
        } else if ( billieManager === 'r') {
            startGame ();
        } else {
        alert("Please enter a '1' or '2' ")
        manageBillie ();
    };
};

function cancel () {
    let freeTime = prompt("Since you cancelled the interview, Billie is happy she has some free time, which she uses to Facetime her friends. Her happiness remains at 100%. After her call ends, Billie asks if you could leave some VIP passes for her friends so they can drive through the private entrance. Before you have the chance to ask her how many tickets she needs, her brother calls her over. How many tickets will you leave ? \n\n Hapiness = 100% \n\n ( type number of tickets you will leave ) \n\n to RESTART game type 'r' ") 

    let friends = parseInt(["Justin, Conan, Olivia"]);

    for ( i = 0; i <= friends; i++) {
        if (i <= freeTime) {
            everyoneGetsATicket ();
        } else {
            notEnoughTickets ();
        };
    };
};

function everyoneGetsATicket () {
    alert("goodjob")
}