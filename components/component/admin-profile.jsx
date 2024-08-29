import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export function AdminProfile() {
  return (
    (<div className="flex flex-col w-full min-h-screen bg-muted/40">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          prefetch={false}>
          <FrameIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="rounded-full ml-auto">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full border"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }} />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main
        className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-6xl w-full mx-auto grid gap-2">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <div className="text-xl font-bold">John Doe</div>
              <div className="text-sm text-muted-foreground">john@example.com</div>
            </div>
          </div>
        </div>
        <div
          className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-full mx-auto">
          <nav className="text-sm text-muted-foreground grid gap-4">
            <Link href="#" className="font-semibold text-primary" prefetch={false}>
              Profile
            </Link>
            <Link href="#" prefetch={false}>
              Change Password
            </Link>
            <Link href="#" prefetch={false}>
              Notification Preferences
            </Link>
            <Link href="#" prefetch={false}>
              Integrations
            </Link>
            <Link href="#" prefetch={false}>
              Security
            </Link>
            <Link href="#" className="text-red-500" prefetch={false}>
              Delete Account
            </Link>
          </nav>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    defaultValue="john@example.com" />
                </div>
              </CardContent>
              <CardFooter className="border-t p-6">
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your account password.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="Enter your current password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" placeholder="Enter your new password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your new password" />
                </div>
              </CardContent>
              <CardFooter className="border-t p-6">
                <Button>Change Password</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose what you want to be notified about.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive email notifications for important updates.</p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive push notifications for real-time updates.</p>
                  </div>
                  <Switch id="push-notifications" defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="border-t p-6">
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>Manage your connected services.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Google Calendar</p>
                    <p className="text-sm text-muted-foreground">Connect your Google Calendar to sync events.</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Slack</p>
                    <p className="text-sm text-muted-foreground">Receive notifications in your Slack workspace.</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Manage your account security settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
                  </div>
                  <Switch id="two-factor-auth" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Logout Sessions</p>
                    <p className="text-sm text-muted-foreground">View and manage your active login sessions.</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage Sessions
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-red-500">Delete Account</CardTitle>
                <CardDescription className="text-red-500">
                  This action cannot be undone. Your account and all associated data will be permanently deleted.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" size="sm">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>)
  );
}

function FrameIcon(props) {
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
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>)
  );
}
