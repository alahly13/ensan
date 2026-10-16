import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { JoinCta } from "@/components/sections/JoinCta";

export const metadata: Metadata = { title: "انضم كمستشار", description: "أبدِ اهتمامك بالانضمام إلى منصة إنسان كمستشار." };

export default function JoinPage() {
  return (
    <>
      <Container className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="للمحترفين"
          title="شارك خبرتك مع من يحتاجها"
          description="التسجيل الكامل لم يُفتح بعد. هذه الصفحة تعرض الفكرة وتتيح تجربة إبداء اهتمام للعرض فقط."
        />
      </Container>
      <JoinCta />
    </>
  );
}
