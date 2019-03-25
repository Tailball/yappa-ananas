import React from 'react';

class Award extends React.Component {
    render() {
        return (
            <div className="award">
                <svg xmlns="http://www.w3.org/2000/svg" width="26.043" height="57.672" viewBox="0 0 26.043 57.672"><g transform="translate(-0.001 -0.277)"><path d="M4.9,12.606a8.611,8.611,0,0,0,.693-7A9.765,9.765,0,0,0,1.355,0,9.7,9.7,0,0,0,.377,7.453,8.134,8.134,0,0,0,4.9,12.606Z" transform="translate(2.043 8.271)" fill="#fff"/><path d="M.448,11.39A7.443,7.443,0,0,0,5.841,7.52,9.84,9.84,0,0,0,6.3,0,8.9,8.9,0,0,0,1.1,4.393,8.674,8.674,0,0,0,.448,11.39Z" transform="translate(11.938 11.567)" fill="#fff"/><path d="M.672,5.137a8.671,8.671,0,0,0,.137,7.04,7.84,7.84,0,0,0,4.913-4.65A9.812,9.812,0,0,0,5.33,0,9.381,9.381,0,0,0,.672,5.137Z" transform="translate(12.063 22.514)" fill="#fff"/><path d="M4.644,0A9.775,9.775,0,0,0,.422,5.622a8.6,8.6,0,0,0,.706,6.994A8.15,8.15,0,0,0,5.64,7.451,9.7,9.7,0,0,0,4.644,0Z" transform="translate(15.841 30.806)" fill="#fff"/><path d="M2.426,13.255A9.143,9.143,0,0,0,5.465,6.8,9.036,9.036,0,0,0,2.656,0,10.9,10.9,0,0,0,.01,6.794,8.069,8.069,0,0,0,2.426,13.255Z" transform="translate(20.525 38.972)" fill="#fff"/><path d="M1.5,12.762A7.241,7.241,0,0,0,5.424,7.389,11.649,11.649,0,0,0,4.591,0,8.105,8.105,0,0,0,.206,5.573,9.886,9.886,0,0,0,1.5,12.762Z" transform="translate(9.817 0.277)" fill="#fff"/><path d="M6.94,10.836a8.661,8.661,0,0,0-1.12-6.92A8.64,8.64,0,0,0,.344,0s-1.231,4.093.961,7.458A7.237,7.237,0,0,0,6.94,10.836Z" transform="translate(0.001 18.969)" fill="#fff"/><path d="M8.53,8.884A8.351,8.351,0,0,0,6.11,2.426,8.027,8.027,0,0,0,.022.017S-.394,4.326,2.386,7.042A6.842,6.842,0,0,0,8.53,8.884Z" transform="translate(0.925 30.078)" fill="#fff"/><path d="M10.423,6.085A7.546,7.546,0,0,0,6.431.781,7.738,7.738,0,0,0,0,.619S.731,4.872,4.091,6.487A6.741,6.741,0,0,0,10.423,6.085Z" transform="translate(2.863 40.448)" fill="#fff"/><path d="M6.4.378A7.829,7.829,0,0,0,0,1.109S1.162,5.228,4.665,6.364a6.855,6.855,0,0,0,6.248-1.272A7.2,7.2,0,0,0,6.4.378Z" transform="translate(8.557 49.299)" fill="#fff"/><path d="M3.087.91,1.489,0C1.4.2-6.817,20.436,16.286,43.317l1.156-1.567C-4.555,19.962,2.764,1.677,3.087.91Z" transform="translate(8.602 14.632)" fill="#fff"/></g></svg>
                <p>{this.props.awardtitle}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="26.265" height="57.672" viewBox="0 0 26.265 57.672"><g transform="translate(-0.504 -0.236)"><path d="M1.131,12.606a8.535,8.535,0,0,1-.7-6.994A9.768,9.768,0,0,1,4.7,0a9.632,9.632,0,0,1,.985,7.453A8.155,8.155,0,0,1,1.131,12.606Z" transform="translate(18.636 8.233)" fill="#fff"/><path d="M6.461,11.39A7.528,7.528,0,0,1,1.02,7.52,9.763,9.763,0,0,1,.553,0,8.98,8.98,0,0,1,5.8,4.391,8.612,8.612,0,0,1,6.461,11.39Z" transform="translate(7.815 11.529)" fill="#fff"/><path d="M5.7,5.137a8.6,8.6,0,0,1-.138,7.04A7.9,7.9,0,0,1,.6,7.528,9.749,9.749,0,0,1,1,0,9.434,9.434,0,0,1,5.7,5.137Z" transform="translate(8.229 22.473)" fill="#fff"/><path d="M1.379,0A9.794,9.794,0,0,1,5.637,5.627a8.525,8.525,0,0,1-.715,6.992A8.192,8.192,0,0,1,.374,7.451,9.625,9.625,0,0,1,1.379,0Z" transform="translate(4.729 30.767)" fill="#fff"/><path d="M3.072,13.257A9.116,9.116,0,0,1,.009,6.8,9.012,9.012,0,0,1,2.844,0,10.88,10.88,0,0,1,5.511,6.8,8.017,8.017,0,0,1,3.072,13.257Z" transform="translate(0.544 38.928)" fill="#fff"/><path d="M4.213,12.765A7.257,7.257,0,0,1,.258,7.392,11.564,11.564,0,0,1,1.1,0,8.123,8.123,0,0,1,5.521,5.576,9.815,9.815,0,0,1,4.213,12.765Z" transform="translate(11.14 0.236)" fill="#fff"/><path d="M.285,10.836a8.6,8.6,0,0,1,1.128-6.92A8.724,8.724,0,0,1,6.937,0s1.244,4.093-.969,7.458A7.32,7.32,0,0,1,.285,10.836Z" transform="translate(19.484 18.931)" fill="#fff"/><path d="M.024,8.886A8.308,8.308,0,0,1,2.464,2.423,8.144,8.144,0,0,1,8.6.017s.42,4.311-2.387,7.025A6.945,6.945,0,0,1,.024,8.886Z" transform="translate(17.208 30.037)" fill="#fff"/><path d="M0,6.09A7.56,7.56,0,0,1,4.028.781,7.864,7.864,0,0,1,10.515.619S9.778,4.872,6.388,6.485A6.837,6.837,0,0,1,0,6.09Z" transform="translate(13.367 40.404)" fill="#fff"/><path d="M4.544.377A7.97,7.97,0,0,1,11,1.108s-1.17,4.116-4.7,5.26A6.963,6.963,0,0,1,0,5.091,7.212,7.212,0,0,1,4.544.377Z" transform="translate(7.135 49.261)" fill="#fff"/><path d="M14.473.91,16.09,0c.085.2,8.378,20.436-14.927,43.314L0,41.747C22.181,19.964,14.8,1.675,14.473.91Z" transform="translate(0.504 14.594)" fill="#fff"/></g></svg>
            </div>
        );
    }
}


export default Award;