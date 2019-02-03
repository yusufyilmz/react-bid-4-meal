import { Server } from 'react-mock'
import input from './input.json';

const mealbidEndPoint = '/api/v1/mealbid'

const getMealBidInput = () => {
  try {
    return {
      status: 'OK',
      data: input
    }
  } catch (e) {
    return {
      status: 'ERROR',
      data: e.message
    }
  }
}

const requestHandler = (request, generator) => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(getMealBidInput())];
}


Server.mockGet(mealbidEndPoint, requestHandler)
Server.on()