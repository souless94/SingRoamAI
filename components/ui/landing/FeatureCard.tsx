
import { ReactNode } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../card";

interface FeatureCardProps {
    icon: ReactNode 
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: Readonly<FeatureCardProps>) {
    return (
      <Card className="flex flex-col items-center text-center p-6 rounded-lg border border-primary/10 bg-background shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:translate-y-[-5px] relative z-10">
        <CardHeader className="flex justify-center items-center">
          <div className="p-3 bg-primary/5 rounded-full">{icon}</div>
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