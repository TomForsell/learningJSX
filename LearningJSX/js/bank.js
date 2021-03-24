const bankData = [
  {"name": "Tom's Bank Account",
    "balance": [
      { "balance": 100 },

    ],
    "transactions": [
      { "name": "salary", "amount": 10000},
      { "name": "food purchase", "amount": 10},
    ]
  },
  {
    "name": "Tom cruise's  Bank Account",
    "balance": [
      { "balance": 100 },

    ],
    "transactions": [
      { "name": "salary for acting in shite movies", "amount": 90},
      { "name": "pay to scientology church", "amount": -230000},
    ]
  },
]

const ItemsList = ({ title, items, extractorFunc }) =>
  <React.Fragment>
    <h4>{title}</h4>
    <ul className="{title}">
      {items.map((item, i) =>
        <li key={i}>{extractorFunc(item)}</li>
      )}
    </ul>
  </React.Fragment>

const BankAccount = ({ name, balance, transactions }) =>
  <fieldset id={name}>
    <legend>{name}</legend>
    <ItemsList title="Balance" items={balance} extractorFunc={balance => balance.balance} />
    <ItemsList title="Transactions" items={transactions} extractorFunc={transaction => transaction.name + ': '+ transaction.amount} />
  </fieldset>

const Banks = ({title, accounts}) =>
  <div>
    <header>
      <h1>{title}</h1>
    </header>
    <div>
      {accounts.map((account, i) =>
        <BankAccount key={i} {...account} />
      )}
    </div>
  </div>
ReactDOM.render(
  <Banks accounts={bankData} title="First withdrawal only bank of Norway" />,
  document.getElementById("bank-container")
)
