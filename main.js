

const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const msg = document.getElementById("msg")
const submit = document.getElementsByClassName("myForm")[0]

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("clicked");
    
    const datemillsel = new Date(document.getElementById("schedule").value).getTime()
    const datemillnow = new Date().getTime()
    console.log(datemillnow)
    const time = document.getElementById("hrmin").value
    let sendingHour = time.split(":")[0]
    let sendingMinute = time.split(":")[1]
    let nextSendDate = new Date();
    const currentDate = new Date();
    nextSendDate.setHours(sendingHour, sendingMinute, 0, 0);

    if (nextSendDate <= currentDate) {
      nextSendDate.setDate(nextSendDate.getDate() + 1);
    }
    
    nextSendDate.setHours(sendingHour, sendingMinute, 0, 0);
    const timeUntilNextSend = (datemillsel - datemillnow) + (nextSendDate - currentDate);
    console.log(timeUntilNextSend)
    
    setTimeout(() => {
        Email.send({
            SecureToken : "cc1c031a-d8dd-4eb3-9d11-1d9059e05117",
            To : email.value,
            From : "omarrhossamm2@gmail.com",
            Subject : "",
            Body : msg.value
        }).then(
            message => alert(message)
        )}, timeUntilNextSend);
})
