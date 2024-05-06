function scuberGreetingForFeet(distance){
  // Write your code here!
  //This function will return a price for a trip depending on the entered distance 

  if (distance <= 400){
    return "This one is on me!";
  } else if (distance <= 2000){
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500){
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  // This function will return  a response depnding on the destination entered

  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  // This function returns different responses based on the passenger's tip

  switch(tip){
    case "generous" : 
        return "Thank you so much.";
    case "not as generous" : 
        return "Thank you.";
    default:
        return "Bye.";
  }
}