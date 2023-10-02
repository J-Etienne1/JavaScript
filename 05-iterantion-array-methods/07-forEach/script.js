
const socials= ["Twitter", "Linkedin", "Facebook", "Instagram"]

/* 

socials.forEach(function (social) {
    console.log(social)
});

 */




// Arrow function version
//socials.forEach((social, index, arr) => console.log(`${index} - ${social}`, arr));





function logSocials(social) {
    console.log(social)
}
//socials.forEach(logSocials)









const socialObj = [
    {
        name: "Twitter",
        url: "twitter.com"
    },
    {
        name: "Facebook",
        url: "Facebook.com"
    },
    {
        name: "Instagram",
        url: "Instagram.com"
    }
]
socialObj.forEach((item)=> console.log(item))
socialObj.forEach((item)=> console.log(item.url))









