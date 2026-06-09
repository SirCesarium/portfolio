import Button from "@/components/Button";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-32 sm:px-16">
      <header className="flex w-full max-w-4xl flex-col items-center sm:items-start">
        <Typography variant="h1">Lorem Ipsum</Typography>

        <Typography variant="lead" className="mt-4">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
        </Typography>

        <Typography variant="body" className="mt-6 max-w-2xl text-text/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          auctor, nulla non vehicula suscipit, purus nunc.
        </Typography>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="#">GITHUB</Button>
          <Button variant="outline" href="#">
            GET IN TOUCH
          </Button>
        </div>
      </header>
    </main>
  );
}
