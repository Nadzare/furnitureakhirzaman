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

export default function FooterEditor() {
  const { footer, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(footer);
  const [showToast, setShowToast] = useState(false);

  const update = useCallback(
    (key: string, value: string) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleSave = () => {
    updateSection("footer", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("footer");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <SectionCard
        title="Informasi Brand"
        description="Deskripsi singkat perusahaan yang tampil di footer."
      >
        <FormField label="Deskripsi Brand">
          <TextArea
            value={form.brandDescription}
            onChange={(v) => update("brandDescription", v)}
            rows={4}
          />
        </FormField>
      </SectionCard>

      <SectionCard
        title="Informasi Kontak"
        description="Nomor telepon, email, dan area layanan."
      >
        <FormField label="Area Layanan">
          <TextInput
            value={form.serviceAreas}
            onChange={(v) => update("serviceAreas", v)}
          />
        </FormField>

        <FormField label="Nomor Telepon / WhatsApp">
          <TextInput
            value={form.phone}
            onChange={(v) => update("phone", v)}
          />
        </FormField>

        <FormField label="Email">
          <TextInput
            value={form.email}
            onChange={(v) => update("email", v)}
            type="email"
          />
        </FormField>
      </SectionCard>

      <SectionCard
        title="Media Sosial"
        description="Link profil media sosial perusahaan."
      >
        <FormField label="Instagram URL">
          <TextInput
            value={form.instagramUrl}
            onChange={(v) => update("instagramUrl", v)}
          />
        </FormField>

        <FormField label="Facebook URL">
          <TextInput
            value={form.facebookUrl}
            onChange={(v) => update("facebookUrl", v)}
          />
        </FormField>

        <FormField label="YouTube URL">
          <TextInput
            value={form.youtubeUrl}
            onChange={(v) => update("youtubeUrl", v)}
          />
        </FormField>
      </SectionCard>

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
