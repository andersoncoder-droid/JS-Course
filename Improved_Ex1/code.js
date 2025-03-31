"use strict";

const defineBuying = (n) => {
  let din = prompt(`Dinero de ${n}`);
  if (din >= 0.6 && din < 1) return `${n}: helado de agua`;
  if (din >= 1 && din < 1.6) return `${n}: helado de crema`;
  if (din >= 1.6 && din < 1.7) return `${n}: helado de heladix`;
  if (din >= 1.7 && din < 1.8) return `${n}: helado de heladovich`;
  if (din >= 1.8 && din < 2.9) return `${n}: helado de helardo`;
  if (din >= 2.9) return `${n}: helado de confites o pote de 1/4 kg`;
  else return `${n}: No te alcanza para nada`;
};

console.log(defineBuying("Cofla"));
console.log(defineBuying("Pedro"));
console.log(defineBuying("Roberto"));
