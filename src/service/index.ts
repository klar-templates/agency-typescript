import IPage from "./interface";
// export const genBlogId = (): string => Math.random().toString(36).slice(-6);
// export const async BlogData: IPage[] = [
//   {
//     id: genBlogId()
    
//   },
// ];


// function init(siteName: string) {
//   if (!localStorage.getItem('data')) {
//     async function data() {
//       const response = await fetch(
//         `https://raw.githubusercontent.com/klar-sites/${siteName}/master/data.json`);
//       return response.json();
//     }
//     data()
//       .then((data) => {
//         // localStorage.setItem('data', JSON.stringify(data));
//         // startApp(data: any): any;
//       });
//   } else {
//     console.log('what');
//     // data = JSON.parse(localStorage.getItem('data'));
//     // startApp(data);
//   }
// }

// // This is for one page website
// // Param: Site name in Klar
// init('agency');
