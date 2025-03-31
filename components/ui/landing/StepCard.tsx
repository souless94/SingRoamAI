import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../card";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: Readonly<StepCardProps>) {
  return (
    <Card className="flex flex-col items-center text-center p-6 rounded-lg border border-primary/10 bg-background shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:translate-y-[-5px] relative z-10">
      <CardHeader className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
        {number}
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
