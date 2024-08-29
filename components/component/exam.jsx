import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function Exam() {
  return (
    (<div className="flex flex-col h-screen">
      <header className="py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Exam</h1>
        <div className="flex items-center gap-4">
          <div className="bg-[#FFA500]/20 px-3 py-2 rounded-md text-sm font-medium">
            Time Remaining: <span className="font-bold">10:00</span>
          </div>
          <Button variant="solid" size="sm" className="bg-[#4CAF50] text-white">
            Submit
          </Button>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-[300px_1fr] gap-8 p-8">
        <div className="bg-background rounded-lg border shadow-sm p-6 space-y-6">
          <h2 className="text-lg font-semibold">Question Navigation</h2>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <Button
                key={i}
                variant={i === 0 ? "primary" : i < 5 ? "outline" : i < 10 ? "secondary" : i < 15 ? "info" : "muted"}
                size="sm"
                className="w-full">
                {i + 1}
              </Button>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            <div>
              Answered: <span className="text-[#FFA500]">Orange</span>
            </div>
            <div>
              Marked: <span className="text-[#FFA500]">Yellow</span>
            </div>
            <div>
              Current: <span className="text-[#4CAF50]">Green</span>
            </div>
            <div>
              Unanswered: <span className="text-[#0000FF]">Blue</span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg border shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Question 1 of 20</div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
              <Button variant="outline" size="sm">
                Mark
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-lg font-semibold">What is the capital city of France?</div>
            <div className="space-y-2">
              <RadioGroup>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="a" id="a" className="peer sr-only" />
                  <Label htmlFor="a" className="flex items-center gap-2 cursor-pointer">
                    <div
                      className="w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center peer-checked:bg-[#4CAF50] peer-checked:border-[#4CAF50]">
                      <div className="w-3 h-3 rounded-full bg-background" />
                    </div>
                    <span>Paris</span>
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="b" id="b" className="peer sr-only" />
                  <Label htmlFor="b" className="flex items-center gap-2 cursor-pointer">
                    <div
                      className="w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center peer-checked:bg-[#FFA500] peer-checked:border-[#FFA500]">
                      <div className="w-3 h-3 rounded-full bg-background" />
                    </div>
                    <span>London</span>
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="c" id="c" className="peer sr-only" />
                  <Label htmlFor="c" className="flex items-center gap-2 cursor-pointer">
                    <div
                      className="w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center peer-checked:bg-[#FF0000] peer-checked:border-[#FF0000]">
                      <div className="w-3 h-3 rounded-full bg-background" />
                    </div>
                    <span>Berlin</span>
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="d" id="d" className="peer sr-only" />
                  <Label htmlFor="d" className="flex items-center gap-2 cursor-pointer">
                    <div
                      className="w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center peer-checked:bg-[#0000FF] peer-checked:border-[#0000FF]">
                      <div className="w-3 h-3 rounded-full bg-background" />
                    </div>
                    <span>Madrid</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}
