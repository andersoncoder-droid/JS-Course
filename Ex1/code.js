dineroCofla = prompt("¿Cuánto dinero tienes Cofla?");
dineroRoberto = prompt("¿Cuánto dinero tienes Roberto?");
dineroPedro = prompt("¿Cuánto dinero tienes Pedro?");

if (dineroCofla >= 0.6 && dineroCofla < 1) {
  alert("Cofla, cómprate el helado de agua.");
  alert("y te sobra " + dineroCofla - 0.6);
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  alert("Cofla, cómprate el helado de crema.");
  alert("y te sobra " + dineroCofla - 1);
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  alert("Cofla, cómprate el helado de heladix.");
  alert("y te sobra " + dineroCofla - 1.6);
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  alert("Cofla, cómprate el helado de heladovich.");
  alert("y te sobra " + dineroCofla - 1.7);
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  alert("Cofla, cómprate el helado de helardo.");
  alert("y te sobra " + dineroCofla - 1.8);
} else if (dineroCofla >= 2.9) {
  alert("Cofla, cómprate un helado con confites o el pote de 1/4kg.");
  alert("y te sobra " + dineroCofla - 2.9);
} else {
  alert("Cofla ,no tienes dinero para comprar helado.");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  alert("Roberto, cómprate el helado de agua.");
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  alert("Roberto, cómprate el helado de crema.");
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  alert("Roberto, cómprate el helado de heladix.");
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  alert("Roberto, cómprate el helado de heladovich.");
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  alert("Roberto, cómprate el helado de helardo.");
} else if (dineroRoberto >= 2.9) {
  alert("Roberto, cómprate el helado con confites o el pote de 1/4kg.");
} else {
  alert("Roberto, no tienes dinero para comprar helado.");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
  alert("Pedro, cómprate el helado de agua.");
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  alert("Pedro, cómprate el helado de crema.");
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  alert("Pedro, cómprate el helado de heladix.");
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  alert("Pedro, cómprate el helado de heladovich.");
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert("Pedro, cómprate el helado de helardo.");
} else if (dineroPedro >= 2.9) {
  alert("Pedro, cómprate el helado con confites o el pote de 1/4kg.");
} else {
  alert("Pedro, no tienes dinero para comprar helado.");
}
