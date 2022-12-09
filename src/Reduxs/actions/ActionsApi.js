import apiName from '../../Common/ApiName';
import { ERROR, SUCCESS, LOADING } from '../constants/reduxConstant'


// const apiLoading = () => ({ type: LOADING });
// const apiSucceed = payload => ({ type: SUCCESS, payload });
const apiError = payload => ({ type: ERROR, payload });


export const ActionsSigin = (Url, method, SendData) => async (dispatchEvent, getState) => {
  console.log('body in login ======>>', Url, method, SendData)
  try {
    const data = await networkRequest(Url, method, SendData,)
    return (dispatchEvent({
      type: 'SignUp',
      data: data
    }))
  } catch (e) {
    dispatchEvent(apiError(e));
  }
};

export const ActionsOtp = (Url, method, SendData) => async (dispatchEvent, getState) => {
  try {
    const data = await networkRequest(Url, method, SendData,)
    return (dispatchEvent({
      type: 'otp',
      data: data
    }))
  } catch (e) {
    dispatchEvent(apiError(e));
  }
};

export const ActionsLogin = (Url, method, SendData) => async (dispatchEvent, getState) => {
  try {
    const data = await networkRequest(Url, method, SendData,)
    return (dispatchEvent({
      type: 'login',
      data: data
    }))
  } catch (e) {
    dispatchEvent(apiError(e));
  }
};

export const ActionsForget_password = (Url, method, SendData) => async (dispatchEvent, getState) => {
  try {
    const data = await networkRequest(Url, method, SendData,)
    return (dispatchEvent({
      type: 'Forget',
      data: data
    }))
  } catch (e) {
    dispatchEvent(apiError(e));
  }
};




export async function networkRequest(Url, Method, SendData,) {
  try {

    let CompleteUrl = apiName.BASEURL + Url
    var HeaderToken = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIE5vdiAyMyAyMDIyIDA5OjA3OjQ2IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJ1c2VyX2lkIjoiNjM3ZGUyZTI2MzJmOWI3N2Q3ZTI0NDJiIiwiaWF0IjoxNjY5MTk0NDY2fQ.Wj_PoIUcr-8VHbmaz6R-H1r9VE58QHm7i_Z4l-NtFiw"
    }

    console.log('CompleteUrl', CompleteUrl)
    console.log('Method', Method)

    console.log('SendData', SendData)
    console.log('HeaderToken', HeaderToken)

    return (fetch(CompleteUrl, {
      method: Method,
      headers: HeaderToken,
      body: JSON.stringify(SendData),
    }))
      .then(res =>
        res.json())
      .then(json => {
        // console.warn(json);
        return json
      })
  } catch (e) {
    console.log('catch error-', e)
    return false;
  }
}