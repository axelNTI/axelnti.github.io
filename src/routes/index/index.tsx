import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default () => {
  return (
    <div class="min-h-dvh bg-background font-sans text-text">
      <main class="[&>*]:py-24">
        <HeroSection />

        <ExperienceSection />

        <ProjectSection />

        <EducationSection />

        <CertificationsSection />
      </main>

      {/* Footer */}
    </div>
  );
};
