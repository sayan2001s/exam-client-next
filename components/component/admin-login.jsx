
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AdminLogin() {
  return (
    (<div className="mx-auto max-w-md py-12">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-muted-foreground">Enter your email and password to sign in.</p>
      </div>
      <form className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" required />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>)
  );
}
