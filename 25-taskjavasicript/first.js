// let userage = +prompt("enter your age:")
// if(userage !== 125){
//     if(userage >=65){
//         alert("You can get your money!!")
//     }
//     else{
//         alert("too young!!")
//     }
// }
// else{
//     alert("its late for u")
// }




// let usernums = +prompt("enter first number:")
// let usernums2 = +prompt("enter second number:")
// let usernums3 = +prompt("enter third number:")
// if(usernums > 0 && usernums2 > 0 && usernums3 > 0){
//     if(usernums === usernums2 && usernums === usernums3 && usernums2 === usernums3){
//         alert("beraberterefli ucbucaq")
//     }
//     else if(usernums === usernums2 || usernums === usernums3 || usernums2 === usernums3){
//         alert("beraberyanli")
//     }
//     else{
//         alert("adi")
//     }   
// }




// let usernum = +prompt("enter your number:")
// if(usernum > 0){
//     if(usernum%2 === 0){
//         alert("cutdur")
//     }
//     else{
//         alert("tekdir")
//     }
// }




// let userchoice = +prompt("enter your number for month")
// if(userchoice !== 0){
//     switch(userchoice){
//         case 1:
//             alert("this is yanvar")
//             break;
//             case 2:
//             alert("this is fevral")
//             break;
//             case 3:
//             alert("this is mart")
//             break;
//             case 4:
//             alert("this is aprel")
//             break;
//             case 5:
//             alert("this is may")
//             break;
//             case 6:
//             alert("this is iyun")
//             break;
//             case 7:
//             alert("this is iyul")
//             break;
//             case 8:
//             alert("this is avqust")
//             break;
//             case 9:
//             alert("this is sentyabr")
//             break;
//             case 10:
//             alert("this is oktyabr")
//             break;
//             case 11:
//             alert("this is noyabr")
//             break;
//             case 12:
//             alert("this is dekabr")
//             break;
        
//     }
// }





// let userchoice = +prompt("enter your number")
// if(userchoice > 0){
//     if(userchoice % 15 === 0){
//         alert("Its the goat number")
//     }
//     else{
//         alert("yoxe yox")
//     }
// }
// else{
//     alert("agilli ol musbet yaz!!")
// }




// let userchoice = +prompt("enter your number for dividing two")
// if(userchoice > 0){
//     if(userchoice % 2 === 0){
//         alert("Its the goat number")
//     }
//     else{
//         alert(`burda qaliq var qaqa ${userchoice%2}`)
//     }
// }
// else{
//     alert("agilli ol musbet yaz!!")
// }




// let userchoice = +prompt("enter your number")
// let userchoice2 = +prompt("enter your second number")
//     if(userchoice * userchoice2 > 0){
//         alert("musbet")
//     }
//     else if(userchoice * userchoice2 === 0){
//         alert("sifir qaqa")
//     }
//     else{
//         alert("menfi")
//     }





// let userchoice = +prompt("enter your number")
//     if(userchoice > 0 && userchoice < 100){
//         alert("daxildir 1-100e")
//     }
//     else if(userchoice < 0){
//         alert("azdi sifirdan")
//     }
//     else{
//         alert("100 den boyukdu")
//     }




// let usernums = +prompt("enter first number:")
// let usernums2 = +prompt("enter second number:")
// let usernums3 = +prompt("enter third number:")
// if(usernums > 0 && usernums2 > 0 && usernums3 > 0){
//     if(usernums === usernums2 && usernums === usernums3 && usernums2 === usernums3){
//         alert("beraberdiler")
//     }
//     else if(usernums > usernums2 && usernums > usernums3){
//         alert("en boyuk birdi")
//     }
//     else if( usernums2 > usernums3 && usernums2 > usernums){
//         alert("iki en boyukdur")
//     }
//     else{
//         alert("uc en boyukdur")
//     }   
// }



// let usernums = +prompt("enter your orta bal:")
// switch(usernums){
//     case usernums >90:
//         alert("sen a san")
//         break;
//     case usernums >=80 && usernums <=89:
//         alert("sen b san")
//         break;
//     case usernums >=70 && usernums <=79:
//         alert("sen c san")
//         break;
//     case usernums >=60 && usernums <=69:
//         alert("sen d san")
//         break;
//     case usernums <=59:
//         alert("drn f san")
//         break;
// }




// let usernums = +prompt("enter first number:")
//  let usernums2 = +prompt("enter second number:")
//  let usernums3 = +prompt("enter third number:")
// let netice;
//  if(usernums > 0 && usernums2 > 0 && usernums3 > 0){
//     netice = (usernums +usernums2 +usernums3) / 3;
//     alert(netice)
//  }



// let usernums = prompt("enter first number:")
// let usernums2 = prompt("enter second number:")
// let fullname = `${usernums} ${usernums2}`
// alert(`your name is ${fullname}`)




let emekhaqqi = +prompt("enter your emekhaqqi:")
let mebleg = +prompt("istediyin mebleg:")
let muddet = +prompt("ne qeder vaxta:")


if(muddet <36 && muddet >0){
    if(emekhaqqi*10 >= mebleg){
        if(muddet > 0 && muddet<=12){
            mebleg += (mebleg *13) /100
            if(mebleg/muddet <= (emekhaqqi *45) /100){
                alert(`${mebleg} azn kredit size 13% ile ${muddet} ay muddetine ayliq ${mebleg / muddet} manat odenisle verilir`)
            }
            else{
                alert("size bele kredit dusmur")
            }
        }
        else if(muddet > 12 && muddet<=24){
            mebleg += (mebleg *15) /100
            if(mebleg/muddet <= (emekhaqqi *45) /100){
                alert(`${mebleg} azn kredit size 15% ile ${muddet} ay muddetine ayliq ${mebleg / muddet} manat odenisle verilir`)
            }
            else{
                alert("size bucur kredit dusmur")
            }
        }
        else if(muddet > 24 && muddet<=36){
            mebleg += (mebleg *17) /100
            if(mebleg/muddet <= (emekhaqqi *45) /100){
                alert(`${mebleg} azn kredit size 17% ile ${muddet} ay muddetine ayliq ${mebleg / muddet} manat odenisle verilir`)
            }
            else{
                alert("size bu sekildekredit dusmur")
            }
        }
    }
    else{
        alert("size buna gore kredit dushmur")
    }
}
else{
    alert("size bu sertlerle kredit dusmur")
}