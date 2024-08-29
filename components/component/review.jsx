import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie } from "recharts"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Review() {
  return (
    (<div className="flex min-h-screen flex-col bg-background">
      <header
        className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}>
          <BookIcon className="h-6 w-6" />
          <span>MCQ Review</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <SettingsIcon className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8">
                <img
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }} />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6">
        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>MCQ Review</CardTitle>
                <CardDescription>Review your submitted answers and see the correct answers.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Question 1</div>
                    <div className="flex items-center gap-2">
                      <div className="text-green-500">
                        <CheckIcon className="h-5 w-5" />
                      </div>
                      <div>Correct</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] gap-2">
                    <div>
                      <div className="text-muted-foreground">Your Answer:</div>
                      <div>Option A</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Correct Answer:</div>
                      <div>Option A</div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Question 2</div>
                    <div className="flex items-center gap-2">
                      <div className="text-red-500">
                        <DoorClosedIcon className="h-5 w-5" />
                      </div>
                      <div>Incorrect</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] gap-2">
                    <div>
                      <div className="text-muted-foreground">Your Answer:</div>
                      <div>Option B</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Correct Answer:</div>
                      <div>Option C</div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Question 3</div>
                    <div className="flex items-center gap-2">
                      <div className="text-gray-500">
                        <MinusIcon className="h-5 w-5" />
                      </div>
                      <div>Unattempted</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] gap-2">
                    <div>
                      <div className="text-muted-foreground">Your Answer:</div>
                      <div>-</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Correct Answer:</div>
                      <div>Option D</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <ChartContainer
              config={{
                correct: { label: "Correct", color: "hsl(var(--chart-1))" },
                incorrect: { label: "Incorrect", color: "hsl(var(--chart-2))" },
                unattempted: { label: "Unattempted", color: "hsl(var(--chart-3))" },
              }}
              className="aspect-square min-h-[300px]">
              <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={[
                    { type: "correct", value: 2, fill: "var(--color-correct)" },
                    { type: "incorrect", value: 1, fill: "var(--color-incorrect)" },
                    { type: "unattempted", value: 1, fill: "var(--color-unattempted)" },
                  ]}
                  dataKey="value"
                  nameKey="type"
                  label />
              </PieChart>
            </ChartContainer>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
                <CardDescription>Your overall performance on the MCQ test.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>Correct Answers</div>
                  <div className="font-medium">2</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Incorrect Answers</div>
                  <div className="font-medium">1</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Unattempted Questions</div>
                  <div className="font-medium">1</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Total Questions</div>
                  <div className="font-medium">4</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Score</div>
                  <div className="font-medium">50%</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feedback</CardTitle>
                <CardDescription>Let us know how we can improve the MCQ experience.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="feedback">Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Share your thoughts and suggestions..."
                    rows={4} />
                </div>
                <Button type="submit">Submit Feedback</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>)
  );
}

function BookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}


function DoorClosedIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h20" />
      <path d="M14 12v.01" />
    </svg>)
  );
}


function MinusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}
