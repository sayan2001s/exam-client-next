import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AdminRegister() {
  return (
    (<div className="mx-auto max-w-md py-12">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Create Admin Account</h1>
        <p className="text-muted-foreground">Enter your information to create a new admin account.</p>
      </div>
      <form className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="Enter your phone number" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter a password" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
            required />
        </div>
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </div>)
  );
}
