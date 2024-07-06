// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.Header = void 0;
// const styled_components_1 = __importDefault(require("styled-components"));
// const WomanIcon_1 = require("./WomanIcon");
// const Header = () => {
//     return (React.createElement(Container, null,
//         React.createElement(Icon, null,
//             React.createElement(WomanIcon_1.WomanIcon, null)),
//         React.createElement(PSection, null,
//             React.createElement(P, null, " UK Bank Holidays"))));
// };
// exports.Header = Header;
// const Container = styled_components_1.default.div `
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     margin: 80px auto;

// `;
// const Icon = styled_components_1.default.div `
//    border-radius: 50%;
//    background: rgb(238,174,202);
//    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
//    width: 350px;
//    height: 350px;
//    margin: 0 auto;
//    z-index: -1;

// `;
// const PSection = styled_components_1.default.div `
//     font-size: 3rem;
//     display: inline-block;
//     white-space: nowrap;
//     animation: AnimatedText 25s infinite linear;
//     padding-left: 100%; 
//     @keyframes AnimatedText  {
//         to {
//           transform: translateX(-100%)
//         }
//       }
// `;
// const P = styled_components_1.default.h1 `
//     font-size: 1.5rem;
//     margin-top: 70px;
//     color: #000000; 
   
// `;
