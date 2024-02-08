import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { Overview } from "@/components/overview"
import { RecentTransactions } from "@/components/recent-transactions"
import { TransferForm } from "@/components/transfer-form"
import { Suspense } from "react"
import { getTransactions } from "@/services/getTransactions"
import { getBalance } from "@/services/getBalance"
import { Balance } from "@/models/balance"
import { Transaction } from "@/models/transaction"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Stablecoin Dashboard",
}

export default async function DashboardPage() {
  const {transactions} = await getTransactions() as {transactions: Transaction[]}
  const { balance } = await getBalance() as {balance: Balance[]}
  return (
    <main>
      <div className="flex-col flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="hidden md:flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Suspense>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="exchange">
                Exchange
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{
                balance.map(({ title, value, description }) => 
                <Card key={title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {title} 
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>

                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{value}</div>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
                )
              }
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>
                      You made 230 transactions this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentTransactions transactions={transactions} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="exchange">
              <div className="flex w-full justify-center items-center">
                <Card>
                  <CardContent>
                    <CardHeader>Transfer Form</CardHeader>
                    <TransferForm />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          </Suspense>
        </div>
      </div>
    </main>
  )
}