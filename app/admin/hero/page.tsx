"use client";

import { useState, useCallback } from "react";
import { useCMS } from "@/lib/cms-store";
import {
  SectionCard,
  FormField,
  TextInput,
  TextArea,
  ActionBar,
  SaveToast,
} from "@/components/admin/FormElements";

export default function HeroEditor() {
  const { hero, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(hero);
  const [showToast, setShowToast] = useState(false);

  const update = useCallback(
    (key: string, value: string) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleSave = () => {
    updateSection("hero", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("hero");
    setForm(hero);
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <SectionCard
        title="Konten Utama"
        description="Heading, subtitle, dan deskripsi yang tampil di bagian atas website."
      >
        <FormField label="Subtitle" hint="Label kecil di atas heading utama">
          <TextInput
            value={form.subtitle}
            onChange={(v) => update("subtitle", v)}
            placeholder="Interior Design, Build & Renovation"
          />
        </FormField>

        <FormField label="Heading Utama" hint="Teks besar yang menarik perhatian">
          <TextArea
            value={form.heading}
            onChange={(v) => update("heading", v)}
            rows={2}
          />
        </FormField>

        <FormField label="Heading Highlight" hint="Teks yang ditandai warna emas">
          <TextInput
            value={form.headingHighlight}
            onChange={(v) => update("headingHighlight", v)}
          />
        </FormField>

        <FormField label="Deskripsi">
          <TextArea
            value={form.description}
            onChange={(v) => update("description", v)}
            rows={3}
          />
        </FormField>
      </SectionCard>

      <SectionCard
        title="Tombol CTA"
        description="Teks tombol aksi utama dan tombol sekunder."
      >
        <FormField label="Teks Tombol Utama">
          <TextInput
            value={form.ctaText}
            onChange={(v) => update("ctaText", v)}
          />
        </FormField>

        <FormField label="Teks Tombol Sekunder">
          <TextInput
            value={form.ctaSecondaryText}
            onChange={(v) => update("ctaSecondaryText", v)}
          />
        </FormField>
      </SectionCard>

      <SectionCard
        title="Background & WhatsApp"
        description="Gambar latar dan konfigurasi WhatsApp."
      >
        <FormField label="URL Background Image">
          <TextInput
            value={form.backgroundImage}
            onChange={(v) => update("backgroundImage", v)}
          />
        </FormField>

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
