
const baseUrl = "https://opentdb.com/api.php?";
const tokenUrl = "https://opentdb.com/api_token.php?";

class API {
    async getSessionToken(){
        var output;
        let response = await fetch(tokenUrl + "command=request")
            .then(re => re.json())
            .then(data => output = data);
        return output.token;
    }
    async getNewPanel(token = undefined){
        var output;
        let response = await fetch(baseUrl + "amount=1&type=multiple&token="+token)
            .then(re => re.json())
            .then(data => output = data);
        return (output);
    }
}   

export {
    baseUrl,
    API
};