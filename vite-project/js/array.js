const cardArr = [
  {
    name: "Aero Phantom",
    mainColor: "red",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Aero-Collection-Phantom-HD.jpg",
    inStock: false,
  },
  {
    name: "Spline Phantom",
    mainColor: "blue",
    price: 1,
    img: "https://files.cults3d.com/uploaders/21595173/illustration-file/64eca9c9-5732-43d9-963d-585ab2e29c3d/Valorant-Spline-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Kingdom Phantom",
    mainColor: "yellow",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Kingdom-Phantom-hd.jpg",
    inStock: false,
  },
  {
    name: "Smite Phantom",
    mainColor: "blue",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2020/09/Valorant-Smite-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Singularity Phantom",
    mainColor: "purple",
    price: 1,
    img: "https://files.cults3d.com/uploaders/21595173/illustration-file/f5ce34f7-8c21-4709-9041-e4ab5493e4bb/Valorant-Singularity-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Jade Phantom",
    mainColor: "green",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2020/10/Valorant-Jade-Collection-Phantom-HD.jpg",
    inStock: false,
  },
  {
    name: "Oni Phantom",
    mainColor: "red",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2020/07/Valorant-Oni-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Prism Phantom",
    mainColor: "purple",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Prism-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Ion Phantom",
    mainColor: "white",
    price: 1,
    img: "https://gameriv.com/wp-content/uploads/2020/12/ion-featured.jpg",
    inStock: true,
  },
  {
    name: "BlastX Phantom",
    mainColor: "purple",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2020/12/Valorant-BlastX-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Winterwunderland Phantom",
    mainColor: "blue",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2020/12/Valorant-Winterwunderland-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Galleria Phantom",
    mainColor: "red",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Galleria-Phantom-hd.jpg",
    inStock: true,
  },
  {
    name: "Infinity Phantom",
    mainColor: "green",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2021/01/Valorant-Infinity-Collection-Phantom-HD.jpg",
    inStock: false,
  },
  {
    name: "Nebula Phantom",
    mainColor: "purple",
    price: 1,
    img: "https://img.republicworld.com/republic-prod/stories/images/15984291705f4617f247dff.jpg",
    inStock: true,
  },
  {
    name: "Avalanche Phantom",
    mainColor: "blue",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Avalanche-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Glitchpop Phantom",
    mainColor: "pink",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2021/02/Valorant-Glitchpop-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Celestial Phantom",
    mainColor: "black",
    price: 1,
    img: "https://preview.redd.it/wcwhx8byjr371.jpg?width=1920&format=pjpg&auto=webp&s=0c731247c62c587f76a07182ffef7c2ec921fe02",
    inStock: true,
  },
  {
    name: "Prime Phantom",
    mainColor: "black",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2021/03/Valorant-Prime-2-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Valorant Go! Phantom",
    mainColor: "purple",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2021/02/Valorant-Go-Anime-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Silvanus Phantom",
    mainColor: "blue",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2021/04/Valorant-Silvanus-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Lightwave Phantom",
    mainColor: "black",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2021/04/Valorant-Lightwave-Collection-Phantom-HD.jpg",
    inStock: false,
  },
  {
    name: "Minima Phantom",
    mainColor: "black",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2021/05/Valorant-Minima-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Ruination Phantom",
    mainColor: "blue",
    price: 1,
    img: "https://files.cults3d.com/uploaders/21595173/illustration-file/17350764-dfe9-47d9-a381-f81099a4baec/Valorant-Ruination-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Recon Phantom",
    mainColor: "black",
    price: 1,
    img: "https://files.cults3d.com/uploaders/21595173/illustration-file/b68e2398-d9e2-4a07-8fa6-26cef0659a64/Valorant-Recon-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Spectrum Phantom",
    mainColor: "white",
    price: 1,
    img: "https://files.cults3d.com/uploaders/21595173/illustration-file/8466f80a-5c00-4b62-ad96-b5e8e669cb5e/Valorant-Spectrum-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Artisan Phantom",
    mainColor: "white",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2021/09/Valorant-Artisan-Collection-Phantom-HD.jpg",
    inStock: false,
  },
  {
    name: "Rush Phantom",
    mainColor: "red",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Rush-Phantom.jpg",
    inStock: true,
  },
  {
    name: "Radiant Crisis Phantom",
    mainColor: "white",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Radiant-Crisis-001-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Velocity Phantom",
    mainColor: "orange",
    price: 1,
    img: "https://files.cults3d.com/uploaders/21595173/illustration-file/13566bef-b7b5-4b47-bf96-8825e34fdbcf/Valorant-Velocity-Collection-Phantom-HD.jpg",
    inStock: false,
  },
  {
    name: "Protocol Phantom",
    mainColor: "black",
    price: 1,
    img: "https://files.cults3d.com/uploaders/21595173/illustration-file/f0cbbcc0-293a-4e4e-a352-e2696c458271/Valorant-Protocol-Collection-Phantom-HD.png",
    inStock: true,
  },
  {
    name: "Snowfall Phantom",
    mainColor: "blue",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Snowfall-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Tigris Phantom",
    mainColor: "black",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Tigris-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Undercity Phantom",
    mainColor: "purple",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Undercity-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Team Ace Phantom",
    mainColor: "orange",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Team-Ace-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "RGX 11z Pro Phantom",
    mainColor: "green",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-RGX-11z-Pro-2-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Hue Shift Phantom",
    mainColor: "purple",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Hugh-Shift-Collection-Phantom-HD.jpg",
    inStock: false,
  },
  {
    name: "Task Force 809 Phantom",
    mainColor: "black",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Task-Force-809-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Sarmad Phantom",
    mainColor: "yellow",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Sarmad-Collection-Phantom-HD.jpg ",
    inStock: true,
  },
  {
    name: "Reaver Phantom",
    mainColor: "purple",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Reaver-2-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Chronovoid Phantom",
    mainColor: "black",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Chronovoid-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Soulstrife Phantom",
    mainColor: "black",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Soulstrife-Collection-Phantom-HD.jpg",
    inStock: true,
  },
  {
    name: "Abyssal Phantom",
    mainColor: "blue",
    price: 1,
    img: "https://valorantstrike.com/wp-content/uploads/Valorant-Abyssal-Collection-Phantom-HD.jpg",
    inStock: true,
  },
];

export { cardArr };

/*blue: spline, smite, winter wunderland, avalanche, silvanus, snowfall, abyssal, ion,  --> 42*/
/*purple: singularity, prism, nebula, valorant go, undercity, hue shift, reaver, blastx*/