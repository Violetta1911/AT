import { AccentText } from "../../component/Typography/AccentText";
import { PrimaryText } from "../../component/Typography/PrimaryText";
import { SecondaryText } from "../../component/Typography/SecondaryText";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='font-mono' > Lets start Any-time-app</h1>
      <PrimaryText/>
      <SecondaryText/>
      <AccentText/>
    </main>
  )
}
