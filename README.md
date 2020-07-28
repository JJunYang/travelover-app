# Travelover Website

A travel website developed using MERN format(M=MongoDB, E=Express, R=React, N=Nodejs), where users can search different travel guides in destinations, and blog their comments and reviews to specific places or topics. The website also contains a mini ticket ordering system, where users can buy flight tickets. All travel places no matter what category is, are involved in a review ranking system and their reviews level will be shown.

## Functionality

- User Register and Login
- Ticket Booking
- Explore City
- Review Travel Places
- Travel Guide Searching
- Comment Topics
- User Info Management

## Technology

- Framework: MERN stack (MongoDB, Express, React, Node.js)
- JS Version: ECMAScript 6
- Middleware: bodyParser, cors
- Payment integration: Paypal sandbox SDK for Node [PayPal-node-SDK](https://github.com/paypal/PayPal-node-SDK)
- Registeration: [Passport](https://www.npmjs.com/package/passport)
- Back end: Express, MongoDB
- Front end: React
- Http Request: [axios](https://github.com/axios/axios)
- Web Style: [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap), CSS3, Bootstrap, [react-carousel](https://github.com/brainhubeu/react-carousel)
- Icon and Logo: Iconfont, Google Fonts
- Image: [Unsplash](https://unsplash.com/)
- Data : [Tripadvisor](https://www.tripadvisor.com/), [Mafengwo](http://www.mafengwo.cn/)
- Small components: [moment](https://gist.github.com/timrwood/e72f2eef320ed9e37c51#backwards-incompatible-changes)

## Screenshots

## Getting Started

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```
https://github.com/jjyang1108/travelover-app.git
```

2. Install NPM packages

```
npm install
```

3. Create file `.env` in root and add:

```
DB_CONNECT=[YOUR MongDB Connection]
```

## License

Distributed under the MIT License. See `LICENSE` for more information.
