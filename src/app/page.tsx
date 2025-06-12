import { Button } from "@/components/ui/button";
import { Roboto_Flex } from "next/font/google";

const bokerFont = Roboto_Flex({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
})

export default function Home() {
  return (
    <div className={`text-lg ${bokerFont.className}`}>
      <p className="">hello world</p>
      <Button variant={"default"}>Click Me</Button>
    </div>
  );
}
