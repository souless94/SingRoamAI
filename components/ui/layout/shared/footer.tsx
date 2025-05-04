import Image from "next/image";

export function AppFooter() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Image
                src="/images/logo.png" // Path to your logo image
                alt="Logo" // Alt text for accessibility
                width={50} // Set width of the logo
                height={50} // Set height of the logo
              />
              <span>singroamAI</span>
            </div>
            <p className="text-muted-foreground max-w-[300px]">
              AI-powered travel planning to help you create unforgettable
              experiences.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
