import axios from "axios";

const url = 'https://httpbin.org/post';

type filterRequestType = {
  season: string,
  collection: string,
  gender: string,
  size: string,
  available: string,
  color: string,
  minPrice: number,
  maxPrice: number,
}

type reviewRequestType = {
  name: string,
  email: string,
  message: string,
  spamProtect: string;
}

export default class RequestService {

  static async postOrderData(orderData: object) {
    const response = await axios.post(url, {
      orderData
    }).then(resp => {
      return resp.data.data
    }).catch(e => {
      if (e.response) {
        // client received an error response (5xx, 4xx)
        console.log(e.response)
      } else if (e.request) {
        // client never received a response, or request never left
        console.log(e.request.status)
      } else {
        // anything else 
        console.log(e)
      }
    })
    return response;
  };

  static async postFilterData(filterData: filterRequestType) {
    const response = await axios.post(url, {
      season: filterData.season,
      collection: filterData.collection,
      gender: filterData.gender,
      size: filterData.size,
      available: filterData.available,
      color: filterData.color,
      minPrice: filterData.minPrice,
      maxPrice: filterData.maxPrice
    }).then(resp => {
      return resp.data.data
    }).catch(e => {
      if (e.response) {
        // client received an error response (5xx, 4xx)
        console.log(e.response)
      } else if (e.request) {
        // client never received a response, or request never left
        console.log(e.request.status)
      } else {
        // anything else 
        console.log(e)
      }
    })
    return response
  };

  static async postReviewData(formData: reviewRequestType) {
    const response = await axios.post(url, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      spamProtect: formData.spamProtect
    }).then(resp => {
      return resp.data.data
    }).catch(e => {
      if (e.response) { 
        // client received an error response (5xx, 4xx)
        console.log(e.response)
      } else if (e.request) { 
        // client never received a response, or request never left
        console.log(e.request.status)
      } else { 
        // anything else 
        console.log(e) 
      } 
    })
    return response
  };

}
