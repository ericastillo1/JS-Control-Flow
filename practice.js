startGame ()
function startGame () {
    let intro = prompt("Congratulations !!! You were recently offerred the job to be an Artist Manager.Your goal as Manager is to make sure that the artist you manage is happy. If at any point your artist happiness falls below 60%, you will be terminated immediately. Your first task as Manager is to make sure that your artist arrives on time to the venue for their show. There may be roadbumps along the way, so goodluck !! Which artist would you like to manage? \n \n (type `bts` or `billie eillish`)")

    if (intro === `bts`) {
        manageBts ();
    } else if ( intro === `billie eilish`) {
        manageBillie ();
    } else  {
        intro !== `bts` || `billie eilish` 
        startGame ();
    };
};

function manageBts () {
    let btsManager = prompt("Nice Choice ! You have chosen to manage BTS. When you look outside the hotel, you notice papparazzi and fans outside. You are unsure if you want the members to leave through the front door, or sneak them out through the back. If you have the members leave through the front door, that gives the paps and fans a chance to snap pics of the members. Which is good for business, because it means free promo. If you sneak them out back, the members are able to keep their privacy and do not have to worry about getting mobbed. Which option will you choose? \n \n( type `free promo` or `sneak them out` ) \n \n click `ok` to go back to last question ")

    if ( btsManager === `free promo`) {
        promotion();
    } else if ( btsManager === `sneak them out`) {
        sneakOut ();
    } else if (btsManager === "") {
        startGame ();
    } else { btsManager !== `free promo` || `sneak them out`
        manageBts ();
    };
 };

 function promotion () {
    let freePromo = prompt("The members leave through the front door. As each memeber is walking to their vehicle, they are posing for photos and waiving to fans. The paps decide they want better photos of the members, so they decide to rush up close to them. Security is able to get each member to their vehicle safely after being mobbed by the paps. Due to that experience, happiniess falls 15%. You are now headed to the venue. Along the way, Jungkook asks to stop at Starbucks. Do you stop at Starbucks or inform him that you are crunched for time? \n Happiness = 85% \n\n ( type `starbucks` or `head to venue` ) \n\n click `ok` to go back to last question")

    if ( freePromo === `starbucks`) {
        starbucks ();
    } else if ( freePromo === `head to venue`) {
        venue ();
    } else if (freePromo === "") {
        manageBts ();
    } else { freePromo !== `starbucks` || `head to venue`
        promotion ();
    };
 };

 function sneakOut () {
    let sneakThemOut = prompt("You managed to sneak the members out without anyone seeing them, good job !! As you're headed to the venue, Namjoon informs you that he left his phone and laptop back at the hotel. Do you turn back around or send another staff member to retrieve it for him? \n \n H = 100% \n \n( type `turn back ` or `send staff` ) \n \n click `ok` to go back to last question")

    if ( sneakThemOut === `turn back`) {
        turningBack ();
    } else if (sneakThemOut === `send staff`) {
        sentStaff ();
    } else if (sneakThemOut === "") {
        manageBts ();
    } else {sneakThemOut !== `turn back` || `send staff`
        sneakOut ();
    };
 };

 function starbucks () {
    let buyStarbucks = prompt("The members are happy they can make a quick stop for coffee, since today will be a long day for them. You pickup the drinks for the members and staff and now are on your way to the venue. Happiness increases by 5%. As you are nearing the venue, the driver hits a pothole and causes you to spill your drink on Taehyung. Do you apologize or brush it off as an accident? \n \n H = 90% \n \n ( type `apologize` or `brush it off` ) \n \n click `ok` to go back to last question")

    if ( buyStarbucks === `apologize`) {
        sorry ();
    } else if ( buyStarbucks === `brush it off`) {
        whoCares ();
    } else if ( buyStarbucks === "") {
        promotion ();
    } else { buyStarbucks !== `apologize` || `brush it off`
        starbucks ();
    };
 };

 function venue () {
    let driveToVenue = prompt("You inform the members that there is not enough time to stop for drinks. They are understanding but happiness still falls 5%. As you are nearing the venue, you are going over the schedule for the day with the members. Some of the members express that they feel drained and miss their families. Do you inform them that that is the price they pay for fame or try to cheer them up? \n \n H = 80% \n \n ( type `pay` or `cheer` ) \n \n click `ok` to go back to last question")

    if ( driveToVenue === `pay`) {
        priceToPay ();
    } else if ( driveToVenue === `cheer`) {
        cheerThemUp ();
    } else if ( driveToVenue === "") {
        promotion ();
    } else { driveToVenue !== `pay` || `cheer`
        venue();
    };
 };

 function turningBack () {
    let goBack = prompt("You have the driver return back to the hotel. You rush up quickly to grab Namjoons phone. On the way back down you accidentally drop his phone. Do you lie and say you did not find the phone and laptop, or tell Namjoon what happened? \n\n H = 100% \n\n ( type `lie` or `honesty` ) \n \n click `ok` to go back to last question")

    if ( goBack === `lie`) {
        lied ();
    } else if ( goBack === `honesty`) {
        truth ();
    } else if ( goBack === "") {
        sneakOut ();
    } else {goBack !== `lie` || `honesty`
        turningBack ();
    };
 };

 function sentStaff () {
    let staffPickup = prompt("You send a staff member back to the hotel to retrieve the items. Since the staff member will be running late due to heavy traffic. Do you inform them to stop to pickup snacks for the members or hurry back? \n \n H = 100% \n \n ( type `snacks` or `hurry back` ) \n \n click `ok` to go back to last question")

    if ( staffPickup === `snacks`) {
        munchies ();
    } else if ( staffPickup === `hurry back`) {
        rushing ();
    } else if ( staffPickup === "") {
        sneakOut ();
    } else { staffPickup !== `snacks` || `hurry back`
        sentStaff ();
    };
 };

 function sorry () {
    let apologize = prompt("You sincerely apologize and try your best to clean the spill. Happiness drops 5%. Although he is upset, he is understanding that it was just an accident. Thankfully as you guys near the venue, their is a private entrance for the artists. Once you all arrive and park, the other members tease Taehyung as they all get out of the vans. Since its your first day, the members cut you some slack. \n \n Happiness scored ended with H = 80% \n \n Congrats on being BTS's new manager !!!")

    if (apologize === "") {
        startGame ();
    };
 };
