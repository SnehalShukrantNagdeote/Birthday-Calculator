import { auth, db } from './Fire';

export function getUserData(uid) {
    return new Promise ((resolve,reject) => {
        db.ref("Users/" + uid).once("value", snap => {
            console.log(snap.val().date)
            console.log(snap.val().name)
            let dob = snap.val().date;
            let currentuser = snap.val()
            console.log(currentuser)
            let currentusername = snap.val().name;
            // let currentEmail = snap.val().Email;
            // let currentPassword = snap.val.Password;
            console.log(currentusername)
            console.log(dob)
    
            let returndata = calculateDays(dob, currentusername)
          
            // console.log(returndata)
            resolve(returndata)
            // document.getElementById("signUpform").style.display = "none"
            // document.getElementById("logincontent").style.display = "none"
            // LogOutBtn.style.display = "block"
        })
    })

    }
    

function calculateDays(dob, currentusername) {
    let today = new Date();
    console.log(today)
    
    console.log(dob)
    let bday = new Date(dob)
    console.log(bday)
    bday.setDate(bday.getDate() + 1);
    console.log(bday)
    let age = today.getFullYear() - bday.getFullYear();
    if (today.toDateString() == bday.toDateString()) {
        return `Happy Birthday, ${currentusername}!`;
        // getDataFromWebsite();


    } else {
        let upcomingBday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());//2021/04/18

        if (today > upcomingBday) {
            upcomingBday.setFullYear(today.getFullYear() + 1);
        }

        var one_day = 24 * 60 * 60 * 1000;

        let daysLeft = Math.ceil((upcomingBday.getTime() - today.getTime()) / (one_day));
        console.log(daysLeft)
        return daysLeft ;

        // No need to calculate people older than 199 yo. :)   
        // if (daysLeft && age < 200) {
        //     return `${daysLeft} DAYS LEFT`;
        //     // document.getElementById("statement").innerText = "UNTIL YOUR BIRTHDAY!";
        // } //else {
        //     document.getElementById("daysleft").innerText = "Please enter a valid birtday.";
        // }


    }


}