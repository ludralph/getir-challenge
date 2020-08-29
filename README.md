
# GETIR Challenge
## API DOC
https://documenter.getpostman.com/view/2052029/TVCcWUbV

## Query Records By Filtering
Send a POST request to https://getir-challenge-app.herokuapp.com/api/v1/records to see filtered records.

### Sample Request Body
```
 {
    "startDate": "2016-01-26", 
    "endDate": "2018-02-02", 
    "minCount": 2700, 
    "maxCount": 3000
 }
```
 
### To run locally
1. clone this repository.
2. create a .env file at root (it should have MONGO_URI set to the mongo url, see dotenvexample for reference)
npm install
npm start
