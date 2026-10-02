"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useCMS } from "@/lib/cms-store";
import {
  SectionCard,
  FormField,
  TextInput,
  TextArea,
  ActionBar,
  SaveToast,
} from "@/components/admin/FormElements";

export default function CTAEditor() {
  const { cta, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(cta);
  const [showToast, setShowToast] = useState(false);

  const update = useCallback(
    (key: string, value: string) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleSave = () => {
    updateSection("cta", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("cta");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl min-w-0">
      <SectionCard
        title="Konten CTA"
        description="Teks call-to-action untuk mendorong pengunjung menghubungi via WhatsApp."
      >
        <FormField label="Subtitle Pill">
          <TextInput
            value={form.subtitle}
            onChange={(v) => update("subtitle", v)}
            placeholder="Konsultasi Gratis..."
          />
        </FormField>

        <FormField label="Heading">
          <TextInput
            value={form.heading}
            onChange={(v) => update("heading", v)}
            placeholder="Siap Mewujudkan Interior Impian Anda?"
          />
        </FormField>

        <FormField label="Deskripsi">
          <TextArea
            value={form.description}
            onChange={(v) => update("description", v)}
            rows={3}
          />
        </FormField>

        <FormField label="Teks Tombol">
          <TextInput
            value={form.ctaText}
            onChange={(v) => update("ctaText", v)}
            placeholder="Konsultasi via WhatsApp"
          />
        </FormField>
      </SectionCard>

      <SectionCard
        title="Background & WhatsApp"
        description="Konfigurasi background image dan WhatsApp link."
      >
        <FormField label="URL Background Image">
          <TextInput
            value={form.backgroundImage}
            onChange={(v) => update("backgroundImage", v)}
            placeholder="https://images.unsplash.com/..."
          />
        </FormField>

        {form.backgroundImage && (
          <div className="relative w-full h-36 sm:h-48 rounded-lg overflow-hidden border border-[#E8E1D8] bg-[#F5F3F0]">
            <Image
              src={form.backgroundImage}
              alt="CTA Background Preview"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 768px"
            />
          </div>
        )}

        <FormField label="Nomor WhatsApp" hint="Format: 6289645646711">
          <TextInput
            value={form.whatsappNumber}
            onChange={(v) => update("whatsappNumber", v)}
          />
        </FormField>

        <FormField label="Pesan Default WhatsApp">
          <TextArea
            value={form.whatsappMessage}
            onChange={(v) => update("whatsappMessage", v)}
            rows={3}
          />
        </FormField>
      </SectionCard>

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
