import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ReactNode } from "react"

type SummaryCardProps = {
  title: string
  value: string | number
  description: string
  trendLabel: string
  footerLabel: string
  footerSubLabel: string
  icon: ReactNode // icon component (e.g., <TrendingUpIcon />)
  trendDirection: "up" | "down" // to determine icon color/style
}

export default function SummaryCard({
  title,
  value,
  description,
  trendLabel,
  footerLabel,
  footerSubLabel,
  icon,
  trendDirection
}: SummaryCardProps) {
  return (
    <Card className="@container/card m-0">
      <CardHeader className="relative">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          {value}
        </CardTitle>
        <div className="absolute right-4 top-4">
          <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
            {icon}
            {trendLabel}
          </Badge>
        </div>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {footerLabel} {icon}
        </div>
        <div className="text-muted-foreground">{footerSubLabel}</div>
      </CardFooter>
    </Card>
  )
}
