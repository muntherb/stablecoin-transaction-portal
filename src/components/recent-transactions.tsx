import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Transaction } from "@/models/transaction"


export function RecentTransactions({transactions}:{transactions: Transaction[]}) {
  if (!transactions || transactions.length === 0) return <></>
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
