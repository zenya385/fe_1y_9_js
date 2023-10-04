// Завдання 7
// Напиши сценарій керування особистим кабінетом інтернет - банку.
// Є об'єкт account в якому
// необхідно реазувати методи для роботи з балансом та історією транзакцій.

// - Типів транзацкій всього два.
// - Можна покласти або зняти гроші з рахунку.

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// - Кожна транзакція - це об'єкт з властивостями: id, type і amount
const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Історія транзакцій
  transactions: [],

  // - Метод створює і повертає об'єкт транзакції.
  // - Приймає суму і тип транзакції.
  createTransaction(amount, type) {
    const transaction = {
      id: account.transactions.length + 1,
      type,
      amount,
    };
    return transaction;
  },

  // - Метод відповідає за додавання суми до балансу.
  // - Приймає суму танзакції.
  // - Викликає createTransaction для створення об'єкта транзакції
  // - після чого додає його в історію транзакцій
  deposit(amount) {
    let { createTransaction, transactions, balance } = this;
    const transaction = createTransaction(amount, Transaction.DEPOSIT);
    transactions.push(transaction);
    balance += amount;
    console.log(`Рахунок поповнено на ${amount}`);
  },

  // - Метод відповідає за зняття суми з балансу.
  // - Приймає суму танзакції.
  // - Викликає createTransaction для створення об'єкта транзакції
  // - після чого додає його в історію транзакцій.
  // - Якщо amount більше, ніж поточний баланс, виводь повідомлення
  //   - про те, що зняття такої суми не можливо, недостатньо коштів.
  withdraw(amount) {
    let { transactions, balance, createTransaction } = this;
    if (amount > balance) {
      console.log(`Вибачте, у вас недостаньо коштів на рахунку`);
      // return;
    }
    const transaction = createTransaction(amount, Transaction.WITHDRAW);
    balance -= amount;
    transactions.push(transaction);

    return console.log(`З рахунок знято ${amount}`);
  },

  // - Метод повертає поточний баланс
  getBalance() {
    // const { balance } = this;
    // return console.log(`На вашому рахунку ${balance}`);
    return console.log(`На вашому рахунку ${this.balance}`);
  },

  // - Метод шукає і повертає об'єкт транзакції по id
  getTransactionDetails(id) {
    const { transactions } = this;
    // for (const transaction of transactions) {
    //  const transaction = {
    //  id,
    //  type,
    //  amount,
    //  };
    // for (const { id: idKey, type, amount } of transactions) {
    //   if (idKey === id) {
    //     return { idKey, type, amount };
    //   }
    for (const transaction of transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  // - Метод повертає кількість коштів
  // - певного типу транзакції з усієї історії транзакцій
  getTransactionTotal(type) {
    const { transactions } = this;
    let sum = 0;

    for (const { type: typeKey, amount } of transactions) {
      if (typeKey === type) {
        sum += amount;
      }
    }
    // for (const transaction of this.transactions) {
    //   if (transaction.type === type) {
    //     sum += transaction.amount;
    //   }
    // }
    return sum;
  },
};

account.deposit(500);
account.deposit(200);
account.deposit(500);
account.getBalance();
account.withdraw(300);
account.withdraw(100);

account.getBalance();
console.log('історія трансакцій', account.transactions);
console.log('трансакція по id', account.getTransactionDetails(4));
console.log('Загальна сума поповнень', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('Загальна сума зняття коштів', account.getTransactionTotal(Transaction.WITHDRAW));
