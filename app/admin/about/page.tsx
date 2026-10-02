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
import { Plus, Trash2, GripVertical } from "lucide-react";

export default function AboutEditor() {
  const { about, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(about);
  const [showToast, setShowToast] = useState(false);

  const update = useCallback(
    (key: string, value: any) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const updateHighlight = (index: number, value: string) => {
    const updated = [...form.highlights];
    updated[index] = value;
    update("highlights", updated);
  };

  const addHighlight = () => {
    update("highlights", [...form.highlights, ""]);
  };

  const removeHighlight = (index: number) => {
    update(
      "highlights",
      form.highlights.filter((_: string, i: number) => i !== index)
    );
  };

  const updateImage = (index: number, key: string, value: string) => {
    const updated = [...form.images];
    updated[index] = { ...updated[index], [key]: value };
    update("images", updated);
  };

  const handleSave = () => {
    updateSection("about", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("about");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <SectionCard
        title="Konten Teks"
        description="Heading, subtitle, dan paragraf deskripsi section About."
      >
        <FormField label="Subtitle">
          <TextInput
            value={form.subtitle}
            onChange={(v) => update("subtitle", v)}
          />
        </FormField>

        <FormField label="Heading">
          <TextInput
            value={form.heading}
            onChange={(v) => update("heading", v)}
          />
        </FormField>

        <FormField label="Paragraf 1">
          <TextArea
            value={form.description1}
            onChange={(v) => update("description1", v)}
            rows={3}
          />
        </FormField>

        <FormField label="Paragraf 2">
          <TextArea
            value={form.description2}
            onChange={(v) => update("description2", v)}
            rows={3}
          />
        </FormField>

        <FormField label="Teks Tombol CTA">
          <TextInput
            value={form.ctaText}
            onChange={(v) => update("ctaText", v)}
          />
        </FormField>
      </SectionCard>

      <SectionCard
        title="Highlight Keunggulan"
        description="Poin-poin singkat keunggulan perusahaan."
      >
        <div className="space-y-3">
          {form.highlights.map((highlight: string, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <GripVertical className="w-4 h-4 text-[#3A2F26]/30 flex-shrink-0" />
              <TextInput
                value={highlight}
                onChange={(v) => updateHighlight(index, v)}
              />
              <button
                onClick={() => removeHighlight(index)}
                className="p-2 text-[#3A2F26]/30 hover:text-red-500 transition-colors cursor-pointer flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            onClick={addHighlight}
            className="flex items-center gap-2 text-[#B08B57] text-sm font-sans font-medium hover:text-[#C4A26F] transition-colors cursor-pointer mt-2"
          >
            <Plus className="w-4 h-4" />
            Tambah Highlight
          </button>
        </div>
      </SectionCard>

      <SectionCard
        title="Gambar Kolase"
        description="Tiga gambar yang ditampilkan secara overlapping."
      >
        {form.images.map((img: { src: string; alt: string }, index: number) => (
          <div
            key={index}
            className="space-y-3 pb-4 border-b border-[#E8E1D8] last:border-b-0 last:pb-0"
          >
            <span className="text-xs font-sans font-semibold text-[#3A2F26]/50 uppercase tracking-wider">
              Gambar {index + 1}
            </span>
            <FormField label="URL Gambar">
              <TextInput
                value={img.src}
                onChange={(v) => updateImage(index, "src", v)}
              />
            </FormField>
            <FormField label="Alt Text">
              <TextInput
                value={img.alt}
                onChange={(v) => updateImage(index, "alt", v)}
              />
            </FormField>
          </div>
        ))}
      </SectionCard>

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
