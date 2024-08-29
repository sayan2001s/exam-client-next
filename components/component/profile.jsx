import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Profile() {
  return (
    (<div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-4 sm:px-6">
        <div className="container mx-auto flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Jared Palmer</h1>
            <p className="text-sm text-primary-foreground/80">jared@example.com</p>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-10 px-4 sm:px-6">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Profile</h2>
          <Card>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="avatar">Avatar</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Change</Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Jared Palmer" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="jared@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  className="min-h-[100px]"
                  defaultValue="I'm a software engineer and I love to code!" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </section>
        <section className="space-y-6 mt-10">
          <h2 className="text-2xl font-bold">Change Password</h2>
          <Card>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Change Password</Button>
            </CardFooter>
          </Card>
        </section>
        <section className="space-y-6 mt-10">
          <h2 className="text-2xl font-bold">Delete Account</h2>
          <Card>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="delete-reason">Why are you deleting your account?</Label>
                <Textarea id="delete-reason" className="min-h-[100px]" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="destructive">Delete Account</Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    </div>)
  );
}
