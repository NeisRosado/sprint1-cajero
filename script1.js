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
    denomination: 5000,
    cant: 0,
  },
  {
    denomination: 10000,
    cant: 0,
  },
  {
    denomination: 20000,
    cant: 0,
  },

  {
    denomination: 50000,
    cant: 0,
  },

  {
    denomination: 100000,
    cant: 0,
  },
];

let totalEnCaja = 0;

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
    alert("Usuario no encontrado: por favor verifique sus datos ");
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
      ` denominación: ${moneyBill.denomination} cantidad: ${moneyBill.cant} total: ${sumDenomination}`
    );
  });
  console.log("Total Disponible en Caja ", totalMoney);
  totalEnCaja += totalMoney;
};

const withdrawals = () => {
  let  cantRetirar;
  let disponible = 0; 
  alert ("Retirar Dinero")
  cantRetirar = prompt("Ingrese Cantidad a Retirar");
//Hasta aquí llegué
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
