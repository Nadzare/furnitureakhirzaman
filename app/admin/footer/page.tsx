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
    <div className="space-y-6 max-w-4xl min-w-0">
      <SectionCard
        title="Informasi Brand"
        description="Deskripsi singkat perusahaan yang tampil di footer website."
      >
        <FormField label="Deskripsi Brand">
          <TextArea
            value={form.brandDescription}
            onChange={(v) => update("brandDescription", v)}
            rows={4}
            placeholder="Jelaskan profil ringkas perusahaan..."
          />
        </FormField>
      </SectionCard>

      <SectionCard
        title="Informasi Kontak"
        description="Nomor telepon, email, dan area cakupan layanan."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <FormField label="Area Layanan">
            <TextInput
              value={form.serviceAreas}
              onChange={(v) => update("serviceAreas", v)}
              placeholder="Purwokerto, Yogyakarta, Jakarta"
            />
          </FormField>

          <FormField label="Nomor Telepon / WhatsApp">
            <TextInput
              value={form.phone}
              onChange={(v) => update("phone", v)}
              placeholder="0896-4564-6711"
            />
          </FormField>

          <div className="sm:col-span-2">
            <FormField label="Email Perusahaan">
              <TextInput
                value={form.email}
                onChange={(v) => update("email", v)}
                type="email"
                placeholder="furnitureakhirzaman@gmail.com"
              />
            </FormField>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="Media Sosial"
        description="Link profil akun media sosial resmi perusahaan."
      >
        <div className="space-y-3.5 sm:space-y-4">
          <FormField label="Instagram URL">
            <TextInput
              value={form.instagramUrl}
              onChange={(v) => update("instagramUrl", v)}
              placeholder="https://instagram.com/furnitureakhirzaman"
            />
          </FormField>

          <FormField label="Facebook URL">
            <TextInput
              value={form.facebookUrl}
              onChange={(v) => update("facebookUrl", v)}
              placeholder="https://facebook.com/..."
            />
          </FormField>

          <FormField label="YouTube URL">
            <TextInput
              value={form.youtubeUrl}
              onChange={(v) => update("youtubeUrl", v)}
              placeholder="https://youtube.com/..."
            />
          </FormField>
        </div>
      </SectionCard>

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
