import { Container } from "@/components/shared/Container";

export default function Home() {
  return (
    <main className="flex-1">
      <Container className="py-20">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Shah Noori</h1>
        <p className="text-lg text-foreground/80">
          Initial setup completed.
        </p>
      </Container>
    </main>
  );
}
