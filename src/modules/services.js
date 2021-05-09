
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
    async getNewPanel(token = undefined,category = ""){
        let param;
        if (category === "any") {
            param = "";
        }
        else {
            param = `&category=${category}`;
        }
        
        var output;
        let response = await fetch(baseUrl + "amount=1&type=multiple&token="+token+param)
            .then(re => re.json())
            .then(data => output = data);
        return (output);
    }
}   

export {
    baseUrl,
    API
};