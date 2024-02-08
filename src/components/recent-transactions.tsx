import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const transactions = [
  {
    transactionId: "3",
    title: "Deposit Funds",
    currency: "usd",
    description: "Jan 10 2024 13:49",
    amount: "+$4,000"
  },
  {
    transactionId: "2",
    title: "Withdrawal Funds",
    currency: "usd",
    description: "Jan 2 2024 20:37",
    amount: "-$7,000"
  },
  {
    transactionId: "1",
    title: "Received",
    currency: "eth",
    description: "Jan 1 2024 00:07",
    amount: "23.53 ETH"
  },
  {
    transactionId: "0",
    title: "Transferred",
    currency: "btc",
    description: "Dec 23 2023 16:25",
    amount: "0.05 BTC"
  }
]

export function RecentTransactions() {
  return (
    <div className="space-y-8">
      {transactions.map(({ transactionId, title, currency, description, amount }, index) => (
      <div key={transactionId} className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={`/${currency}.png`} />
          <AvatarFallback>{currency}</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{title}</p>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="ml-auto font-medium">{amount}</div>
      </div>
      ))}

    </div>
  )
}
