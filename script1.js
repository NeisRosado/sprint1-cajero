let userslist = [
  {
    name: "Neis",
    document: "1995",
    password: "2005",
    type: 1,
  },

  {
    name: "María",
    document: "1996",
    password: "2006",
    type: 2,
  },

  {
    name: "Kevin",
    document: "1997",
    password: "2007",
    type: 2,
  },
];

const moneyinBox = [
  {
    denomination: 100000,
    cant: 0,
  },
  {
    denomination: 50000,
    cant: 0,
  },
  {
    denomination: 20000,
    cant: 0,
  },

  {
    denomination: 10000,
    cant: 0,
  },

  {
    denomination: 5000,
    cant: 0,
  },
];

let totalinBox = 0;

const starCash = () => {
  const userDoc = prompt("Digite su Número de Documento");
  const userPass = prompt("Ingrese Contraseña");
  return {
    userDoc,
    userPass,
  };
};

const userCheck = () => {
  let userLogin = starCash();
  let userSearch = userslist.find(
    (user) =>
      user.document === userLogin.userDoc &&
      user.password === userLogin.userPass
  );

  while (!userSearch) {
    alert("Usuario no Encontrado: Verifique sus Datos ");
    userLogin = starCash();
    userSearch = userslist.find(
      (user) =>
        user.document === userLogin.userDoc &&
        user.password === userLogin.userPass
    );
  }
  return userSearch;
};

const deposity = () => {
  alert("Cargar Cajero");
  let totalMoney = 0;
  moneyinBox.forEach((moneyBill) => {
    const deposited = prompt(
      `Ingrese Cantidad de Billetes de ${moneyBill.denomination} a Recargar`
    );
    const depositedCant = Number(deposited);
    moneyBill.cant += depositedCant;
    const sumDenomination = moneyBill.denomination * moneyBill.cant;
    totalMoney += sumDenomination;
    console.log(
      `Billete de: ${moneyBill.denomination} Cant: ${moneyBill.cant} Total: ${sumDenomination}`
    );
  });
  console.log("Total Disponible en Caja ", totalMoney);
  totalinBox += totalMoney;
};

const withdrawals = () => {
  alert("Proceso de Retiro");
  let total = 0;
  const amounttoWithdraw = prompt("Ingrese Cantidad a Retirar");
  const moneywithdrawal = Number(amounttoWithdraw);
  if (moneywithdrawal > totalinBox) {
    alert("Cajero en Mantenimiento, Regrese pronto");
  }
  if (moneywithdrawal <= totalinBox) {
    const arrayMoney = [];
    let moneyDelivery = moneywithdrawal;
    moneyinBox.forEach((element) => {
      const moneyNeed = Math.floor(moneyDelivery / element.denomination);
      if (moneyNeed > 0) {
        if (moneyNeed <= element.cant) {
          const bills = {
            denomination: element.denomination,
            amount: moneyNeed,
          };

          arrayMoney.push(bills);
          element.cant -= moneyNeed;
          moneyDelivery -= element.denomination * moneyNeed;

          console.log(
            `Disponible: ${moneyNeed} Billetes de: ${element.denomination}`
          );
        } else {
          const bills = {
            denomination: element.denomination,
            amount: element.cant,
          };
          arrayMoney.push(bills);
          moneyDelivery -= element.denomination * bills.cant;
          element.cant = element.cant;
          console.log(`No Retirado, Sencillo no Disponible`);
        }
      }
    });
    moneyinBox.forEach((rest) => {
      const balance = rest.denomination * rest.cant;
      total += balance;

      console.log(`Saldo Restante: ${rest.denomination} cant: ${rest.cant}`);
    });
  }
  console.log("Total Disponible en Caja ", parseInt (total));
};

const transaction = () => {
  while (true) {
    const userfound = userCheck();
    if (userfound) {
      if (userfound.type === 1) {
        deposity();
      } else {
        withdrawals();
      }
    }
  }
};
transaction();
