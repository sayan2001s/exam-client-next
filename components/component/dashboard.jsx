import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"

export function Dashboard() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header
        className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/placeholder.svg"
            alt="School Logo"
            width={40}
            height={40}
            className="rounded-full"
            style={{ aspectRatio: "40/40", objectFit: "cover" }} />
          <h1 className="text-xl font-bold">Sayan Sanfui</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <MailsIcon className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg"
              alt="User Avatar"
              width={36}
              height={36}
              className="rounded-full"
              style={{ aspectRatio: "36/36", objectFit: "cover" }} />
            <span className="sr-only">User Menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Exam Analytics</CardTitle>
              <CardDescription>View your performance and compare to the class.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <div className="text-sm font-medium">Overall Score</div>
                  <div className="text-4xl font-bold">92%</div>
                </div>
                <BarChart className="w-full aspect-[4/3]" />
              </div>
            </CardContent>
          </Card>
        </section>
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Start Exam</CardTitle>
              <CardDescription>Search for and begin your next assessment.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="relative flex-1">
                    <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input type="search" placeholder="Search for exams..." className="pl-10 w-full" />
                  </div>
                  <Button
                    className="bg-primary text-primary-foreground rounded-md px-4 py-2 hover:bg-primary/80">
                    Search
                  </Button>
                </div>
                <div className="grid gap-2">
                  <div className="text-sm font-medium">Upcoming Exams</div>
                  <div className="grid gap-2">
                    <Card className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium">Math Midterm</div>
                        <div className="text-sm text-muted-foreground">April 15, 2023</div>
                      </div>
                      <Button>Start Exam</Button>
                    </Card>
                    <Card className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium">English Final</div>
                        <div className="text-sm text-muted-foreground">May 10, 2023</div>
                      </div>
                      <Button>Start Exam</Button>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>)
  );
}

function BarChart(props) {
  return (
    (<div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data" />
    </div>)
  );
}


function LineChart(props) {
  return (
    (<div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application" />
    </div>)
  );
}


function MailsIcon(props) {
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
      <rect width="16" height="13" x="6" y="4" rx="2" />
      <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
      <path d="M2 8v11c0 1.1.9 2 2 2h14" />
    </svg>)
  );
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}
