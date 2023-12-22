export async function validatePhoneNumber(phoneNumber){
    try{
        const response=await fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=510d1a857fcd4cd3acab3704e24e8c40&phone=${phoneNumber}`)
        const data=await response.json()
        return (data.valid);
    }catch(err){
        console.log("ERROR",err);
    }
}


export async function validateEmail(email){
    try{
        const response= await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=3be2b8515e484b16a7cead6bbc7aab61&email=${email}`)
        const data=await response.json()
        return (data.is_valid_format.value);
    
    }catch(err){
        console.error("ERROR",err);
    }
} 

// console.log(validatePhoneNumber('23408106407130'));
// console.log(validateEmail("a.samuelsamson@yahoo.com"));