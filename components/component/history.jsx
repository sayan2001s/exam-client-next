import Link from "next/link"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"

export function History() {
  return (
    (<div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Past Exams</h1>
        <p className="text-muted-foreground">View and download your past exams.</p>
      </div>
      <div className="overflow-hidden rounded-lg border bg-background">
        <table className="w-full table-auto">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Exam Name</th>
              <th className="px-4 py-3 text-left font-medium">Date</th>
              <th className="px-4 py-3 text-left font-medium">Score</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3">
                <div className="font-medium">Algebra Midterm</div>
                <div className="text-sm text-muted-foreground">Algebra 101, Spring 2023</div>
              </td>
              <td className="px-4 py-3">April 15, 2023</td>
              <td className="px-4 py-3">92%</td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}>
                    <DownloadIcon className="h-4 w-4" />
                    Download
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    <CheckIcon className="h-4 w-4" />
                    Review
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">
                <div className="font-medium">Biology Final</div>
                <div className="text-sm text-muted-foreground">Biology 201, Fall 2022</div>
              </td>
              <td className="px-4 py-3">December 10, 2022</td>
              <td className="px-4 py-3">88%</td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}>
                    <DownloadIcon className="h-4 w-4" />
                    Download
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    <CheckIcon className="h-4 w-4" />
                    Review
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">
                <div className="font-medium">Physics Midterm</div>
                <div className="text-sm text-muted-foreground">Physics 301, Spring 2022</div>
              </td>
              <td className="px-4 py-3">April 20, 2022</td>
              <td className="px-4 py-3">85%</td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}>
                    <DownloadIcon className="h-4 w-4" />
                    Download
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    <CheckIcon className="h-4 w-4" />
                    Review
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">
                <div className="font-medium">Chemistry Final</div>
                <div className="text-sm text-muted-foreground">Chemistry 401, Fall 2021</div>
              </td>
              <td className="px-4 py-3">December 15, 2021</td>
              <td className="px-4 py-3">92%</td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}>
                    <DownloadIcon className="h-4 w-4" />
                    Download
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    <CheckIcon className="h-4 w-4" />
                    Review
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>)
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


function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>)
  );
}
