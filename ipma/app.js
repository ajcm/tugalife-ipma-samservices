const httpRequest = require('tugalife-libs/ipma/HttpRequest')


var response = {
    "statusCode": 200,
    "headers": {},
    "body":  "", // JSON.stringify(responseBody),
    "isBase64Encoded": false
};

const getResponse = (status,cors,body) => { 

    var response = {}
    
    response ['statusCode'] = status

    if (cors){
        response ['headers'] = ({
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        })
    }


    if (body)
        response ['body'] = JSON.stringify(body)

    console.log(body)

    return response
}


/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.rootHandler = async (event, context) => {
    
    return getResponse(200,true,({"message":"OK"}))
};


exports.districtsForecastHandler = async (event, context) => {
   
    resp =  await httpRequest.getDistrictsForecast()
    
    if (resp.data){
        return getResponse(200,true,resp.data) 
    }else{
        return getResponse(503) 
    }          

};



//router.get('/forecast/:id', async  function(req, res) {

exports.forecastLocationHandler = async (event, context) => {
    //const id = req.params.id

    const id = event.pathParameters.id;

    if (!id) {
        throw new Error(`required argument: id`);
    }
    
    var response =  await httpRequest.getForecast(id)

    if (response.data){
        return getResponse(200,true,response.data)
        
    }else{
        return getResponse(503)
    }         
  };


  
exports.forecast24LocationHandler = async (event, context) => {
    //const id = req.params.id

    const id = event.pathParameters.id;

    if (!id) {
        throw new Error(`required argument: id`);
    }
    
    var response =  await httpRequest.getForecast(id)

    if (response.data && Array.isArray(response.data )){
        
        var dailyForecasts = response.data
        .filter(ff => ff.idPeriodo == 24)
        .sort((a,b) => b.dataPrev - a.dataPrev)
        
        return getResponse(200,true,dailyForecasts)
        
    }else{
        return getResponse(503)
    }         
  };