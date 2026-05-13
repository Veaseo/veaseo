import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <AnimatedSection className={`mb-14 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="badge mb-4 inline-flex">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p className={`text-dark-300 text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
