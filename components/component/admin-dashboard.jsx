import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"

export function AdminDashboard() {
  return (
    (<div
      className="grid min-h-screen w-full grid-cols-1 gap-4 bg-background p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <CardHeader>
          <CardTitle>Exam Portal Analytics</CardTitle>
          <CardDescription>Get a comprehensive overview of your exam portal's performance.</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline">Manage Subjects</Button>
          <Button variant="outline">Manage Questions</Button>
          <Button variant="outline">Manage Users</Button>
          <Button variant="outline">Manage Operators</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>User Registration</CardTitle>
          <CardDescription>Track the number of users registered over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <LineChart className="aspect-[4/3]" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Exams Conducted</CardTitle>
          <CardDescription>Monitor the number of exams given over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart className="aspect-[4/3]" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
          <CardDescription>View the total number of users registered.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">12,345</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Questions Added</CardTitle>
          <CardDescription>Track the number of questions added over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart className="aspect-[4/3]" />
        </CardContent>
      </Card>
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
